import React, { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/context';
import { AnimatePresence, motion } from 'framer-motion';
import { useStore } from '@/store';
import { ProductCard } from '@/components/FeaturedProducts.tsx';
import Navbar from '@/components/Navbar.tsx';
import Footer from '@/components/Footer.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Seo from '@/components/Seo';

const SITE_URL = 'https://mebelcity.uz';
const STORAGE_URL = 'https://adminpanel.mebelcity.uz/storage';
const DEFAULT_CATALOG_IMAGE = 'https://mebelcity.uz/assets/images/google/catalog-table.webp';

const Catalog = ({ home }: { home: boolean }) => {
  const { t, language } = useLanguage();
  const getProducts = useStore((store) => store.getProducts);
  const getCatalogs = useStore((store) => store.getCatalogs);
  const products = useStore((store) => store.state.products);
  const catalogs = useStore((store) => store.state.catalogs);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('all');

  useEffect(() => {
    getProducts();
    getCatalogs();
  }, [getProducts, getCatalogs, language]);

  const filteredImages = useMemo(() => {
    return selectedCategory && selectedCategory !== 'all'
      ? products.filter((product) => product.catalog_id.toString() === selectedCategory)
      : products;
  }, [products, selectedCategory]);

  const selectedCategoryName = useMemo(() => {
    if (!selectedCategory || selectedCategory === 'all') {
      return t('furniture_catalog_title');
    }

    const found = catalogs.find((category) => category?.id?.toString() === selectedCategory);
    return found?.name || t('furniture_catalog_title');
  }, [catalogs, selectedCategory, t]);

  const pageTitle = useMemo(() => {
    if (home) {
      return '';
    }

    if (selectedCategory && selectedCategory !== 'all') {
      return `${selectedCategoryName} | MebelCity`;
    }

    return `${t('furniture_catalog_title')} | MebelCity`;
  }, [home, selectedCategory, selectedCategoryName, t]);

  const pageDescription = useMemo(() => {
    if (selectedCategory && selectedCategory !== 'all') {
      return `${selectedCategoryName} — каталог мебели MebelCity в Ташкенте и по Узбекистану. Большой выбор моделей, качественные материалы и современный дизайн.`;
    }

    return (
      t('furniture_catalog_description') ||
      'Каталог мебели MebelCity: офисная мебель, столы, шкафы, комплекты и современные решения для интерьера в Ташкенте и по Узбекистану.'
    );
  }, [selectedCategory, selectedCategoryName, t]);

  const pageUrl = useMemo(() => {
    return `${SITE_URL}/ofisnaya-mebel`;
  }, []);

  const schemaItems = useMemo(() => {
    return filteredImages.slice(0, 50).map((product, index) => {
      const image =
        product?.image_laptop
          ? `${STORAGE_URL}/${product.image_laptop}`
          : DEFAULT_CATALOG_IMAGE;

      return {
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/product/${encodeURIComponent(product.name)}`,
        name: product.name,
        image,
      };
    });
  }, [filteredImages]);

  const MotionDiv = motion.div;

  return (
    <>
      {!home && (
        <Seo
          title={pageTitle}
          description={pageDescription}
          url={pageUrl}
          image={DEFAULT_CATALOG_IMAGE}
          ogType="website"
        >
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'CollectionPage',
                  name: pageTitle,
                  url: pageUrl,
                  description: pageDescription,
                  inLanguage: language || 'ru',
                  isPartOf: {
                    '@type': 'WebSite',
                    name: 'MebelCity',
                    url: `${SITE_URL}/`,
                  },
                  primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: DEFAULT_CATALOG_IMAGE,
                  },
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Главная',
                      item: `${SITE_URL}/`,
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: t('furniture_catalog_title'),
                      item: pageUrl,
                    },
                  ],
                },
                {
                  '@type': 'ItemList',
                  name: selectedCategoryName,
                  numberOfItems: filteredImages.length,
                  itemListElement: schemaItems,
                },
              ],
            })}
          </script>
        </Seo>
      )}

      <section className="flex-grow bg-background transition-colors duration-300">
        <Navbar />

        <section className="sm:container w-full relative top-0 h-full">
          <div className="h-full w-full mx-auto px-4 py-2">
            <div className={`text-center mb-2 ${!home ? 'mt-[100px]' : ''}`}>
              {home ? (
                <h2 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white section-title">
                  {t('furniture_catalog_title')}
                </h2>
              ) : (
                <h1 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white section-title">
                  {t('furniture_catalog_title')}
                </h1>
              )}

              {home ? (
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t('furniture_catalog_description')}
                </p>
              ) : (
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {pageDescription}
                </p>
              )}
            </div>

            <div className="pr-4 sticky z-10 sm:top-[70px] min-[1600px]:top-[99px]">
              <MotionDiv
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
              >
                <div className="flex h-full flex-wrap justify-center gap-3">
                  <Button
                    size="custom"
                    key={10000}
                    variant={selectedCategory === 'all' ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory('all')}
                    className={
                      selectedCategory === 'all'
                        ? 'px-4 py-2 bg-white hover:text-emerald-500 text-emerald-500 border border-emerald-500 dark:border-none rounded-full'
                        : 'hover:bg-emerald-800 text-white px-4 py-2 bg-emerald-600 rounded-full'
                    }
                  >
                    <span className="2xl:text-[24px] hover:text-emerald-500 text-[18px]">
                      {t('category.all')}
                    </span>
                  </Button>

                  {catalogs.map((category) => (
                    <Button
                      size="custom"
                      key={category.id}
                      variant={
                        selectedCategory === category.id.toString() ? 'default' : 'outline'
                      }
                      onClick={() => setSelectedCategory(category.id.toString())}
                      className={
                        selectedCategory === category.id.toString()
                          ? 'px-4 py-2 bg-white hover:text-emerald-700 text-emerald-700 border border-emerald-700 dark:border-none rounded-full'
                          : 'hover:bg-emerald-800 text-white px-4 py-2 bg-emerald-600 rounded-full'
                      }
                    >
                      <span className="2xl:text-[24px] text-[18px] hover:text-emerald-500">
                        {category.name}
                      </span>
                    </Button>
                  ))}
                </div>
              </MotionDiv>
            </div>

            {!home || !!selectedCategory ? (
              <div className="w-full overflow-x-hidden">
                {selectedCategory === 'all' ? (
                  catalogs.map((el, index) => {
                    const categorySlides = filteredImages.filter((it) => it.catalog_id === el.id);
                    if (categorySlides.length === 0) return null;

                    // Ensure we have enough slides for loop mode (min 18 slides)
                    let loopSlides = [...categorySlides];
                    while (loopSlides.length > 0 && loopSlides.length < 18) {
                      loopSlides = [...loopSlides, ...loopSlides];
                    }

                    return (
                      <Swiper
                        key={`${el.id}-${loopSlides.length}`}
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={2}
                        freeMode={true}
                        zoom={true}
                        autoplay={{
                          delay: 2500,
                          reverseDirection: index % 2 !== 0,
                        }}
                        observer={true}
                        observeParents={true}
                        observeSlideChildren={true}
                        className="w-full h-full overflow-visible mt-5 relative"
                        loop={true}
                        speed={2000}
                        breakpoints={{
                          0: { slidesPerView: 2 },
                          500: { slidesPerView: 3 },
                          1200: { slidesPerView: 4 },
                          1600: { slidesPerView: 5 },
                          2000: { slidesPerView: 6 },
                        }}
                      >
                        <AnimatePresence>
                          {loopSlides.map((product, idx) => (
                            <SwiperSlide key={`${product.id}-${idx}`} className="slide-item">
                              <MotionDiv
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.2, delay: idx * 0.095 }}
                                layout
                                className="relative cursor-pointer h-full"
                                whileHover={{ scale: 1.02 }}
                              >
                                <ProductCard product={product} />
                              </MotionDiv>
                            </SwiperSlide>
                          ))}
                        </AnimatePresence>
                      </Swiper>
                    );
                  })
                ) : (
                  <div className="grid flex-grow grid-cols-2 mt-5 min-[600px]:grid-cols-3 2xl:grid-cols-5 min-[1600px]:grid-cols-5 xl:grid-cols-4 gap-2 flex-1 overflow-y-auto">
                    <AnimatePresence>
                      {filteredImages.map((product, index) => (
                        <MotionDiv
                          key={product.id}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ duration: 0.2, delay: index * 0.095 }}
                          layout
                          className="relative cursor-pointer h-full group"
                          whileHover={{ scale: 1.02 }}
                        >
                          <ProductCard product={product} />
                        </MotionDiv>
                      ))}
                    </AnimatePresence>
                  </div>
                )}

                {filteredImages.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      No images found for this category.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => setSelectedCategory('all')}
                    >
                      View All Images
                    </Button>
                  </div>
                )}

                {selectedImage && (
                  <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex items-center justify-center bg-black/90 p-4"
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
                        loading="lazy"
                        src={selectedImage}
                        alt="Selected catalog image"
                        className="w-full h-auto max-h-[85vh] object-contain"
                      />
                    </div>
                  </MotionDiv>
                )}
              </div>
            ) : null}
          </div>
        </section>

        {!home ? <Footer /> : null}
      </section>
    </>
  );
};

export default Catalog;