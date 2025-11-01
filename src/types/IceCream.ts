export interface IceCreamProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  category: 'cone' | 'cup' | 'stick' | 'special';
  image?: string;
  available: boolean;
}

export interface OrderItem {
  product: IceCreamProduct;
  quantity: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  timestamp: Date;
}