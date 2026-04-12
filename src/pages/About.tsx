
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n/context';
import { CheckCircle, AwardIcon, Clock, Briefcase, Users, Building, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import about from '../assets/images/about/about.jpeg'
import Seo from '@/components/Seo';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '15+', label: t('years_experience'), icon: Clock },
    { value: '1000+', label: t('happy_customers'), icon: Users },
    { value: '15+', label: t('professional_employees'), icon: Briefcase },
  ];

  const MotionDiv = motion.div;

  return (
    <>
      <Seo
          title={`${t('nav.about')} - MebelCity`}
          description={t('learn_more')}
          keywords={`${t('about.title')}, мебель, MebelCity`}
          url="https://mebelcity.uz/about"
          image="https://mebelcity.uz/images/about/about.jpeg"
      >
        {/* ✅ JSON-LD "AboutPage" Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "url": "https://mebelcity.uz/about",
            "name": `${t('nav.about')} - MebelCity`,
            "inLanguage": "ru",
            "description": t('learn_more') || "Узнайте больше о компании MebelCity — производителе качественной офисной и домашней мебели в Узбекистане. Мы создаем мебель, объединяющую комфорт, стиль и функциональность.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Главная",
                  "item": "https://mebelcity.uz"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": t('nav.about'),
                  "item": "https://mebelcity.uz/about"
                }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "MebelCity",
              "url": "https://mebelcity.uz",
              "telephone": "+998 90 123 45 67",
              "email": "info@mebelcity.uz",
              "logo": {
                "@type": "ImageObject",
                "url": "https://mebelcity.uz/assets/images/logos/qora2.png",
                "width": 200,
                "height": 200
              },
              "sameAs": [
                "https://www.facebook.com/mebelcity.uz",
                "https://www.instagram.com/mebelcity.uz"
              ]
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "MebelCity",
              "url": "https://mebelcity.uz",
              "description": "Производство и продажа офисной мебели в Узбекистане.",
              "logo": "https://mebelcity.uz/assets/images/logos/qora2.png",
              "foundingDate": "2015-01-01",
              "founder": {
                "@type": "Person",
                "name": "MebelCity Team"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "г. Ташкент, улица Мирзо Улугбека, 123",
                "addressLocality": "Ташкент",
                "postalCode": "100000",
                "addressCountry": "UZ"
              }
            },
            "image": {
              "@type": "ImageObject",
              "url": "https://mebelcity.uz/images/about/about.jpeg",
              "width": 1200,
              "height": 800
            }
          })}
        </script>

      </Seo>

      <div className="min-h-screen flex flex-col bg-white dark:bg-navy-dark transition-colors duration-300">
        <Navbar />
        
        <main className="flex-grow pt-8">

          {/* Company Story */}
          <section className="py-10 bg-gray-50 dark:bg-navy/50">
            <div className="text-center my-5">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white section-title">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('about.description1')}
              </p>
            </div>
            <br className={'my-5'} />
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="overflow-hidden rounded-xl">
                  <MotionDiv
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={about}
                      alt="Furniture production" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </MotionDiv>
                </div>
                
                <MotionDiv
                  initial={{ opacity: 0, x: 300 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-navy-dark dark:text-white float-start pe-5">{t('our_story')}</h2>
                  <p className="text-gray-700 text-justify dark:text-gray-300 mb-0">{t('about_intro')}</p>
                  <p className="text-gray-700 text-justify dark:text-gray-300 mb-0 ">{t('about_values')}</p>
                  <p className="text-gray-700 text-justify dark:text-gray-300 mb-4">{t('about_today')}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                      <MotionDiv
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="text-center"
                      >
                        <div className="flex justify-center mb-2">
                          <stat.icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-navy-dark dark:text-white">{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </MotionDiv>
                    ))}
                  </div>
                </MotionDiv>
              </div>
            </div>
          </section>

          {/* Values and Mission */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-2"
              >
                <h2 className="text-3xl font-bold mb-4 text-navy-dark dark:text-white section-title ">{t('values_mission')}</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('about.description2')}
                </p>
              </MotionDiv>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {[
                  { title: t('about.highQuality'), description: t('about.highQualityDesc'), icon: AwardIcon },
                  { title: t('about.customDesign'), description: t('about.customDesignDesc'), icon: Coffee },
                  { title: t('about.timelyDelivery'), description: t('about.timelyDeliveryDesc'), icon: Clock },
                  { title: t('about.warranty'), description: t('about.warrantyDesc'), icon: CheckCircle }
                ].map((feature, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="bg-white dark:bg-navy/40 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-navy hover:shadow-md transition-shadow"
                  >
                    <div className="bg-wood/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                      <feature.icon className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-navy-dark dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </section>
          
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
