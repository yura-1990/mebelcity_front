import React, { useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import { useCart } from '@/contexts/CartContext';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from "@/lib/i18n/context.tsx";
import { Product, useStore } from "@/store";
import { imageUrl } from "@/axios";
import { useTransliterateSlug } from "@/hooks/useTransliterateSlug.ts";

// Fix here: add children type
interface AnimableProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
}

const Animable: React.FC<AnimableProps> = ({ children, index = 0, className = '', }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        inView
          ? { opacity: 1, y: 0, transition: { type: 'tween', bounce: 0.1, duration: 0.5, delay: index * 0.01 } }
          : { opacity: 0, y: 50 }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FeaturedProducts = () => {

  const { language } = useLanguage();
  const getProducts = useStore((store) => store.getProducts);
  const products = useStore((store) => store.state.products);
  const loading = useStore((store) => store.state.loading);

  useEffect(() => {
    getProducts()

  }, [getProducts, language])

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-navy-dark">
      <div className="container-fluid mx-auto px-4">
        {/*<Animable index={0} className="text-center mb-12">*/}
        {/*  <h2 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white section-title">*/}
        {/*    Популярные Товары*/}
        {/*  </h2>*/}
        {/*  <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">*/}
        {/*    Познакомьтесь с нашими самыми популярными товарами, которые выбирают наши клиенты*/}
        {/*  </p>*/}
        {/*</Animable>*/}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <Animable key={product.id} index={index + 1}>
              <ProductCard product={product} />
            </Animable>
          ))}
        </div>

        <Animable index={products.length + 2} className="text-center mt-12">
          <Link to="/catalog">
            <Button size="lg" className="bg-wood hover:bg-wood-dark text-white">
              Смотреть все товары
            </Button>
          </Link>
        </Animable>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
}

export const ProductCard = React.memo(({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const { t } = useLanguage();
  const { transliterate } = useTransliterateSlug()

  const handleAddToFavorites = useCallback(() => {
    toast('Добавлено в избранное', {
      description: `"${product.name}" добавлен в избранное`,
    });
  }, [product.name]);

  const handleAddToCart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const button = e.currentTarget;
    button.classList.add('animate-ping');
    setTimeout(() => {
      button.classList.remove('animate-ping');
      addItem({
        id: product.id,
        name: product.name || '',
        price: Number(product.price) || 0,
        quantity: 1,
        image: product.images?.[0] || '',
        slug: product.id.toString(),
      });
    }, 500);
  }, [addItem, product]);

  const handleShare = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    toast('Поделиться', {
      description: `Ссылка на "${product.name}" скопирована в буфер обмена`,
    });
  }, [product.name]);

  return (
    <div
      className={cn(
        'group bg-card rounded-md border shadow-md h-full',
        'transition-all duration-300 flex flex-col'
      )}
    >
      <div className="relative overflow-hidden rounded-md ">
        <Link to={`/ofisnaya-mebel/${transliterate(product.name)}/${product.exist ? 'mebel-na-zakaz' : 'mebel-v-nalichii'}/${product.id}`}>
          <img
            src={`${imageUrl}/${product?.images[0]}`}
            alt={product.name}
            className="object-cover w-full aspect-[4/3] transition-transform duration-500 shadow-md group-hover:scale-110"
            width="400"
            height="300"
            loading="lazy"
          />
        </Link>
        <div className="absolute bottom-[1px] h-full right-[1px] flex flex-row gap-2 z-50">
          <Button
            size="icon"
            variant="outline"
            className="bg-white/70 border-0 backdrop-blur-sm hover:bg-white dark:hover:bg-navy/90 rounded-full h-10 w-10 text-navy"
            onClick={handleAddToCart}
            aria-label="В корзину"
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/10 to-transparent h-12"></div>
        {
          product.discount && <div className="absolute top-[1px] left-[3px] flex flex-row gap-2 z-5">
            <Button
              size="icon"
              variant="outline"
              className="bg-white/70 border-0 backdrop-blur-sm hover:bg-white dark:hover:bg-navy/90 font-bold rounded-full h-10 w-10 text-red-600"
              onClick={handleAddToCart}
            >
              -{product.discount}%
            </Button>
          </div>
        }
        <div className="absolute bottom-1 left-1">
          <span
            className={`inline-block ${product.exist ? "bg-emerald-700" : "bg-red-700"} text-center backdrop-blur-sm text-xs text-white px-2 py-1 rounded`}>
            {product.exist ? t('status.in_stock') : t('status.on_order')}
          </span>
        </div>
      </div>

      <div className="lg:p-5 md:p-3 p-1 flex flex-col  flex-grow dark:text-white">
        <Link to={`/ofisnaya-mebel/${transliterate(product.name)}/${product.exist ? 'mebel-na-zakaz' : 'mebel-v-nalichii'}/${product.id}`}>
          <h3 className="text-[14px] lg:text-[20px] font-semibold mb-2
    text-navy-dark dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600
    transition-colors
    line-clamp-3
    leading-[1.2rem] lg:leading-[1.5rem]  /* your line height */
    min-h-[3.6rem] lg:min-h-[4.5rem]     /* 3 lines min height: 3 * line-height */
    flex items-center justify-center text-center">
            {product.name}
          </h3>

        </Link>
        <div className={'mt-auto'}></div>
        <Separator className="mb-4 dark:bg-gray-700" />

        <span className="font-bold text-navy hover:text-emerald-600 dark:hover:text-emerald-600 text-center text-lg mb-2 dark:text-white">
          {product?.price}
        </span>
        <div className="flex flex-wrap justify-center items-center">

          <div className="flex justify-end w-full align-middle gap-3">
            <Button
              variant="ghost"
              size="custom"
              className="text-navy-dark px-1 py-1 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-600"
              asChild
            >
              <Link to={`/ofisnaya-mebel/${transliterate(product.name)}/${product.exist ? 'mebel-na-zakaz' : 'mebel-v-nalichii'}/${product.id}`}>
                {t('learn_more_about')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FeaturedProducts;
