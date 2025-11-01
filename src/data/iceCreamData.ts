import { IceCreamProduct } from '../types/IceCream';

export const iceCreamProducts: IceCreamProduct[] = [
  {
    id: 1,
    name: '바닐라 콘',
    price: 3000,
    description: '부드러운 바닐라 아이스크림',
    category: 'cone',
    available: true
  },
  {
    id: 2,
    name: '초콜릿 콘',
    price: 3200,
    description: '진한 초콜릿 아이스크림',
    category: 'cone',
    available: true
  },
  {
    id: 3,
    name: '딸기 콘',
    price: 3500,
    description: '신선한 딸기 아이스크림',
    category: 'cone',
    available: true
  },
  {
    id: 4,
    name: '민트초콜릿 콘',
    price: 3800,
    description: '시원한 민트와 초콜릿 칩',
    category: 'cone',
    available: true
  },
  {
    id: 5,
    name: '바닐라 컵',
    price: 2500,
    description: '컵에 담은 바닐라 아이스크림',
    category: 'cup',
    available: true
  },
  {
    id: 6,
    name: '초콜릿 컵',
    price: 2700,
    description: '컵에 담은 초콜릿 아이스크림',
    category: 'cup',
    available: true
  },
  {
    id: 7,
    name: '딸기 컵',
    price: 3000,
    description: '컵에 담은 딸기 아이스크림',
    category: 'cup',
    available: true
  },
  {
    id: 8,
    name: '아이스크림 막대',
    price: 1500,
    description: '간편한 막대 아이스크림',
    category: 'stick',
    available: true
  },
  {
    id: 9,
    name: '쿠키앤크림 막대',
    price: 2000,
    description: '쿠키가 들어간 막대 아이스크림',
    category: 'stick',
    available: true
  },
  {
    id: 10,
    name: '레인보우 선데',
    price: 5500,
    description: '다양한 토핑과 과일이 들어간 특별 메뉴',
    category: 'special',
    available: true
  },
  {
    id: 11,
    name: '초콜릿 브라우니 선데',
    price: 6000,
    description: '브라우니와 초콜릿 소스가 들어간 선데',
    category: 'special',
    available: true
  },
  {
    id: 12,
    name: '딸기 치즈케이크 선데',
    price: 6500,
    description: '치즈케이크와 딸기 소스 선데',
    category: 'special',
    available: true
  }
];