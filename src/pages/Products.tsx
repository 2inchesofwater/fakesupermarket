
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import ProductGrid from '@/components/ProductGrid';
import { products, getProductsByCategory } from '@/data/products';
import { Product } from '@/types/store';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  
  const categories = [...new Set(products.map(product => product.category))];
  
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
      setFilteredProducts(getProductsByCategory(categoryParam));
    } else {
      setActiveCategory(null);
      setFilteredProducts(products);
    }
  }, [categoryParam]);
  
  const handleCategoryChange = (category: string | null) => {
    if (category) {
      setActiveCategory(category);
      setFilteredProducts(getProductsByCategory(category));
    } else {
      setActiveCategory(null);
      setFilteredProducts(products);
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-shop-primary mb-8">Shop Our Products</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            onClick={() => handleCategoryChange(null)}
            className={activeCategory === null ? "bg-shop-primary" : ""}
          >
            All
          </Button>
          
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className={activeCategory === category ? "bg-shop-primary" : ""}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
        
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
