import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Animable from './Animable';
import {Catalogs, useStore} from "@/store";
import {useLanguage} from "@/lib/i18n/context.tsx";
import {imageUrl} from "@/axios";

const categories = [
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

const CatalogSlider = () => {
  const { language } = useLanguage();
  const getCatalogs = useStore((store) => store.getCatalogs);
  const catalogs = useStore((store) => store.state.catalogs);
  const loading = useStore((store) => store.state.loading);

  useEffect(() => {
    getCatalogs()

  }, [getCatalogs, language])

  return (
      <div className="py-16 md:py-12 overflow-hidden bg-white dark:bg-navy-dark">
        <div className="container mx-auto px-4">
          <Animable>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white section-title mb-5 text-center">
              Наши Каталог
            </h2>
          </Animable>

          <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="w-full"
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
          >

            {
              catalogs?.map((category: Catalogs, idx: number) => (
                <SwiperSlide key={category.id}>
                  <Animable index={idx} className="relative h-[400px] rounded-xl overflow-hidden group">
                    <img
                        src={`${imageUrl}/${category.image_laptop}`}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {category.image_laptop}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent p-6 flex flex-col justify-end">
                      <h3 className="text-white text-2xl font-bold mb-4">{category.name}</h3>
                      <Link to={`/catalog/45}`}>
                        <Button className="bg-wood hover:bg-wood-dark text-white">
                          Смотреть
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </Animable>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
  );
};

export default CatalogSlider;
