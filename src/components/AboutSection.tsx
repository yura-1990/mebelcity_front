
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import about from '../assets/images/about/about.jpeg'
import Animable from "@/components/Animable.tsx";
import {useLanguage} from "@/lib/i18n/context.tsx";
import Seo from "@/components/Seo";

export const features = [
  {
    title: "feature_quality_title",
    description: "feature_quality_desc",
  },
  {
    title: "feature_design_title",
    description: "feature_design_desc",
  },
  {
    title: "feature_delivery_title",
    description: "feature_delivery_desc",
  },
  {
    title: "feature_warranty_title",
    description: "feature_warranty_desc",
  },
];

const AboutSection = () => {
  const { t } = useLanguage();
  return (
      <div className="relative min-h-screen w-full">

      <div className="container min-h-[100vh] relative flex items-center justify-center mx-auto">
        <div className="absolute inset-1 overflow-hidden top-[30px] rounded-2xl">
            <img 
              src={about} 
              alt="О компании MebelCity" 
              className="w-full h-full object-cover"
              style={{ objectPosition: 'bottom' }}
              width="1920"
              height="1080"
              loading="lazy" 
            />
        </div>

        <div className="relative z-10 container w-full mx-auto px-3 h-full flex flex-col items-center justify-center">

          <div className="animate-fade-up order-2 lg:order-1">
            <Animable className={'mb-5 w-full xl:w-[60%] mx-auto'}>
              <h2 className="text-white text-start text-shadow text-3xl sm:text-[50px] md:text-[30px] lg:text-4xl font-bold leading-tight mb-6">
                {t('about_title')}
              </h2>
              <p className="text-white text-shadow text-justify sm:text-2xl leading-5  md:text-xl mb-8">
                {t('about_intro_about')}
              </p>
              <p className="text-white text-shadow text-justify sm:text-2xl leading-5  md:text-xl mb-8">
                {t('about_mission')}
              </p>
            </Animable>
          </div>
        </div>
      </div>
      <div className={'container mx-auto px-4 my-5'}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {features.map((feature, index) => (
              <Animable index={index + 1} key={index} className={'h-full dark:border-navy/50 bg-card p-6 rounded-xl shadow-sm border border-gray-100'}>
                <FeatureCard key={index} feature={feature} index={index} />
              </Animable>
          ))}
        </div>
      </div>

    </div>
  );
};

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
  };
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const { t } = useLanguage();
  return (
    <div 
      className={cn(
        "h-full",
        "animate-fade-up transition-all duration-300",
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CheckCircle className="h-10 w-10 text-emerald-600 mb-4" />
      <h3 className="text-lg font-semibold text-navy-dark dark:text-white mb-2">{t(feature.title)}</h3>
      <p className="text-gray-600 dark:text-gray-300">{t(feature.description)}</p>
    </div>
  );
};

export default AboutSection;
