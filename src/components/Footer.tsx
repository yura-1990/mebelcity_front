
import React, {useEffect} from 'react';
import { Separator } from '@/components/ui/separator';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n/context';
import logo from '../assets/images/logos/6.qora home pn.png'
import { FaTelegramPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {useStore} from "@/store";
import {features} from '@/components/AboutSection.tsx'

const MotionLink = motion.create(Link);


const Footer = () => {
  const { t, language } = useLanguage();
  const getCatalogs = useStore((store) => store.getCatalogs);
  const catalogs = useStore((store) => store.state.catalogs);

  useEffect(() => {
    getCatalogs()

  }, [language])



  return (
    <footer className="bg-navy-dark text-white pt-2">
      <div className="px-4 lg:px-5 md:px-4  md:container mx-auto ">

        {/* Main Footer */}
        <div className='mt-6'>
          <MotionLink
              to="/"
              whileHover={{ scale: 1.10 }}
              transition={{
                type: 'spring',     // spring, tween, inertia
                stiffness: 300,     // how stiff the spring is
                damping: 10,        // how much bounce to dampen
                duration: 0.1       // optional, mostly for tween
              }}
              className="inline-block text-white dark:text-white font-bold text-2xl"
          >
            <img
                src={logo}
                alt="mebelcity home logo"
                className="h-10"
                loading="lazy"
            />
          </MotionLink>
        </div>
        <div className="pb-10 pt-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 min-[600px]:gap-20 lg:grid-cols-3">
          <div className={'mb-5'}>
            <h3 className="text-lg font-semibold mb-3 text-[16px] sm:text-[20px] md:text-[25px]">{t('footer.contacts')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={18} className="text-blue-600 mr-3 shrink-0" />
                <span className="text-white/70 text-[16px] sm:text-[16px] md:text-[20px]">+998 90 183 22 33</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-blue-600 mr-3 shrink-0" />
                <span className="text-white/70 text-wrap text-[16px] sm:text-[16px] md:text-[20px]">umarovrassel@gmail.com</span>
              </li>


            </ul>

            <div className='mt-4'>
              <p className="text-white/70 mb-6 sm:hidden">
                {/* {t('footer.aboutCompany')} */}
              </p>
              <div className="flex space-x-8">
                {/* <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <Facebook size={20} />
                  </a> */}
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <FaTelegramPlane size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                {/* <a href="#" className="text-white/70 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a> */}

              </div>
            </div>

          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-[16px] sm:text-[20px] md:text-[25px]">{t('address')}</h3>
              <ul className="space-y-4">
                <li className="text-white/70 text-[16px] sm:text-[14px] md:text-[18px]">
                  <div className={'flex items-center'}>
                    <MapPin size={22} className="text-red-600 mr-3 shrink-0" />
                    <a href={'/contact#map'}>
                      Toshkent viloyati, Zangiota tumani,
                      <br />
                      Nazrbek, Xorazmiy ko`chasi, 82 uy
                    </a>
                  </div>
                </li>
              </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[16px] sm:text-[20px] md:text-[25px]">{t('footer.workingHours')}</h3>
            <ul className="space-y-4">
              <li className="text-white/70 text-[16px] sm:text-[16px] md:text-[20px]">

                Пн-Сб: 10:00 - 17:00
              </li>
            </ul>

          </div>

          {/*<div className={'mb-5'}>*/}
          {/*    <h3 className="text-lg font-semibold mb-3 text-[16px] sm:text-[20px] md:text-[25px]">{t('footer.catalog')}</h3>*/}
          {/*    <ul className="space-y-1">*/}
          {/*      {*/}
          {/*        catalogs.map((catalog) => (*/}
          {/*            <li>*/}
          {/*              <Link to="/catalog" className="text-white/70 text-[16px] sm:text-[16px] md:text-[20px] hover:text-white transition-colors">*/}
          {/*                {catalog.name}*/}
          {/*              </Link>*/}
          {/*            </li>*/}
          {/*        ))*/}
          {/*      }*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*<div>*/}
          {/*    <h3 className="text-lg font-semibold mb-3 text-[16px] sm:text-[20px] md:text-[25px]">{t('footer.information')}</h3>*/}
          {/*    <ul className="space-y-1">*/}
          {/*      {*/}
          {/*        features.map((feature) => (*/}
          {/*            <li>*/}
          {/*              <Link to="/about" className="text-white/70 text-[16px] sm:text-[16px] md:text-[20px] hover:text-white transition-colors">*/}
          {/*                {t('footer.aboutUs')}*/}
          {/*              </Link>*/}
          {/*            </li>*/}
          {/*        ))*/}
          {/*      }*/}

          {/*      <li>*/}
          {/*        <Link to="/delivery" className="text-white/70 text-[16px] sm:text-[16px] md:text-[20px] hover:text-white transition-colors">*/}
          {/*          {t('footer.deliveryPayment')}*/}
          {/*        </Link>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <Link to="/warranty" className="text-white/70 text-[16px] sm:text-[16px] md:text-[20px] hover:text-white transition-colors">*/}
          {/*          {t('footer.warranty')}*/}
          {/*        </Link>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <Link to="/blog" className="text-white/70 text-[16px] sm:text-[16px] md:text-[20px] hover:text-white transition-colors">*/}
          {/*          {t('footer.news')}*/}
          {/*        </Link>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <Link to="/careers" className="text-white/70 text-[16px] sm:text-[16px] md:text-[20px] hover:text-white transition-colors">*/}
          {/*          {t('footer.careers')}*/}
          {/*        </Link>*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
        </div>
        
        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col flex-wrap md:flex-row justify-between items-center gap-4">
            <div className="text-white/70 text-sm text-[10px] sm:text-[12px] md:text-[16px]">
              {t('footer.copyright')}
            </div>
            <div className="flex gap-4 text-sm">
              <Link to="/privacy" className="text-white/70 hover:text-white transition-colors text-[10px] sm:text-[12px] md:text-[16px]">
                {t('footer.privacy')}
              </Link>
              <Separator orientation="vertical" className="h-4 bg-white/20" />
              <Link to="/terms" className="text-white/70 hover:text-white transition-colors text-[10px] sm:text-[12px] md:text-[16px]">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
