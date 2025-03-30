
import React from 'react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-shop-primary mb-8">About SwiftShop</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-6">
            SwiftShop is a premier online retailer dedicated to providing high-quality products at competitive prices. 
            Founded in 2023, our mission is to make shopping for electronics and accessories simple, enjoyable, and affordable.
          </p>
          
          <p className="text-gray-700 mb-6">
            We carefully select each product in our catalog to ensure it meets our high standards for quality and value. 
            Our team of experts tests and reviews products before they make it to our store, so you can shop with confidence.
          </p>
          
          <p className="text-gray-700 mb-6">
            At SwiftShop, customer satisfaction is our top priority. We offer fast shipping, easy returns, and excellent 
            customer support to ensure you have the best possible shopping experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-shop-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-shop-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Quality Products</h3>
              <p className="text-gray-600 text-sm">
                We source only the best products from trusted manufacturers and suppliers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-shop-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-shop-primary text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm">
                We offer fair prices on all our products, with regular sales and promotions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-shop-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-shop-primary text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Customer Service</h3>
              <p className="text-gray-600 text-sm">
                Our friendly support team is always ready to help with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
