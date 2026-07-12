import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const MotionLink = motion.create(Link);
import homeImage from '../assets/images/home/hom3.jpg'
import { useLanguage } from "@/lib/i18n/context.tsx";


const Hero = () => {
    const { t } = useLanguage();
    return (
        <div className="relative bg-navy-dark h-screen w-full">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-80 overflow-hidden">
                <img
                    src={homeImage}
                    alt="Офисная мебель MebelCity — современный интерьер офиса"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '75% 75%' }}
                    width="1920"
                    height="1080"
                    {...{ fetchpriority: "high" } as any}
                    decoding="async"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container w-full mx-auto px-3 h-full flex flex-col justify-center">
                <motion.div
                    initial={{ y: '10vh', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: 'tween',
                        duration: 0.9,
                        delay: 0.2
                    }}
                    className="max-w-3xl bg-custom-1 mx-auto w-full text-center sm:text-start"
                >
                    <h1 className="text-white text-shadow text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
                        dangerouslySetInnerHTML={{ __html: t('hero_title') }}
                    ></h1>
                    <p className="text-white text-shadow text-lg sm:text-xl md:text-2xl mb-8 opacity-90"
                        dangerouslySetInnerHTML={{ __html: t('hero_description') }}
                    ></p>
                    <div className="flex flex-wrap flex-row gap-4">
                        <Button
                            size={'custom'}
                            className="bg-wood w-auto text-white cta-button py-2 px-2 md:px-8"
                            asChild
                        >
                            <MotionLink
                                to="/ofisnaya-mebel"
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 1,   // very stiff = quick spring
                                    damping: 8,        // low damping = more bounce
                                    mass: 0,         // small mass = faster
                                    duration: 0      // optional — framer ignores this with spring, but useful fallback
                                }}
                                className="inline-block text-white dark:text-white font-bold text-2xl"
                            >
                                {t('view_catalog')}
                            </MotionLink>
                        </Button>
                        <Button
                            size={'custom'}
                            variant="outline"
                            className="border-white w-auto !bg-white fw-bold text-back/70 hover:bg-white/10 py-2 cta-button px-2 md:px-8"
                            asChild
                        >
                            <MotionLink
                                to="/contact"
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 1,   // very stiff = quick spring
                                    damping: 8,        // low damping = more bounce
                                    mass: 0,         // small mass = faster
                                    duration: 0      // optional — framer ignores this with spring, but useful fallback
                                }}
                                className="md:text-[16px] text-[14px] !text-[#047857]"
                            >
                                {t('contact_us')}
                            </MotionLink>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-5 w-full flex items-center justify-center animate-bounce" aria-hidden="true">
                <svg width="50" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;
