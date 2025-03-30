
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { OrderConfirmation } from '@/types/store';
import { toast } from "sonner";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState<'shipping' | 'payment'>('shipping');
  
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    email: '',
    phone: '',
  });
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });
  
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate shipping information
    if (!shippingInfo.fullName || !shippingInfo.address || !shippingInfo.city || 
        !shippingInfo.state || !shippingInfo.zipCode || !shippingInfo.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setCurrentStep('payment');
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate payment information
    if (!paymentInfo.cardNumber || !paymentInfo.cardHolder || !paymentInfo.expiryDate || !paymentInfo.cvv) {
      toast.error("Please fill in all payment details");
      return;
    }
    
    // Process order
    const orderDetails = {
      shippingInfo,
      paymentInfo,
      items: cart.items,
      total: cart.total,
      orderId: 'ORD' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
      date: new Date().toISOString(),
    };
    
    // Save order to localStorage for confirmation page
    localStorage.setItem('lastOrder', JSON.stringify(orderDetails));
    
    // Clear cart and navigate to confirmation
    clearCart();
    navigate('/confirmation');
  };
  
  // Redirect if cart is empty
  if (cart.items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Button onClick={() => navigate('/products')}>
            Back to Shopping
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-shop-primary mb-8">Checkout</h1>
        
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${
              currentStep === 'shipping' ? 'bg-shop-primary text-white' : 'bg-gray-200'
            }`}>
              1
            </div>
            <div className="mx-2 h-1 w-16 bg-gray-200">
              <div className={`h-full ${currentStep === 'shipping' ? 'w-0' : 'w-full bg-shop-primary'}`}></div>
            </div>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${
              currentStep === 'payment' ? 'bg-shop-primary text-white' : 'bg-gray-200'
            }`}>
              2
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {currentStep === 'shipping' ? (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                
                <form onSubmit={handleShippingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={shippingInfo.fullName}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={shippingInfo.email}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province *</Label>
                      <Input
                        id="state"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip/Postal Code *</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={shippingInfo.zipCode}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleShippingChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={shippingInfo.phone}
                        onChange={handleShippingChange}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <Button type="submit">
                      Continue to Payment
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="0000 0000 0000 0000"
                      value={paymentInfo.cardNumber}
                      onChange={handlePaymentChange}
                      maxLength={19}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardHolder">Card Holder Name *</Label>
                    <Input
                      id="cardHolder"
                      name="cardHolder"
                      placeholder="Name on card"
                      value={paymentInfo.cardHolder}
                      onChange={handlePaymentChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date *</Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={paymentInfo.expiryDate}
                        onChange={handlePaymentChange}
                        maxLength={5}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        type="password"
                        value={paymentInfo.cvv}
                        onChange={handlePaymentChange}
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-6">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setCurrentStep('shipping')}
                    >
                      Back to Shipping
                    </Button>
                    <Button type="submit">
                      Place Order
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-4">
              {cart.items.map(item => (
                <div key={item.product.id} className="flex items-center">
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
                      ${item.product.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <div className="ml-4 font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${cart.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${(cart.total * 0.1).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${(cart.total + cart.total * 0.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
