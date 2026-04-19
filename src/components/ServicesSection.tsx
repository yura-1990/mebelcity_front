
import React, {useEffect} from 'react';
import { ArrowRight, Tag, Package, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import Animable from "@/components/Animable.tsx";
import {useLanguage} from "@/lib/i18n/context.tsx";

const ServicesSection = () => {
  const { t } = useLanguage();
  const handleServiceClick = (serviceName: string) => {
    toast(t('toast.service_view'), {
      description: `${t('toast.service_selected')}: ${serviceName}`,
    });
  };

  return (
    <section className="bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">

        <div className="text-center pb-[30px]">
          <Animable>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white section-title">
              {t('services_title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('services_subtitle')}
            </p>
          </Animable>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-[30px] gap-2">
          {/* Service Cards */}
          <Animable index={1} className={'p-4 bg-card rounded-xl transition-all duration-300 hover:shadow-xl'}>
            <div className="group  animate-fade-up">
            <Tag className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-navy-dark dark:text-white"> {t('service_offers_title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t('service_offers_description')}</p>
              <Link to="/services/offers" onClick={() => handleServiceClick("Специальные предложения")}>
                <Button variant="ghost" className="text-navy-dark dark:text-white group-hover:text-emerald-600">
                  {t('learn_more_about')} <ArrowRight className=" w-auto h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </Animable>
          <Animable index={2} className={'p-4 bg-card rounded-xl transition-all duration-300 hover:shadow-xl'}>
          <div className="group animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Package className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-navy-dark dark:text-white">{t('service_design_title')}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{t('service_design_description')}</p>
            <Link to="/services/design" onClick={() => handleServiceClick("Индивидуальный дизайн")}>
              <Button variant="ghost" className="text-navy-dark dark:text-white group-hover:text-emerald-600">
                {t('learn_more_about')} <ArrowRight className="w-auto h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          </Animable>
          <Animable index={3} className={'p-4 bg-card rounded-xl transition-all duration-300 hover:shadow-xl'}>
          <div className="group animate-fade-up">
            <CheckCircle className="w-12 h-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-navy-dark dark:text-white">{t('service_warranty_title')}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{t('service_warranty_description')}</p>
            <Link to="/services/warranty" onClick={() => handleServiceClick("Гарантия качества")}>
              <Button variant="ghost" className="text-navy-dark dark:text-white group-hover:text-emerald-600">
                {t('learn_more_about')} <ArrowRight className="w-auto h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          </Animable>
        </div>



      </div>
    </section>
  );
};

export default ServicesSection;
