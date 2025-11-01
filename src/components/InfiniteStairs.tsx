import React, { useState, useEffect, useCallback } from 'react';
import './InfiniteStairs.css';

interface StairBlock {
  id: number;
  x: number;
  y: number;
  direction: 'left' | 'right';
}

const InfiniteStairs: React.FC = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [playerDirection, setPlayerDirection] = useState<'left' | 'right'>('right');
  const [stairs, setStairs] = useState<StairBlock[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  
  // 게이지 시스템 상태
  const [hasStarted, setHasStarted] = useState(false);
  const [gauge, setGauge] = useState(10); // 10초 시작
  const [lastMoveTime, setLastMoveTime] = useState<number | null>(null);
  const [gaugeActive, setGaugeActive] = useState(false);

  // 화면 크기 변화 감지
  useEffect(() => {
    const handleResize = () => {
      // 리사이즈 시 게임 월드 다시 렌더링을 위해 빈 함수
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 게이지 시스템 관리
  useEffect(() => {
    if (!gaugeActive || gameOver) return;

    const interval = setInterval(() => {
      const now = Date.now();
      
      setGauge(prevGauge => {
        // 마지막 움직임으로부터의 시간 계산
        if (lastMoveTime) {
          const timeSinceLastMove = (now - lastMoveTime) / 1000; // 초 단위
          
          if (timeSinceLastMove > 2) {
            // 2초 동안 움직이지 않으면 게이지 감소 (더 빠르게)
            return Math.max(0, prevGauge - 0.5);
          } else if (timeSinceLastMove < 1) {
            // 빠르게 움직이면 게이지 증가
            return Math.min(10, prevGauge + 0.2);
          }
        }
        
        // 기본적으로 천천히 감소
        return Math.max(0, prevGauge - 0.1);
      });
    }, 100); // 100ms마다 업데이트

    return () => clearInterval(interval);
  }, [gaugeActive, gameOver, lastMoveTime]);

  // 게이지가 0이 되면 게임 오버
  useEffect(() => {
    if (gauge <= 0 && gaugeActive) {
      setGameOver(true);
    }
  }, [gauge, gaugeActive]);

  // 초기 계단 생성 (아래에서부터 시작)
  useEffect(() => {
    const initialStairs: StairBlock[] = [];
    let currentX = 0;
    let currentDirection: 'left' | 'right' = 'right';
    
    for (let i = 0; i < 50; i++) { // 더 많은 계단 생성
      initialStairs.push({
        id: i,
        x: currentX,
        y: i,
        direction: currentDirection
      });
      
      // 다음 계단 위치 결정 (더 자연스러운 패턴)
      if (Math.random() > 0.3) { // 70% 확률로 같은 방향 계속
        if (currentDirection === 'right') {
          currentX += 1;
        } else {
          currentX -= 1;
        }
      } else { // 30% 확률로 방향 전환
        currentDirection = currentDirection === 'right' ? 'left' : 'right';
        if (currentDirection === 'right') {
          currentX += 1;
        } else {
          currentX -= 1;
        }
      }
    }
    setStairs(initialStairs);
  }, []);

  // 새로운 계단 생성
  const generateNewStair = useCallback((currentStairs: StairBlock[]) => {
    const lastStair = currentStairs[currentStairs.length - 1];
    const newY = lastStair.y + 1; // Y가 증가하면 위로 올라감
    
    // 다음 계단의 위치 결정 (더 자연스러운 무한의 계단 로직)
    let newX: number;
    let newDirection: 'left' | 'right';
    
    // 70% 확률로 같은 방향 계속, 30% 확률로 방향 전환
    if (Math.random() > 0.3) {
      // 같은 방향 계속
      newDirection = lastStair.direction;
      if (lastStair.direction === 'right') {
        newX = lastStair.x + 1;
      } else {
        newX = lastStair.x - 1;
      }
    } else {
      // 방향 전환
      newDirection = lastStair.direction === 'right' ? 'left' : 'right';
      if (newDirection === 'right') {
        newX = lastStair.x + 1;
      } else {
        newX = lastStair.x - 1;
      }
    }

    return {
      id: Date.now() + Math.random(),
      x: newX,
      y: newY,
      direction: newDirection
    };
  }, []);

  // 방향 전환
  const changeDirection = useCallback(() => {
    if (gameOver) return;
    setPlayerDirection(prev => prev === 'left' ? 'right' : 'left');
  }, [gameOver]);

  // 한 계단 올라가기
  const moveUp = useCallback(() => {
    if (gameOver) return;

    // 첫 번째 움직임일 때 게이지 시스템 활성화
    if (!hasStarted) {
      setHasStarted(true);
      setGaugeActive(true);
    }

    // 움직임 시간 기록
    setLastMoveTime(Date.now());

    const currentStair = stairs.find(stair => 
      stair.x === playerPosition.x && stair.y === playerPosition.y
    );

    if (!currentStair) {
      setGameOver(true);
      return;
    }

    // 다음 위치 계산
    let nextX = playerPosition.x;
    if (playerDirection === 'right') {
      nextX += 1;
    } else {
      nextX -= 1;
    }
    const nextY = playerPosition.y + 1; // Y를 증가시켜서 위로 올라가기

    // 다음 계단이 존재하는지 확인
    const nextStair = stairs.find(stair => 
      stair.x === nextX && stair.y === nextY
    );

    if (!nextStair) {
      setGameOver(true);
      return;
    }

    // 플레이어 위치 업데이트
    setPlayerPosition({ x: nextX, y: nextY });
    setScore(prev => prev + 1);

    // 새로운 계단 생성 (플레이어 주변에 충분한 계단 보장)
    const maxY = Math.max(...stairs.map(stair => stair.y));
    
    if (nextY > maxY - 20) { // 플레이어가 상위 계단에 가까워지면 새 계단 생성
      setStairs(prev => {
        const newStairs = [...prev];
        
        // 여러 개의 새 계단 생성하여 충분한 경로 보장
        for (let i = 0; i < 10; i++) {
          const newStair = generateNewStair(newStairs);
          newStairs.push(newStair);
        }
        
        // 아래쪽 계단들 제거 (성능 최적화) - 플레이어보다 너무 아래 있는 계단들만
        return newStairs.filter(stair => stair.y >= nextY - 50);
      });
    }
  }, [gameOver, stairs, playerPosition, playerDirection, generateNewStair, hasStarted]);

  // 게임 리셋
  const resetGame = useCallback(() => {
    setPlayerPosition({ x: 0, y: 0 }); // 가장 아래 계단에서 시작
    setPlayerDirection('right');
    setScore(0);
    setGameOver(false);
    
    // 게이지 시스템 초기화
    setHasStarted(false);
    setGaugeActive(false);
    setGauge(10);
    setLastMoveTime(null);
    
    const initialStairs: StairBlock[] = [];
    let currentX = 0;
    let currentDirection: 'left' | 'right' = 'right';
    
    for (let i = 0; i < 50; i++) { // 더 많은 계단 생성
      initialStairs.push({
        id: i,
        x: currentX,
        y: i,
        direction: currentDirection
      });
      
      // 다음 계단 위치 결정 (더 자연스러운 패턴)
      if (Math.random() > 0.3) { // 70% 확률로 같은 방향 계속
        if (currentDirection === 'right') {
          currentX += 1;
        } else {
          currentX -= 1;
        }
      } else { // 30% 확률로 방향 전환
        currentDirection = currentDirection === 'right' ? 'left' : 'right';
        if (currentDirection === 'right') {
          currentX += 1;
        } else {
          currentX -= 1;
        }
      }
    }
    setStairs(initialStairs);
  }, []);

  // 키보드 이벤트
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
        changeDirection();
      }
      if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D' || event.key === ' ') {
        moveUp();
      }
      if (event.key === 'r' || event.key === 'R') {
        resetGame();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [changeDirection, moveUp, resetGame]);

  return (
    <div className="infinite-stairs-game">
      {/* 게임 UI */}
      <div className="game-ui">
        <div className="score">Score: {score}</div>
        
        {/* 게이지 시스템 */}
        {gaugeActive && (
          <div className="gauge-container">
            <div className="gauge-label">Time Gauge</div>
            <div className="gauge-bar">
              <div 
                className={`gauge-fill ${gauge <= 3 ? 'danger' : gauge <= 6 ? 'warning' : 'safe'}`}
                style={{ width: `${(gauge / 10) * 100}%` }}
              ></div>
            </div>
            <div className="gauge-value">{gauge.toFixed(1)}s</div>
          </div>
        )}
        
        {gameOver && (
          <div className="game-over">
            <h2>Game Over!</h2>
            <p>Score: {score}</p>
            {gaugeActive && gauge <= 0 && <p className="time-up">시간이 다 되었습니다!</p>}
            <button onClick={resetGame}>다시 시작</button>
          </div>
        )}
      </div>

      {/* 게임 화면 */}
      <div className="game-container">
        <div className="game-world" style={{
          transform: `translate(${-(playerPosition.x * 60 + 25)}px, ${-(-playerPosition.y * 40 - 30)}px)`
        }}>
          {/* 계단들 */}
          {stairs.map((stair) => (
            <div
              key={stair.id}
              className="stair-block"
              style={{
                left: stair.x * 60,
                top: -stair.y * 40, // Y가 클수록 위로 (화면에서는 top 값이 작아짐)
              }}
            >
              <div className="stair-top"></div>
              <div className="stair-front"></div>
            </div>
          ))}

          {/* 플레이어 */}
          <div
            className={`player-container ${playerDirection}`}
            style={{
              left: playerPosition.x * 60 + 10, // 캐릭터가 커져서 위치 조정
              top: -playerPosition.y * 40 - 40, // Y가 클수록 위로, 플레이어는 계단 위에
            }}
          >
            <div className="player-character">
              <div className="player-head"></div>
              <div className="player-body"></div>
              <div className="player-legs"></div>
              <div className="player-direction-arrow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 컨트롤 버튼 */}
      <div className="controls">
        <button 
          className="control-btn direction-btn" 
          onClick={changeDirection}
          disabled={gameOver}
        >
          ↻ 방향전환
        </button>
        <button 
          className="control-btn move-btn" 
          onClick={moveUp}
          disabled={gameOver}
        >
          ↑ 올라가기
        </button>
      </div>

      {/* 게임 설명 */}
      <div className="instructions">
        <p>키보드: A/← (방향전환), D/→/Space (올라가기), R (재시작)</p>
        <p>💡 빠르게 움직여서 시간 게이지를 유지하세요!</p>
      </div>
    </div>
  );
};

export default InfiniteStairs;