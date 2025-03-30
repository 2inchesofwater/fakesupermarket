
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const { cart } = useCart();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-shop-primary">
              SwiftShop
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-shop-primary transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-shop-primary transition-colors">
                Shop
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-shop-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-shop-primary transition-colors">
                Contact
              </Link>
            </div>
          )}
          
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-shop-accent text-white text-xs px-1.5 py-0.5 rounded-full">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
            
            {isMobile && (
              <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="mt-4 py-4 border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-shop-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-gray-600 hover:text-shop-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-shop-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-shop-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
