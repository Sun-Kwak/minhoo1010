import React from 'react';
import { IceCreamProduct } from '../types/IceCream';
import './ProductGrid.css';

interface ProductGridProps {
  products: IceCreamProduct[];
  onProductClick: (product: IceCreamProduct) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'cone':
        return '🍦';
      case 'cup':
        return '🥤';
      case 'stick':
        return '🍡';
      case 'special':
        return '🍨';
      default:
        return '🍦';
    }
  };

  const formatPrice = (price: number) => {
    return `${price.toLocaleString()}원`;
  };

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`product-card ${!product.available ? 'unavailable' : ''}`}
          onClick={() => product.available && onProductClick(product)}
          style={{
            animationDelay: `${index * 0.3}s, ${index * 0.4}s`,
            animationDuration: '8s, 6s'
          }}
        >
          <div className="product-emoji">
            {getCategoryEmoji(product.category)}
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-price">{formatPrice(product.price)}</div>
            {!product.available && (
              <div className="unavailable-badge">품절</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;