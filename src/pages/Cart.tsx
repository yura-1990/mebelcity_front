
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash, ShoppingCart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Separator } from '@/components/ui/separator';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price) + ' сум';
};

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart();
  
  const handleQuantityChange = (itemId: number, type: 'increase' | 'decrease') => {
    const item = items.find(i => i.id === itemId);
    if (!item) return;
    
    const newQuantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
    updateQuantity(itemId, newQuantity);
  };

  return (
    <>
      <Helmet>
        <title>Корзина - MebelCity</title>
        <meta name="description" content="Просмотр товаров в корзине и оформление заказа" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white dark:bg-navy-dark transition-colors duration-300">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white mb-8">
              Корзина
            </h1>
            
            {items.length === 0 ? (
              <div className="py-16 text-center">
                <div className="flex justify-center mb-6">
                  <ShoppingCart size={80} className="text-gray-300" />
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-navy-dark dark:text-white">
                  Ваша корзина пуста
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                  Похоже, вы еще не добавили товары в корзину. Начните с просмотра наших товаров.
                </p>
                <Button className="bg-wood hover:bg-wood-dark text-white">
                  <Link to="/catalog">Перейти в каталог</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 bg-white dark:bg-navy/20 rounded-lg shadow p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-navy-dark dark:text-white">
                      Товары в корзине ({items.reduce((acc, item) => acc + item.quantity, 0)})
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700"
                      onClick={clearCart}
                    >
                      <Trash className="h-4 w-4 mr-2" />
                      Очистить корзину
                    </Button>
                  </div>
                  
                  {items.map((item) => (
                    <div key={item.id}>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center py-6">
                        <Link to={`/catalog/product/${item.slug}`} className="w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </Link>
                        
                        <div className="sm:ml-6 flex-grow">
                          <Link to={`/catalog/product/${item.slug}`} className="text-lg font-medium text-navy-dark dark:text-white hover:text-wood dark:hover:text-wood-light transition-colors">
                            {item.name}
                          </Link>
                          
                          <div className="mt-4 sm:mt-2 flex flex-wrap justify-between items-center gap-4">
                            <div className="flex items-center">
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8"
                                onClick={() => handleQuantityChange(item.id, 'decrease')}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="mx-3 w-8 text-center font-medium">
                                {item.quantity}
                              </span>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8"
                                onClick={() => handleQuantityChange(item.id, 'increase')}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <div className="font-bold text-lg text-wood">
                                {formatPrice(item.price * item.quantity)}
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Separator className="dark:bg-gray-700" />
                    </div>
                  ))}
                </div>
                
                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-white dark:bg-navy/20 rounded-lg shadow p-6 sticky top-24">
                    <h2 className="text-xl font-semibold mb-6 text-navy-dark dark:text-white">
                      Сумма заказа
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Товары ({items.reduce((acc, item) => acc + item.quantity, 0)}):</span>
                        <span className="font-medium text-navy-dark dark:text-white">{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Доставка:</span>
                        <span className="font-medium text-navy-dark dark:text-white">Бесплатно</span>
                      </div>
                      <Separator className="dark:bg-gray-700" />
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold text-navy-dark dark:text-white">Итого:</span>
                        <span className="text-lg font-bold text-wood">{formatPrice(subtotal)}</span>
                      </div>
                      
                      <Button className="w-full bg-wood hover:bg-wood-dark text-white py-6 mt-4">
                        <Link to="/checkout" className="w-full h-full flex items-center justify-center">
                          Оформить заказ
                        </Link>
                      </Button>
                      
                      <div className="text-center mt-4">
                        <Link to="/catalog" className="text-navy-dark dark:text-white hover:text-wood dark:hover:text-wood-light transition-colors text-sm">
                          Продолжить покупки
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Cart;
