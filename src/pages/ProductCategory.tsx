import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n/context';
import { motion } from 'framer-motion';
import { ChevronRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/components/ui/sonner';
import {imageUrl} from "@/axios";

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  const { t } = useLanguage();

  const categoryData: Record<string, { title: string; description: string; image: string }> = {
    'living-room': {
      title: t('category.livingRoom'),
      description: 'Discover our collection of elegant and comfortable living room furniture.',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2532&auto=format&fit=crop'
    },
    'bedroom': {
      title: t('category.bedroom'),
      description: 'Transform your bedroom into a peaceful retreat with our stylish bedroom furniture.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1780&auto=format&fit=crop'
    },
    'kitchen': {
      title: t('category.kitchen'),
      description: 'Create a functional and beautiful kitchen with our modern kitchen furniture solutions.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
    },
    'office': {
      title: t('category.office'),
      description: 'Enhance productivity and comfort with our ergonomic office furniture.',
      image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop'
    },
    'children': {
      title: t('footer.childrenFurniture'),
      description: 'Colorful, safe and functional furniture for children\'s rooms.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop'
    }
  };

  const currentCategory = categoryData[category || 'living-room'] || categoryData['living-room'];
  
  const products = [
    {
      id: 1,
      name: 'Современный диван',
      category: 'living-room',
      price: 899,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
      bestseller: true,
      discount: 15,
      slug: 'modern-sofa'
    },
    {
      id: 2,
      name: 'Угловой диван',
      category: 'living-room',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop',
      bestseller: false,
      discount: 0,
      slug: 'corner-sofa'
    },
    {
      id: 3,
      name: 'Мягкое кресло',
      category: 'living-room',
      price: 499,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop',
      bestseller: false,
      discount: 0,
      slug: 'soft-armchair'
    },
    {
      id: 4,
      name: 'Двухспальная кровать',
      category: 'bedroom',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop',
      bestseller: true,
      discount: 0
    },
    {
      id: 5,
      name: 'Прикроватная тумбочка',
      category: 'bedroom',
      price: 199,
      image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1780&auto=format&fit=crop',
      bestseller: false,
      discount: 0
    },
    {
      id: 6,
      name: 'Гардероб',
      category: 'bedroom',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1887&auto=format&fit=crop',
      bestseller: false,
      discount: 10
    },
    {
      id: 7,
      name: 'Кухонный гарнитур',
      category: 'kitchen',
      price: 2299,
      image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=2535&auto=format&fit=crop',
      bestseller: true,
      discount: 0
    },
    {
      id: 8,
      name: 'Обеденный стол',
      category: 'kitchen',
      price: 799,
      image: 'https://images.unsplash.com/photo-1615968679312-9b7ed9f04e79?q=80&w=1780&auto=format&fit=crop',
      bestseller: false,
      discount: 5
    },
    {
      id: 9,
      name: 'Стулья (комплект 4 шт)',
      category: 'kitchen',
      price: 399,
      image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1887&auto=format&fit=crop',
      bestseller: false,
      discount: 0
    },
    {
      id: 10,
      name: 'Рабочий стол',
      category: 'office',
      price: 599,
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1935&auto=format&fit=crop',
      bestseller: true,
      discount: 0
    },
    {
      id: 11,
      name: 'Офисное кресло',
      category: 'office',
      price: 349,
      image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1887&auto=format&fit=crop',
      bestseller: false,
      discount: 20
    },
    {
      id: 12,
      name: 'Книжный шкаф',
      category: 'office',
      price: 899,
      image: 'https://images.unsplash.com/photo-1588200618450-3a5b1d3b9aa5?q=80&w=1887&auto=format&fit=crop',
      bestseller: false,
      discount: 0
    }
  ];

  const filteredProducts = products.filter(product => product.category === category);
  const MotionDiv = motion.div;

  return (
    <>
      <Helmet>
        <title>{currentCategory.title} - MebelCity</title>
        <meta name="description" content={currentCategory.description} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white dark:bg-navy-dark transition-colors duration-300">
        <Navbar />
        
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="relative bg-navy-dark text-white py-16">
            <div className="absolute inset-0 opacity-30">
              <img 
                src={currentCategory.image}
                alt={currentCategory.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <div className="flex items-center text-sm mb-4 text-white/70">
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ChevronRight size={14} className="mx-2" />
                  <Link to="/catalog" className="hover:text-white">Catalog</Link>
                  <ChevronRight size={14} className="mx-2" />
                  <span className="text-white">{currentCategory.title}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{currentCategory.title}</h1>
                <p className="text-lg text-white/80 mb-8 max-w-2xl">
                  {currentCategory.description}
                </p>
              </MotionDiv>
            </div>
          </section>

          <section className="py-16 bg-gray-50 dark:bg-navy/50">
            <div className="container mx-auto px-4">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <MotionDiv
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * (index % 3) }}
                    >
                      <ProductCard product={product} />
                    </MotionDiv>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-semibold mb-3 text-navy-dark dark:text-white">No products found</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    We couldn't find any products in this category. Please check back later or browse our other categories.
                  </p>
                  <Button className="bg-wood hover:bg-wood-dark text-white">
                    <Link to="/catalog">Browse Catalog</Link>
                  </Button>
                </div>
              )}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
    bestseller: boolean;
    discount: number;
    slug: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        slug: product.slug
    });

    toast.success("Товар добавлен в корзину", {
      description: `${product.name} добавлен в корзину`,
    });
  };

  return (
    <div className="group bg-white dark:bg-navy/30 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={`${imageUrl}/${product.image}`}
          alt={product.name}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {product.bestseller && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-wood text-white font-medium">Bestseller</Badge>
          </div>
        )}
        
        {product.discount > 0 && (
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-red-500 text-white font-medium">-{product.discount}%</Badge>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <Link to={`/catalog/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-4 text-navy-dark dark:text-white">{product.name}</h3>
        </Link>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {product.discount > 0 ? (
              <>
                <span className="font-bold text-lg text-navy-dark dark:text-white">
                  {product.price}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">${product.price}</span>
              </>
            ) : (
              <span className="font-bold text-lg text-navy-dark dark:text-white">${product.price}</span>
            )}
          </div>
          
          <Button className="bg-wood hover:bg-wood-dark text-white" onClick={handleAddToCart}>
            <ShoppingCart size={16} className="mr-1" />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
