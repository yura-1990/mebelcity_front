
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Алексей Петров',
    role: 'Владелец ресторана',
    comment: 'Заказывали мебель для нашего ресторана. Качество превзошло все ожидания! Прочная, стильная и комфортная мебель, которая отлично вписалась в интерьер. Рекомендую MebelCity всем предпринимателям.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Елена Исмаилова',
    role: 'Дизайнер интерьеров',
    comment: 'Как дизайнер, я очень требовательна к качеству и внешнему виду мебели. MebelCity - это надежный партнер, с которым я сотрудничаю уже несколько лет. Они воплощают в жизнь самые смелые идеи.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Рустам Каримов',
    role: 'Семейный клиент',
    comment: 'Приобрели полный комплект мебели для гостиной. Сервис на высоте - помогли с выбором, доставили быстро, собрали качественно. Мебель служит уже 3 года и выглядит как новая.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1964&auto=format&fit=crop'
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white section-title">
            Отзывы Клиентов
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Узнайте, что говорят о нас клиенты, которые уже оценили качество нашей мебели и сервиса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "furniture-card bg-white dark:bg-navy/30 rounded-xl overflow-hidden shadow-md p-6",
        "animate-fade-up transition-all duration-300 h-full flex flex-col",
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-navy-dark dark:text-white">{testimonial.name}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < testimonial.rating ? "text-gold fill-gold" : "text-gray-300 dark:text-gray-600"} 
              />
            ))}
          </div>
        </div>
      </div>
      
      <blockquote className="text-gray-600 dark:text-gray-300 italic flex-grow">
        "{testimonial.comment}"
      </blockquote>
    </div>
  );
};

export default TestimonialSection;
