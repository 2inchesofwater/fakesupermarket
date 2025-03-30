
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { CartItem, ShippingInfo } from '@/types/store';
import { Check } from 'lucide-react';

interface OrderDetails {
  orderId: string;
  date: string;
  items: CartItem[];
  total: number;
  shippingInfo: ShippingInfo;
}

const Confirmation = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  
  useEffect(() => {
    const lastOrder = localStorage.getItem('lastOrder');
    
    if (lastOrder) {
      setOrderDetails(JSON.parse(lastOrder));
    } else {
      navigate('/');
    }
  }, [navigate]);
  
  if (!orderDetails) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Loading order details...</p>
        </div>
      </Layout>
    );
  }
  
  const formattedDate = new Date(orderDetails.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-green-100 rounded-full p-3">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 ml-4">Order Confirmed!</h1>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Thank you for your purchase. Your order has been confirmed and will be shipped soon.
            </p>
          </div>
          
          <div className="border rounded-lg overflow-hidden mb-8">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h2 className="font-semibold">Order Information</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">{orderDetails.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span>{formattedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total:</span>
                <span className="font-bold">${(orderDetails.total + orderDetails.total * 0.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden mb-8">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h2 className="font-semibold">Items</h2>
            </div>
            <div className="divide-y">
              {orderDetails.items.map(item => (
                <div key={item.product.id} className="flex items-center p-4">
                  <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="ml-4 font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden mb-8">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h2 className="font-semibold">Shipping Information</h2>
            </div>
            <div className="p-6">
              <p className="font-medium">{orderDetails.shippingInfo.fullName}</p>
              <p>{orderDetails.shippingInfo.address}</p>
              <p>
                {orderDetails.shippingInfo.city}, {orderDetails.shippingInfo.state} {orderDetails.shippingInfo.zipCode}
              </p>
              <p>{orderDetails.shippingInfo.country}</p>
              <p className="mt-2">{orderDetails.shippingInfo.email}</p>
              {orderDetails.shippingInfo.phone && <p>{orderDetails.shippingInfo.phone}</p>}
            </div>
          </div>
          
          <div className="text-center">
            <Button onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Confirmation;
