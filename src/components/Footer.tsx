
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SwiftShop</h3>
            <p className="text-gray-600 text-sm">
              Premium products for all your needs. Quality items at competitive prices.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-shop-primary text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=electronics" className="text-gray-600 hover:text-shop-primary text-sm">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-gray-600 hover:text-shop-primary text-sm">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-shop-primary text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-shop-primary text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-shop-primary text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-shop-primary text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">
                Email: support@swiftshop.com
              </li>
              <li className="text-gray-600 text-sm">
                Phone: (123) 456-7890
              </li>
              <li className="text-gray-600 text-sm">
                Address: 123 Commerce St, Shopping City
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {currentYear} SwiftShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
