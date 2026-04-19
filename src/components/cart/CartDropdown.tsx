
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, X, Trash, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/lib/i18n/context';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price) + ' сум';
};

export function CartDropdown() {
  const { items, removeItem, updateQuantity, itemCount, subtotal, isCartOpen, setIsCartOpen } = useCart();
  const { t } = useLanguage();

  const handleOpenChange = (open: boolean) => {
    setIsCartOpen(open);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="custom" 
          className="relative px-2 py-2 dark:hover:bg-navy-dark/50 hover:text-accent-foreground bg-transparent border border-white/20 hover:bg-white/20 dark:hover:bg-navy-dark/50"
          aria-label={t('aria.open_cart')}
        >
          <ShoppingCart className="h-[1.2rem] w-[1.2rem] text-white " />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex items-center justify-center bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold">{t('cart.title')}</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col h-[calc(100vh-10rem)]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500 dark:text-gray-400 mb-6">{t('cart.empty')}</p>
              <Button className="bg-wood hover:bg-wood-dark text-white" onClick={() => setIsCartOpen(false)}>
                <Link to="/catalog">{t('product.back_to_catalog')}</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-grow overflow-auto space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 py-3">
                    <div className="h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    
                    <div className="flex-grow">
                      <Link to={`/catalog/product/${item.slug}`} onClick={() => setIsCartOpen(false)}>
                        <h4 className="font-medium text-navy-dark dark:text-white hover:text-wood dark:hover:text-wood-light transition-colors">
                          {item.name}
                        </h4>
                      </Link>
                      <div className="text-wood font-medium mt-1">{formatPrice(item.price)}</div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label={t('aria.decrease')}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label={t('aria.increase')}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                      aria-label={t('aria.remove_item')}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-4">
                <Separator />
                <div className="flex justify-between">
                  <span className="font-medium">{t('cart.total')}:</span>
                  <span className="font-bold">{formatPrice(subtotal)}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/cart" className="w-full h-full flex items-center justify-center" onClick={() => setIsCartOpen(false)}>
                      {t('cart.view_cart')}
                    </Link>
                  </Button>
                  <Button className="w-full bg-wood hover:bg-wood-dark text-white" asChild>
                    <Link to="/checkout" className="w-full h-full flex items-center justify-center" onClick={() => setIsCartOpen(false)}>
                      {t('cart.checkout')}
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
