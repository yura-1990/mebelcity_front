
import React, {useEffect, useState} from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n/context';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {Catalogs, Galleries, useStore} from "@/store";
import {imageUrl} from "@/axios";
import Seo from '@/components/Seo';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string| number | null>(null);

  const getGalleries = useStore((store) => store.getGalleries);
  const galleries: Galleries[] = useStore((store) => store.state.galleries);
  const catalogs: Catalogs[] = useStore((store) => store.state.catalogs);

  useEffect(() => {
    getGalleries()
  }, [getGalleries]);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop',
      category: 'living-room',
      title: 'Modern Living Room'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2157&auto=format&fit=crop',
      category: 'bedroom',
      title: 'Elegant Bedroom'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?q=80&w=2070&auto=format&fit=crop',
      category: 'kitchen',
      title: 'Sleek Kitchen Design'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop',
      category: 'office',
      title: 'Executive Office'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=2080&auto=format&fit=crop',
      category: 'living-room',
      title: 'Contemporary Lounge'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop',
      category: 'bedroom',
      title: 'Luxury Bedroom Suite'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
      category: 'kitchen',
      title: 'Modern Kitchen Setup'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop',
      category: 'office',
      title: 'Creative Workspace'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
      category: 'living-room',
      title: 'Classic Living Area'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop',
      category: 'bedroom',
      title: 'Minimalist Bedroom'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068&auto=format&fit=crop',
      category: 'kitchen',
      title: 'Scandinavian Kitchen'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=2032&auto=format&fit=crop',
      category: 'office',
      title: 'Home Office Setup'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
      category: 'magazine',
      title: 'Classic Living Area'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop',
      category: 'magazine',
      title: 'Minimalist Bedroom'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068&auto=format&fit=crop',
      category: 'magazine',
      title: 'Scandinavian Kitchen'
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=2032&auto=format&fit=crop',
      category: 'magazine',
      title: 'Home Office Setup'
    },
  ];

  const filteredImages = selectedCategory && selectedCategory !== 'all'
    ? galleries.filter(img => img.catalog_id === selectedCategory)
    : galleries.length > 0 ? galleries : galleryImages;

  const MotionDiv = motion.div;

  return (
    <>
      <Seo
        title="Галерея офисной мебели MebelCity — фото работ в Ташкенте"
        description={t('furniture_gallery_intro')}
        url="https://mebelcity.uz/gallery"
        keywords="галерея мебели Ташкент, фото офисной мебели, MebelCity портфолио, примеры офисной мебели"
      />

      <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
        <Navbar />

        <main className="flex-grow pt-2">
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white section-title">
                  {t('nav.gallery')}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('furniture_gallery_explore')}
                </p>
              </div>

              <div className={'pr-4 sticky z-10 sm:top-[70px] min-[1600px]:top-[70px]'}>
                <MotionDiv
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="flex flex-wrap justify-center gap-3 mb-2"
                >
                  <Button
                      variant={selectedCategory === 'all' ? "default" : "outline"}
                      onClick={() => setSelectedCategory('all')}
                      className={selectedCategory === 'all' ? "px-4 py-2 bg-white text-emerald-500 border border-emerald-500 hover:bg-emerald-800 hover:text-white dark:border-none  rounded-full" : "hover:bg-emerald-800 hover:text-white text-white px-4 py-2 bg-emerald-500 rounded-full"}
                  >
                    <span className={` ${selectedCategory === 'all' ? '' : 'hover:text-white'} text-[18px] hover:scale-105`}>{t('category.all') || 'Все'}</span>
                  </Button>
                  {catalogs?.map((category) => (
                      <Button
                          key={category.id}
                          variant={selectedCategory === category.id ? "default" : "outline"}
                          onClick={() => setSelectedCategory(category.id)}
                          className={selectedCategory === category.id ? "px-4 py-2 bg-white text-emerald-500 border border-emerald-500 hover:bg-emerald-800 hover:text-white dark:border-none  rounded-full" : "hover:bg-emerald-800 hover:text-white text-white px-4 py-2 bg-emerald-500 rounded-full"}
                      >
                        <span className={` ${selectedCategory === category.id.toString() ? '' : 'hover:text-white'} text-[18px] hover:scale-105`}>{category.name}</span>
                      </Button>
                  ))}
                </MotionDiv>
              </div>
              {/* Filter Buttons */}


              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <AnimatePresence>
                  {filteredImages.map((image, index) => (
                    <MotionDiv
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      layout
                      className="aspect-square relative overflow-hidden rounded-lg cursor-pointer group"
                      onClick={() => setSelectedImage(image.image)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={`${imageUrl}/${image.image}`}
                        alt={image.name || "Фото офисной мебели MebelCity"}
                        width="400"
                        height="400"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <Badge className="inline-block self-start mb-2 bg-wood">{catalogs.find(c => c.id === image.catalog_id)?.name}</Badge>
                        <h3 className="text-white font-medium">{image.name}</h3>
                      </div>
                    </MotionDiv>
                  ))}
                </AnimatePresence>
              </div>

              {/* Empty State */}
              {filteredImages.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600 dark:text-gray-300">{t('no_images')}</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setSelectedCategory('all')}
                  >
                    View All Images
                  </Button>
                </div>
              )}

              {/* Image Modal */}
              {selectedImage && (
                <MotionDiv
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                >
                  <div className="relative max-w-5xl w-full">
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-2 right-2 z-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
                      onClick={() => setSelectedImage(null)}
                    >
                      <X />
                    </Button>
                    <img
                      src={`${imageUrl}/${selectedImage}`}
                      alt="Gallery image"
                      className="w-full h-auto max-h-[85vh] object-contain"
                    />
                  </div>
                </MotionDiv>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
