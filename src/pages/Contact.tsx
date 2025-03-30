
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Here you would normally send the form data to a server
    // For now, just show a success message
    toast.success("Your message has been sent! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-shop-primary mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Commerce St<br />
                  Shopping City, SC 12345<br />
                  United States
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
                <p className="text-gray-600">
                  support@swiftshop.com<br />
                  sales@swiftshop.com
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Phone</h3>
                <p className="text-gray-600">
                  Customer Support: (123) 456-7890<br />
                  Sales: (123) 456-7891
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
