import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직을 추가할 수 있습니다
    console.log('Form submitted:', formData);
    alert('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    
    // 폼 초기화
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">문의하기</h2>
          <p className="section-subtitle">
            자동차 전자 계측기 관련 문의사항이 있으시면 언제든지 연락해주세요
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>연락처 정보</h3>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h4>본사 주소</h4>
                <p>서울특별시 강남구 테헤란로 123길 45<br />AutoMeter Pro 빌딩 10층</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-details">
                <h4>전화번호</h4>
                <p>대표번호: 02-1234-5678<br />기술지원: 02-1234-5679</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-details">
                <h4>이메일</h4>
                <p>일반문의: info@autometer.co.kr<br />기술지원: support@autometer.co.kr</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-details">
                <h4>운영시간</h4>
                <p>월-금: 09:00 - 18:00<br />토요일: 09:00 - 13:00<br />일요일 및 공휴일 휴무</p>
              </div>
            </div>

            <div className="social-links">
              <h4>소셜 미디어</h4>
              <div className="social-icons">
                <button className="social-link" onClick={() => window.open('https://facebook.com', '_blank')}>📘</button>
                <button className="social-link" onClick={() => window.open('https://instagram.com', '_blank')}>📷</button>
                <button className="social-link" onClick={() => window.open('https://twitter.com', '_blank')}>🐦</button>
                <button className="social-link" onClick={() => window.open('https://linkedin.com', '_blank')}>💼</button>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>문의 폼</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">이름 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="성함을 입력해주세요"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">회사명</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="회사명을 입력해주세요"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">이메일 *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="이메일을 입력해주세요"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">전화번호</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="전화번호를 입력해주세요"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="service">관심 서비스</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                >
                  <option value="">서비스를 선택해주세요</option>
                  <option value="ems">엔진 관리 시스템 (EMS)</option>
                  <option value="bcm">차체 제어 시스템 (BCM)</option>
                  <option value="diagnostic">진단 장비 및 테스터</option>
                  <option value="custom">커스텀 솔루션</option>
                  <option value="support">기술 지원</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">문의 내용 *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="문의하실 내용을 자세히 입력해주세요"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                문의 보내기
              </button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h3>오시는 길</h3>
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-icon">🗺️</div>
              <p>서울특별시 강남구 테헤란로 123길 45</p>
              <p>지하철 2호선 강남역 3번 출구에서 도보 5분</p>
              <p>버스 정류장: 강남역 (02-123)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;