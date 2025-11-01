import React, { useState } from 'react';
import './Services.css';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: '엔진 관리 시스템 (EMS)',
      description: '자동차 엔진의 최적 성능을 위한 전자 제어 시스템',
      icon: '🔧',
      features: [
        '연료 분사 제어 시스템',
        '점화 시기 제어',
        '배기가스 제어',
        '터보차저 제어',
        '실시간 진단 시스템'
      ],
      benefits: [
        '연비 효율성 20% 향상',
        '배출가스 30% 감소',
        '엔진 수명 연장',
        '실시간 모니터링'
      ]
    },
    {
      id: 1,
      title: '차체 제어 시스템 (BCM)',
      description: '차량의 전기 시스템과 편의 기능을 통합 관리',
      icon: '🚗',
      features: [
        '조명 시스템 제어',
        '도어 락/언락 시스템',
        '윈도우 제어',
        '시트 제어',
        '에어컨 제어'
      ],
      benefits: [
        '사용자 편의성 극대화',
        '전력 효율성 개선',
        '시스템 안정성 보장',
        '고장 진단 기능'
      ]
    },
    {
      id: 2,
      title: '진단 장비 및 테스터',
      description: '차량 시스템의 정확한 진단과 분석을 위한 전문 장비',
      icon: '📊',
      features: [
        'OBD-II 스캐너',
        '전자제어 시스템 진단',
        '센서 검증 도구',
        '데이터 로깅 시스템',
        '실시간 파라미터 모니터링'
      ],
      benefits: [
        '정확한 고장 진단',
        '정비 시간 단축',
        '예방 정비 가능',
        '비용 절감 효과'
      ]
    },
    {
      id: 3,
      title: '커스텀 솔루션',
      description: '고객의 특별한 요구사항에 맞춘 맞춤형 계측기 개발',
      icon: '⚙️',
      features: [
        '맞춤형 하드웨어 설계',
        '전용 소프트웨어 개발',
        '통합 시스템 구축',
        '기술 지원 서비스',
        '유지보수 프로그램'
      ],
      benefits: [
        '고객 요구사항 100% 반영',
        '독점적 기술 솔루션',
        '전문 기술 지원',
        '장기간 파트너십'
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">서비스 및 제품</h2>
          <p className="section-subtitle">
            자동차 전자 계측기 분야의 전문적이고 포괄적인 솔루션을 제공합니다
          </p>
        </div>

        <div className="services-content">
          <div className="services-tabs">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`service-tab ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <span className="tab-icon">{service.icon}</span>
                <span className="tab-title">{service.title}</span>
              </button>
            ))}
          </div>

          <div className="service-details">
            <div className="service-header">
              <div className="service-icon">
                {services[activeService].icon}
              </div>
              <div className="service-info">
                <h3>{services[activeService].title}</h3>
                <p>{services[activeService].description}</p>
              </div>
            </div>

            <div className="service-content-grid">
              <div className="features-section">
                <h4>주요 기능</h4>
                <ul className="features-list">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="benefits-section">
                <h4>기대 효과</h4>
                <ul className="benefits-list">
                  {services[activeService].benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="service-cta">
              <button className="cta-button">
                자세한 정보 요청
              </button>
              <button className="cta-button secondary">
                견적 문의
              </button>
            </div>
          </div>
        </div>

        <div className="additional-services">
          <h3>추가 서비스</h3>
          <div className="additional-grid">
            <div className="additional-item">
              <div className="additional-icon">🛠️</div>
              <h4>기술 지원</h4>
              <p>24/7 전문가 기술 지원 서비스</p>
            </div>
            <div className="additional-item">
              <div className="additional-icon">📚</div>
              <h4>교육 프로그램</h4>
              <p>제품 사용법 및 정비 교육</p>
            </div>
            <div className="additional-item">
              <div className="additional-icon">🔄</div>
              <h4>업그레이드</h4>
              <p>지속적인 펌웨어 및 소프트웨어 업데이트</p>
            </div>
            <div className="additional-item">
              <div className="additional-icon">🚚</div>
              <h4>물류 지원</h4>
              <p>전국 배송 및 설치 서비스</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;