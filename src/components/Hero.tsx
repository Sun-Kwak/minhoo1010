import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            자동차 전자 계측기 분야의
            <span className="highlight"> 선도 기업</span>
          </h1>
          
          <p className="hero-description">
            30년간 축적된 기술력과 노하우로 정밀한 자동차 전자 계측기를 
            제공하여 고객의 성공을 함께 만들어갑니다.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">년 경험</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">완료 프로젝트</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">협력 업체</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('services')}
            >
              서비스 보기
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              문의하기
            </button>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="tech-icon">📊</div>
            <div className="floating-elements">
              <div className="float-item">🔧</div>
              <div className="float-item">⚡</div>
              <div className="float-item">🎯</div>
              <div className="float-item">📈</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow" onClick={() => scrollToSection('about')}>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;