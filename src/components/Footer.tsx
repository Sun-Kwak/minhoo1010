import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section company-info">
            <div className="footer-logo">
              <h3>AutoMeter Pro</h3>
              <span className="logo-subtitle">계측기 전문기업</span>
            </div>
            <p className="company-description">
              1993년부터 자동차 전자 계측기 분야에서 
              30년간 축적된 기술력과 신뢰성으로 
              고객의 성공을 함께 만들어갑니다.
            </p>
            <div className="company-certifications">
              <span className="cert-badge">ISO 9001:2015</span>
              <span className="cert-badge">ISO/TS 16949</span>
              <span className="cert-badge">KS Q 9000</span>
            </div>
          </div>

          <div className="footer-section quick-links">
            <h4>빠른 메뉴</h4>
            <ul>
              <li><button onClick={() => scrollToSection('home')}>홈</button></li>
              <li><button onClick={() => scrollToSection('about')}>회사소개</button></li>
              <li><button onClick={() => scrollToSection('services')}>서비스</button></li>
              <li><button onClick={() => scrollToSection('contact')}>문의하기</button></li>
            </ul>
          </div>

          <div className="footer-section services-links">
            <h4>주요 서비스</h4>
            <ul>
              <li><span>엔진 관리 시스템 (EMS)</span></li>
              <li><span>차체 제어 시스템 (BCM)</span></li>
              <li><span>진단 장비 및 테스터</span></li>
              <li><span>커스텀 솔루션</span></li>
              <li><span>기술 지원 서비스</span></li>
            </ul>
          </div>

          <div className="footer-section contact-info">
            <h4>연락처</h4>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>서울특별시 강남구 테헤란로 123길 45</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>02-1234-5678</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>info@autometer.co.kr</span>
            </div>
            <div className="social-media">
              <h5>소셜 미디어</h5>
              <div className="social-icons">
                <button className="social-icon" onClick={() => window.open('https://facebook.com', '_blank')}>📘</button>
                <button className="social-icon" onClick={() => window.open('https://instagram.com', '_blank')}>📷</button>
                <button className="social-icon" onClick={() => window.open('https://twitter.com', '_blank')}>🐦</button>
                <button className="social-icon" onClick={() => window.open('https://linkedin.com', '_blank')}>💼</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2023 AutoMeter Pro. All rights reserved.</p>
              <p>사업자등록번호: 123-45-67890 | 대표이사: 김계측</p>
            </div>
            
            <div className="footer-links">
              <button className="footer-link">개인정보처리방침</button>
              <button className="footer-link">이용약관</button>
              <button className="footer-link">사이트맵</button>
            </div>

            <button className="scroll-to-top" onClick={scrollToTop}>
              <span>↑</span>
              <span>TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;