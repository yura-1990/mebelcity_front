
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Гостиная',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    slug: 'living-room',
  },
  {
    id: 2,
    name: 'Спальня',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1971&auto=format&fit=crop',
    slug: 'bedroom',
  },
  {
    id: 3,
    name: 'Кухня',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068&auto=format&fit=crop',
    slug: 'kitchen',
  },
  {
    id: 4,
    name: 'Офис',
    image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1770&auto=format&fit=crop',
    slug: 'office',
  },
];

const CategorySection = () => {
  return (
    <section id="catalog" className="py-16 md:py-24 bg-gray-50 dark:bg-navy-dark/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white section-title">
            Наши Категории
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Исследуйте наши разнообразные коллекции мебели, созданные для каждой комнаты в вашем доме
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.id} 
              category={category} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  return (
    <div 
      className={cn(
        "furniture-card group relative overflow-hidden rounded-xl shadow-md h-80",
        "animate-fade-up transition-all duration-300",
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <img 
        src={category.image} 
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-white text-xl font-bold mb-2">{category.name}</h3>
        <Link 
          to={`/catalog/${category.slug}`} 
          className="inline-flex items-center text-sm text-white/90 hover:text-white transition-colors"
        >
          Смотреть коллекцию
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;
