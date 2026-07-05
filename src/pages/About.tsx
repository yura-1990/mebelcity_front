import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n/context';
import { CheckCircle, AwardIcon, Clock, Briefcase, Users, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import about from '../assets/images/about/about.jpeg';
import Seo from '@/components/Seo';
import { useStore } from '@/store';
import { useEffect } from 'react';

const STORAGE_URL = 'https://adminpanel.mebelcity.uz/storage';

const About = () => {
  const { t, language } = useLanguage();
  const getSeos = useStore((store) => store.getSeos);
  const seos = useStore((store) => store.state.seos);

  useEffect(() => {
    getSeos();
  }, [getSeos, language]);

  const stats = [
    { value: '15+', label: t('years_experience'), icon: Clock },
    { value: '1000+', label: t('happy_customers'), icon: Users },
    { value: '15+', label: t('professional_employees'), icon: Briefcase },
  ];

  const MotionDiv = motion.div;

  const seo = seos.find((s) => s.page === 'about');

  const pageTitle = seo?.title || `${t('nav.about')} | MebelCity`;
  const pageUrl = 'https://mebelcity.uz/about';
  const pageImage = seo?.og_image ? `${STORAGE_URL}/${seo.og_image}` : 'https://mebelcity.uz/assets/images/about/about.jpeg';

  const pageDescription = seo?.description ||
    t('about.description1') ||
    'Узнайте больше о компании MebelCity — производителе и поставщике качественной офисной и домашней мебели в Узбекистане.';
  const pageKeywords = seo?.keywords || undefined;

  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        url={pageUrl}
        image={pageImage}
        ogType="website"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: pageTitle,
            url: pageUrl,
            description: pageDescription,
            inLanguage: language || 'ru',
            mainEntity: {
              '@type': 'Organization',
              name: 'MebelCity',
              url: 'https://mebelcity.uz/',
              logo: 'https://mebelcity.uz/assets/images/logos/qora2.png',
              description:
                'MebelCity — компания по производству и продаже мебели в Узбекистане.',
              sameAs: [
                'https://www.facebook.com/mebelcity.uz',
                'https://www.instagram.com/mebelcity.uz',
              ],
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Главная',
                  item: 'https://mebelcity.uz/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: t('nav.about'),
                  item: pageUrl,
                },
              ],
            },
            image: pageImage,
          })}
        </script>
      </Seo>

      <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
        <Navbar />

        <main className="flex-grow pt-8">
          <section className="py-10 bg-gray-50 dark:bg-navy/50">
            <div className="text-center my-5">
              <h1 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white section-title">
                {t('about.title')}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('about.description1')}
              </p>
            </div>

            <br className="my-5" />

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
                      alt="О компании MebelCity"
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                    />
                  </MotionDiv>
                </div>

                <MotionDiv
                  initial={{ opacity: 0, x: 300 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-navy-dark dark:text-white float-start pe-5">
                    {t('our_story')}
                  </h2>
                  <p className="text-gray-700 text-justify dark:text-gray-300 mb-0">
                    {t('about_intro')}
                  </p>
                  <p className="text-gray-700 text-justify dark:text-gray-300 mb-0">
                    {t('about_values')}
                  </p>
                  <p className="text-gray-700 text-justify dark:text-gray-300 mb-4">
                    {t('about_today')}
                  </p>

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
                          <stat.icon className="h-8 w-8 text-emerald-600" />
                        </div>
                        <div className="text-2xl font-bold text-navy-dark dark:text-white">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </MotionDiv>
                    ))}
                  </div>
                </MotionDiv>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-2"
              >
                <h2 className="text-3xl font-bold mb-4 text-navy-dark dark:text-white section-title">
                  {t('values_mission')}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('about.description2')}
                </p>
              </MotionDiv>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {[
                  { title: t('about.highQuality'), description: t('about.highQualityDesc'), icon: AwardIcon },
                  { title: t('about.customDesign'), description: t('about.customDesignDesc'), icon: Coffee },
                  { title: t('about.timelyDelivery'), description: t('about.timelyDeliveryDesc'), icon: Clock },
                  { title: t('about.warranty'), description: t('about.warrantyDesc'), icon: CheckCircle },
                ].map((feature, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="bg-card p-6 rounded-xl shadow-sm border border-gray-100 dark:border-navy hover:shadow-md transition-shadow"
                  >
                    <div className="bg-wood/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                      <feature.icon className="h-7 w-7 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-navy-dark dark:text-white">
                      {feature.title}
                    </h3>
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