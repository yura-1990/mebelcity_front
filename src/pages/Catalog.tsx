
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/context';
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "@/store";
import { ProductCard } from "@/components/FeaturedProducts.tsx";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Seo from "@/components/Seo"; // 👈 подключаем централизованный SEO
import { maxHeaderSize } from 'http';

const Catalog = ({ home }: { home: boolean }) => {
  const { t, language } = useLanguage();
  const getProducts = useStore((store) => store.getProducts);
  const getCatalogs = useStore((store) => store.getCatalogs);
  const products = useStore((store) => store.state.products);
  const catalogs = useStore((store) => store.state.catalogs);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>("all");

  useEffect(() => {
    getProducts();
    getCatalogs();
  }, [getProducts, language]);

  const filteredImages =
    selectedCategory && selectedCategory !== "all"
      ? products.filter((product) => product.catalog_id.toString() === selectedCategory)
      : products;

  const MotionDiv = motion.div;

  return (
    <>
      {!home && (
        <Seo
          title={`MebelCity - ${t("seo_title")}`}
          description={t("seo_description")}
          keywords={t("meta_keywords")}
          url="https://mebelcity.uz/ofisnaya-mebel"
          image="https://mebelcity.uz/images/google/catalog-table.webp"
        >
          <meta property="og:type" content="product.group" />

          {/* 👇 Structured Data для Google с картинками */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                name: "MebelCity Catalog",
                url: "https://mebelcity.uz/ofisnaya-mebel",
                numberOfItems: filteredImages.length,
                itemListElement: filteredImages.map((product, index) => {
                  const priceValue = product?.price
                    ? String(product.price).replace(/[^\d.]/g, '')
                    : "0";

                  return {
                    "@type": "Product",
                    position: index + 1,
                    name: product.name,
                    image: product?.image_laptop
                      ? `https://adminpanel.mebelcity.uz/storage/${product.image_laptop}`
                      : "https://mebelcity.uz/preview-catalog.jpg",
                    url: `https://mebelcity.uz/product/${encodeURIComponent(product.name)}`,
                    description:
                      product.description || "Качественная офисная мебель от MebelCity.",
                    sku: product?.sku || `SKU-${index + 1}`,
                    brand: {
                      "@type": "Brand",
                      name: "MebelCity"
                    },
                    offers: {
                      "@type": "Offer",
                      url: `https://mebelcity.uz/product/${encodeURIComponent(product.name)}`,
                      priceCurrency: "UZS",
                      price: priceValue,
                      priceValidUntil: new Date(
                        new Date().setFullYear(new Date().getFullYear() + 1)
                      )
                        .toISOString()
                        .split("T")[0],
                      availability: "https://schema.org/InStock",
                      itemCondition: "https://schema.org/NewCondition",
                      shippingDetails: {
                        "@type": "OfferShippingDetails",
                        shippingDestination: {
                          "@type": "DefinedRegion",
                          addressCountry: "UZ"
                        },
                        deliveryTime: {
                          "@type": "ShippingDeliveryTime",
                          handlingTime: {
                            "@type": "QuantitativeValue",
                            minValue: 1,
                            maxValue: 3,
                            unitCode: "DAY"
                          }
                        }
                      },
                      hasMerchantReturnPolicy: {
                        "@type": "MerchantReturnPolicy",
                        returnPolicyCategory:
                          "https://schema.org/MerchantReturnFiniteReturnWindow",
                        merchantReturnDays: 7
                      }
                    },
                    aggregateRating: {
                      "@type": "AggregateRating",
                      ratingValue: product?.rating || "5",
                      reviewCount: product?.reviewCount || "1"
                    },
                    review: {
                      "@type": "Review",
                      author: { "@type": "Person", name: "Покупатель" },
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                        bestRating: "5"
                      },
                      reviewBody: "Отличное качество мебели, рекомендую!"
                    }
                  };
                })
              })
            }}
          />



        </Seo>
      )}


      <section className="flex-grow bg-white dark:bg-navy-dark transition-colors duration-300">
        <Navbar />
        <section className="sm:container w-full relative top-0 h-full">
          <div className="h-full w-full mx-auto px-4 py-2">
            {
              <div className={`text-center mb-2 ${!home ? 'mt-[100px]' : ''}`}>
                <h1 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white section-title">
                  {t('furniture_catalog_title')}
                </h1>
                {
                  home ? <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    {t('furniture_catalog_description')}
                  </p> : null
                }

              </div>

            }

            <div className={'pr-4 sticky z-10 sm:top-[70px] min-[1600px]:top-[99px]'}>
              {/* Filter Buttons */}
              <MotionDiv
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                className=""
              >
                <div className={'flex h-full flex-wrap justify-center gap-3'}>
                  <Button
                    size="custom"
                    key={10000}
                    variant={selectedCategory === 'all' ? "default" : "outline"}
                    onClick={() => setSelectedCategory('all')}
                    className={selectedCategory === 'all' ? "px-4 py-2 bg-white hover:text-blue-500 text-blue-500 border border-blue-500  dark:border-none rounded-full" : "hover:bg-blue-800 text-white px-4 py-2 bg-blue-500 rounded-full"}
                  >
                    <span className={` 2xl:text-[24px] hover:text-blue-500 text-[18px] `}>{t('All')}</span>

                  </Button>
                  {catalogs.map((category) => (
                    <Button
                      size="custom"
                      key={category.id}
                      variant={selectedCategory === category.id.toString() ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category.id.toString())}
                      className={selectedCategory === category.id.toString() ? "px-4 py-2 bg-white hover:text-blue-500 text-blue-500 border border-blue-500  dark:border-none rounded-full" : "hover:bg-blue-800  text-white px-4 py-2 bg-blue-500 rounded-full"}
                    >
                      <span className={` 2xl:text-[24px] text-[18px] hover:text-blue-500 `}>{category.name}</span>
                    </Button>
                  ))}
                </div>

              </MotionDiv>
            </div>
            {
              (!home || !!selectedCategory) && <div className={'w-full overflow-x-hidden'}>

                {selectedCategory === 'all'
                  ? catalogs.map((el, index) =>
                    <Swiper
                      key={index}
                      modules={[Autoplay]}
                      spaceBetween={10}
                      slidesPerView={2}
                      freeMode={true}
                      zoom={true}
                      autoplay={{
                        delay: 2500,
                        reverseDirection: index % 2 !== 0,
                      }}
                      observer={true}              // 👈 ADD THIS
                      observeParents={true}        // 👈 AND THIS
                      observeSlideChildren={true}  // 👈 optional but helps
                      className="w-full h-full overflow-visible mt-5 relative "
                      loop={true}
                      speed={2000}
                      breakpoints={{
                        0: { slidesPerView: 2 },
                        500: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 }, // 👈 base breakpoint
                        1600: { slidesPerView: 5 },
                        2000: { slidesPerView: 6 },
                      }}
                    >

                      <AnimatePresence>
                        {(() => {

                          let slides = filteredImages.filter(it => it.catalog_id === el.id)

                          if (slides.length <= 9) {
                            slides = slides.concat([...slides])
                          }

                          return slides.map((product, index) => (
                            <SwiperSlide key={index} className=' slide-item' >
                              <MotionDiv
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.2, delay: index * 0.095 }}
                                layout
                                className="relative cursor-pointer h-full"
                                whileHover={{ scale: 1.02 }}
                              >
                                <ProductCard product={product} />
                              </MotionDiv>
                            </SwiperSlide>))
                        })()}

                      </AnimatePresence>
                    </Swiper>
                  ) : <div className="grid flex-grow grid-cols-2 mt-5 min-[600px]:grid-cols-3 2xl:grid-cols-5 min-[1600px]:grid-cols-5 xl:grid-cols-4 gap-2 flex-1 overflow-y-auto">
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
                }

                {/* Gallery Grid */}

                {/* Empty State */}
                {filteredImages.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-600 dark:text-gray-300">No images found for this category.</p>
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
                    className="fixed inset-0 flex items-center  justify-center bg-black/90 p-4"
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
                        alt="Gallery image"
                        className="w-full h-auto max-h-[85vh] object-contain"
                      />
                    </div>
                  </MotionDiv>
                )}
              </div>
            }

          </div>
        </section>
        {/* Hero Section */}

        {
          !home ? <Footer /> : null
        }

      </section>
    </>
  );
};

export default Catalog;
