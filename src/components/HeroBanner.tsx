
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative bg-shop-primary text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Quality Products for Your Everyday Needs
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discover our curated collection of premium electronics and accessories at competitive prices.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <Button className="bg-white text-shop-primary hover:bg-gray-100">
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
