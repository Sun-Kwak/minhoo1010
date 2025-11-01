import React, { useState } from 'react';
import { IceCreamProduct, OrderItem } from '../types/IceCream';
import { iceCreamProducts } from '../data/iceCreamData';
import ProductGrid from './ProductGrid';
import OrderSummary from './OrderSummary';
import './IceCreamPOS.css';

const IceCreamPOS: React.FC = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'cone', name: '콘 아이스크림' },
    { id: 'cup', name: '컵 아이스크림' },
    { id: 'stick', name: '막대 아이스크림' },
    { id: 'special', name: '특별 메뉴' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? iceCreamProducts 
    : iceCreamProducts.filter(product => product.category === selectedCategory);

  const addToOrder = (product: IceCreamProduct) => {
    setOrderItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  const removeFromOrder = (productId: number) => {
    setOrderItems(prevItems => {
      return prevItems.reduce((acc, item) => {
        if (item.product.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
          // quantity가 1이면 아예 제거 (push하지 않음)
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as OrderItem[]);
    });
  };

  const clearOrder = () => {
    setOrderItems([]);
  };

  const getTotalPrice = () => {
    return orderItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  return (
    <div className="ice-cream-pos">
      <header className="pos-header">
        <h1>🍦 Sweet Dreams 아이스크림</h1>
        <p>맛있는 아이스크림을 선택하세요!</p>
      </header>

      <div className="pos-content">
        <div className="products-section">
          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <ProductGrid 
            products={filteredProducts} 
            onProductClick={addToOrder}
          />
        </div>

        <div className="order-section">
          <OrderSummary
            orderItems={orderItems}
            totalPrice={getTotalPrice()}
            onRemoveItem={removeFromOrder}
            onClearOrder={clearOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default IceCreamPOS;