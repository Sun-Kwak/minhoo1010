import React from 'react';
import { OrderItem } from '../types/IceCream';
import './OrderSummary.css';

interface OrderSummaryProps {
  orderItems: OrderItem[];
  totalPrice: number;
  onRemoveItem: (productId: number) => void;
  onClearOrder: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  orderItems,
  totalPrice,
  onRemoveItem,
  onClearOrder
}) => {
  const formatPrice = (price: number) => {
    return `${price.toLocaleString()}원`;
  };

  const handlePayment = () => {
    if (orderItems.length === 0) {
      alert('주문할 상품을 선택해주세요!');
      return;
    }
    
    alert(`총 ${formatPrice(totalPrice)}의 결제가 완료되었습니다!\n감사합니다! 🍦`);
    onClearOrder();
  };

  return (
    <div className="order-summary">
      <h2>주문 내역</h2>
      
      {orderItems.length === 0 ? (
        <div className="empty-order">
          <p>선택된 상품이 없습니다</p>
          <div className="empty-icon">🛒</div>
        </div>
      ) : (
        <>
          <div className="order-items">
            {orderItems.map(item => (
              <div key={item.product.id} className="order-item">
                <div className="item-info">
                  <span className="item-name">{item.product.name}</span>
                  <span className="item-quantity">× {item.quantity}</span>
                </div>
                <div className="item-controls">
                  <span className="item-price">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                  <button
                    className="remove-btn"
                    onClick={() => onRemoveItem(item.product.id)}
                    title="수량 줄이기"
                  >
                    −
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="order-total">
            <div className="total-line">
              <span>총 금액</span>
              <span className="total-price">{formatPrice(totalPrice)}</span>
            </div>
          </div>

          <div className="order-actions">
            <button className="clear-btn" onClick={onClearOrder}>
              전체 삭제
            </button>
            <button className="payment-btn" onClick={handlePayment}>
              결제하기
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderSummary;