
import React from 'react';
import { CartItem as CartItemType } from '@/types/store';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateQuantity(product.id, newQuantity);
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      <div className="ml-4 flex-grow">
        <Link to={`/product/${product.id}`} className="text-lg font-medium hover:text-shop-accent">
          {product.name}
        </Link>
        <p className="text-sm text-gray-500 mt-1">${product.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center space-x-4">
        <select 
          value={quantity} 
          onChange={handleQuantityChange}
          className="border border-gray-300 rounded p-1 text-sm"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        
        <div className="text-right min-w-24">
          <div className="font-medium">${(product.price * quantity).toFixed(2)}</div>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-400 hover:text-gray-500"
          onClick={() => removeFromCart(product.id)}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
