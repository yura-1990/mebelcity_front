
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n/context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import Seo from '@/components/Seo';
import { useStore } from '@/store';
import { useEffect } from 'react';

const STORAGE_URL = 'https://adminpanel.mebelcity.uz/storage';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(9, { message: "Phone number is required" }),
  message: z.string().min(10, { message: "Message is too short" }),
});

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const getSeos = useStore((store) => store.getSeos);
  const seos = useStore((store) => store.state.seos);

  useEffect(() => {
    getSeos();
  }, [getSeos, language]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    toast({
      title: "Form submitted",
      description: "We'll get back to you soon!",
      duration: 5000,
    });
    form.reset();
  }

  const MotionDiv = motion.div;

  const seo = seos.find((s) => s.page === 'contact');

  const pageTitle = seo?.title || "Контакты MebelCity — офисная мебель в Ташкенте | Связаться с нами";
  const pageDescription = seo?.description || "Свяжитесь с MebelCity для заказа офисной мебели в Ташкенте. Телефон: +998 90 183 22 33. Адрес: Ташкентская область, Зангиатинский район. Бесплатная консультация.";
  const pageKeywords = seo?.keywords || "контакты MebelCity, офисная мебель Ташкент телефон, заказать офисную мебель, MebelCity адрес";
  const pageImage = seo?.og_image ? `${STORAGE_URL}/${seo.og_image}` : undefined;

  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        url="https://mebelcity.uz/contact"
        keywords={pageKeywords}
        image={pageImage}
      />

      <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
        <Navbar />

        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="relative bg-navy-dark text-white py-16">
            <div className="absolute inset-0 opacity-70">
              <img
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2069&auto=format&fit=crop"
                alt="Contact us"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <MotionDiv
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl text-shadow md:text-5xl font-bold mb-6">{t('nav.contact')}</h1>
                <p className="text-lg text-shadow text-white mb-8 max-w-2xl">
                  {t('contact.heading')}
                </p>
              </MotionDiv>
            </div>
          </section>

          <section className="py-8 bg-background">
            <div className="container mx-auto px-4">
              <div className="mb-8" id={'map'}>
                <MotionDiv
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="rounded-xl overflow-hidden h-[400px] shadow-md"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8445604266994!2d69.1305267117818!3d41.312245000532876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b76198c1615%3A0xce4618095e469e35!2sMEBELCITY!5e0!3m2!1sru!2sus!4v1746354738204!5m2!1sru!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </MotionDiv>

              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                <MotionDiv
                  initial={{ opacity: 0, x: -300 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                >
                  <div className="bg-card rounded-xl shadow-sm p-7 mb-8">
                    <h2 className="text-2xl font-bold mb-6 text-navy-dark dark:text-white">{t('contact.title')}</h2>

                    <ul className="space-y-[13px]">
                      <li className="flex items-start">
                        <Phone className="text-wood mr-4 mt-2 h-5 w-5" />
                        <div>
                          <h3 className="font-medium text-navy-dark dark:text-gray-100">{t('contact.phone')}</h3>
                          <p className="text-gray-600 dark:text-gray-300 font-mono">+998 90 183 22 33</p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <Mail className="text-wood mr-4 mt-2 h-5 w-5" />
                        <div>
                          <h3 className="font-medium text-navy-dark dark:text-gray-100">{t('contact.email')}</h3>
                          <p className="text-gray-600 dark:text-gray-300">umarovrassel@gmail.com</p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <MapPin className="text-wood mr-4 mt-2 h-5 w-5" />
                        <div>
                          <h3 className="font-medium text-navy-dark dark:text-gray-100">{t('contact.address')}</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Toshkent viloyati, Zangiota tumani, Nazrbek,
                            <br />
                            Xorazmiy ko`chasi, 82 uy
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <Clock className="text-wood mr-4 mt-2 h-5 w-5" />
                        <div>
                          <h3 className="font-medium text-navy-dark dark:text-gray-100">{t('contact.working_hours')}</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {t('contact.schedule')}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col"
                >


                  <div className="bg-wood text-white rounded-xl p-8">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="h-10 w-10 mr-3" />
                      <h3 className="text-xl font-semibold">{t('contact.why_choose_us')}</h3>
                    </div>

                    <ul className="space-y-7 ml-1">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>{t('contact.reasons.quality')}</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>{t('contact.reasons.craftsmanship')}</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>{t('contact.reasons.custom')}</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>{t('contact.reasons.pricing')}</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>{t('contact.reasons.warranty')}</span>
                      </li>
                    </ul>
                  </div>
                </MotionDiv>
              </div>

              {/* Map Section */}

            </div>
          </section>
        </main>


        <Footer />
      </div>
    </>
  );
};

export default Contact;
