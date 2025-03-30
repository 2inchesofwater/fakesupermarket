
import React from 'react';
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import ProductGrid from '@/components/ProductGrid';
import { getFeaturedProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <Layout>
      <HeroBanner />
      
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-shop-primary">Featured Products</h2>
          <Link to="/products">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </section>
      
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-shop-primary mb-4">
              Why Choose SwiftShop?
            </h2>
            <p className="text-gray-600 mb-8">
              We're committed to providing you with the best shopping experience possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Quality Products</h3>
                <p className="text-gray-600 text-sm">
                  We carefully select all products to ensure the highest quality standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Fast Shipping</h3>
                <p className="text-gray-600 text-sm">
                  Get your orders quickly with our efficient shipping process.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Excellent Support</h3>
                <p className="text-gray-600 text-sm">
                  Our customer service team is always ready to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
