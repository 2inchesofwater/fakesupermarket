
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/store';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-lg truncate">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
          <p className="font-bold text-shop-primary mt-2">${product.price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
