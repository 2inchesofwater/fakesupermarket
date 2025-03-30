
import { Product } from "@/types/store";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Laptop",
    description: "High-performance laptop with 16GB RAM, 512GB SSD, and the latest processor for all your computing needs.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
    category: "electronics",
    featured: true,
    stock: 15
  },
  {
    id: "2",
    name: "Wireless Earbuds",
    description: "Experience superior sound quality with these comfortable, long-lasting wireless earbuds.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=2070&auto=format&fit=crop",
    category: "electronics",
    stock: 50
  },
  {
    id: "3",
    name: "Smart Watch",
    description: "Track your fitness, receive notifications, and more with this stylish and functional smart watch.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1928&auto=format&fit=crop",
    category: "electronics",
    featured: true,
    stock: 20
  },
  {
    id: "4",
    name: "Professional Camera",
    description: "Capture stunning photos and videos with this high-resolution professional camera with advanced features.",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop",
    category: "electronics",
    stock: 8
  },
  {
    id: "5",
    name: "Designer Backpack",
    description: "Stylish, durable backpack with plenty of room for all your essentials, perfect for work or travel.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1974&auto=format&fit=crop",
    category: "accessories",
    stock: 35
  },
  {
    id: "6",
    name: "Wireless Charging Pad",
    description: "Convenient wireless charging for all your compatible devices, with fast-charging technology.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1600490036275-35f5f1b4f1f2?q=80&w=1974&auto=format&fit=crop",
    category: "electronics",
    stock: 40
  },
  {
    id: "7",
    name: "Premium Headphones",
    description: "Over-ear headphones with noise cancellation and exceptional sound quality for immersive listening.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    category: "electronics",
    featured: true,
    stock: 18
  },
  {
    id: "8",
    name: "Fitness Tracker",
    description: "Monitor your activity, sleep, and more with this waterproof fitness tracker with long battery life.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=2070&auto=format&fit=crop",
    category: "electronics",
    stock: 30
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
