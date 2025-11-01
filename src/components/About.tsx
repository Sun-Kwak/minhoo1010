import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">회사 소개</h2>
          <p className="section-subtitle">
            자동차 전자 계측기 분야 30년의 경험과 기술력
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>AutoMeter Pro는 자동차 산업의 신뢰할 수 있는 파트너입니다</h3>
              <p>
                1993년 창립 이래, 저희는 자동차 전자 계측기 분야에서 
                끊임없는 연구개발과 혁신을 통해 업계 최고 수준의 
                제품과 서비스를 제공해왔습니다.
              </p>
            </div>

            <div className="mission-vision">
              <div className="mission">
                <div className="icon">🎯</div>
                <h4>미션</h4>
                <p>정밀하고 신뢰할 수 있는 자동차 전자 계측기를 통해 고객의 성공을 지원하고, 자동차 산업 발전에 기여합니다.</p>
              </div>
              
              <div className="vision">
                <div className="icon">🚀</div>
                <h4>비전</h4>
                <p>글로벌 자동차 전자 계측기 시장에서 기술 혁신을 선도하는 세계적인 기업이 되겠습니다.</p>
              </div>
            </div>

            <div className="values">
              <h4>핵심 가치</h4>
              <div className="values-grid">
                <div className="value-item">
                  <span className="value-icon">🔬</span>
                  <span className="value-title">기술 혁신</span>
                  <span className="value-desc">지속적인 R&D 투자</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">🤝</span>
                  <span className="value-title">고객 중심</span>
                  <span className="value-desc">맞춤형 솔루션 제공</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">⚡</span>
                  <span className="value-title">품질 우선</span>
                  <span className="value-desc">철저한 품질 관리</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">🌍</span>
                  <span className="value-title">글로벌 확장</span>
                  <span className="value-desc">세계시장 진출</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h4>30년 경험</h4>
              <p>1993년부터 축적된 자동차 전자 계측기 전문 기술력과 노하우</p>
              <ul>
                <li>엔진 관리 시스템 (EMS)</li>
                <li>차체 제어 시스템 (BCM)</li>
                <li>진단 장비 및 테스터</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h4>업계 최고 품질</h4>
              <p>국제 표준 인증을 획득한 고품질 제품과 서비스 제공</p>
              <ul>
                <li>ISO 9001:2015 인증</li>
                <li>ISO/TS 16949 인증</li>
                <li>KS Q 9000 인증</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h4>전문 기술진</h4>
              <p>자동차 전자 분야 전문가들이 최적의 솔루션을 제공</p>
              <ul>
                <li>전자공학 박사급 연구진</li>
                <li>자동차 정비 전문가</li>
                <li>24/7 기술 지원팀</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="company-stats">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <span className="stat-number">150+</span>
              <span className="stat-label">전문 직원</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🏭</div>
            <div className="stat-info">
              <span className="stat-number">3</span>
              <span className="stat-label">생산 공장</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🌏</div>
            <div className="stat-info">
              <span className="stat-number">25+</span>
              <span className="stat-label">수출 국가</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-info">
              <span className="stat-number">99.8%</span>
              <span className="stat-label">고객 만족도</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;