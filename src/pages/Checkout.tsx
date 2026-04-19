
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/sonner';
import { useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price) + ' сум';
};

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    comment: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate order submission
    toast.success(t('checkout.success'), {
      description: t('checkout.success_desc'),
    });
    
    // Clear cart and redirect
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 1500);
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  return (
    <>
      <Seo
        title={`${t('checkout.title')} — MebelCity`}
        description={t('checkout.title')}
        url="https://mebelcity.uz/checkout"
        noindex={true}
      />

      <div className="min-h-screen flex flex-col bg-white dark:bg-navy-dark transition-colors duration-300">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white mb-8">
              {t('checkout.title')}
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-navy/20 rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-6 text-navy-dark dark:text-white">
                    {t('checkout.contact_info')}
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {t('checkout.first_name')} *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {t('checkout.last_name')} *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {t('contact.phone')} *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t('checkout.address')} *
                      </label>
                      <Input
                        id="address"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t('checkout.comment')}
                      </label>
                      <Textarea
                        id="comment"
                        name="comment"
                        value={form.comment}
                        onChange={handleChange}
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-wood hover:bg-wood-dark text-white py-6">
                      {t('checkout.confirm')}
                    </Button>
                  </form>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-navy/20 rounded-lg shadow p-6 sticky top-24">
                  <h2 className="text-xl font-semibold mb-6 text-navy-dark dark:text-white">
                    {t('checkout.your_order')}
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden flex-shrink-0 mr-3">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-navy-dark dark:text-white">
                            {item.name} <span className="text-gray-500">x{item.quantity}</span>
                          </span>
                        </div>
                        <span className="font-medium text-navy-dark dark:text-white">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="dark:bg-gray-700 mb-4" />
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">{t('nav.catalog')}:</span>
                      <span className="font-medium text-navy-dark dark:text-white">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">{t('cart.delivery')}:</span>
                      <span className="font-medium text-navy-dark dark:text-white">{t('cart.free')}</span>
                    </div>
                    <Separator className="dark:bg-gray-700" />
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-navy-dark dark:text-white">{t('cart.total')}:</span>
                      <span className="text-lg font-bold text-wood">{formatPrice(subtotal)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
