import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n/context';
import Catalog from "@/pages/Catalog.tsx";
import Partners from "@/components/Partners.tsx";

import Seo from "@/components/Seo";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

const Index = () => {
    const { t } = useLanguage();

    return (
        <>
            <Seo
                title={t("seo_title")}
                description={t("seo_description")}
                keywords={t("meta_keywords")}
                url="https://mebelcity.uz"
                image="https://mebelcity.uz/assets/images/google/nabor-tables.webp"  // 👈 add preview image
                schemaType="WebSite"
            >
                {/* ✅ JSON-LD Organization Schema */}
                <OrganizationSchema />

                {/* ✅ JSON-LD Breadcrumb Schema */}
                <BreadcrumbSchema
                    items={[
                        { name: "Главная", url: "https://mebelcity.uz" },
                    ]}
                />

                {/* ✅ JSON-LD WebSite Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "url": "https://mebelcity.uz",
                        "name": "MebelCity",
                        "description": t("seo_description"),
                        "publisher": {
                            "@type": "Organization",
                            "name": "MebelCity",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://mebelcity.uz/assets/images/logos/qora2.png"
                            }
                        },
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://mebelcity.uz/search?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "MebelCity",
                        "url": "https://mebelcity.uz",
                        "logo": "https://mebelcity.uz/assets/images/logos/qora2.png",
                        "image": [
                            "https://mebelcity.uz/assets/images/google/catalog-table.webp",
                            "https://mebelcity.uz/assets/images/google/knijniy.webp",
                            "https://mebelcity.uz/assets/images/google/loft-table.webp",
                            "https://mebelcity.uz/assets/images/google/knijniy-loft.webp",
                            "https://mebelcity.uz/assets/images/google/nabor-tables.webp",
                        ],
                        "sameAs": [
                            "https://www.facebook.com/mebelcity",
                            "https://www.instagram.com/mebelcity",
                            "https://t.me/mebelcity"
                        ]
                    })}
                </script>
            </Seo>

            <div className="h-screen flex flex-col bg-white dark:bg-navy-dark transition-colors duration-300">
                <Navbar />
                <main>
                    <Hero />
                    <Catalog home={true} />
                    <ServicesSection />
                    <Partners />
                    <AboutSection />

                </main>
                <Footer />
            </div>
        </>
    );
};

export default Index;
