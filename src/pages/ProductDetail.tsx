
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getProductById } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { toast } from "sonner";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  
  const product = productId ? getProductById(productId) : null;
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, the product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value, 10));
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-shop-primary mb-2">{product.name}</h1>
            <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
            
            <div className="border-t border-b border-gray-200 py-4 my-6">
              <p className="text-gray-700 mb-4">{product.description}</p>
              
              <div className="flex items-center mb-4">
                <span className="text-gray-600 mr-2">Availability:</span>
                {product.stock > 0 ? (
                  <span className="text-green-600">In Stock ({product.stock} available)</span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </div>
              
              <div className="flex items-center mb-4">
                <span className="text-gray-600 mr-2">Category:</span>
                <span className="capitalize">{product.category}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div>
                <label htmlFor="quantity" className="block text-gray-600 mb-1 text-sm">
                  Quantity
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-gray-300 rounded p-2"
                  disabled={product.stock === 0}
                >
                  {[...Array(Math.min(10, product.stock))].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              
              <Button 
                className="flex-grow"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
