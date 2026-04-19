import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import Catalog from "@/pages/Catalog";
import Seo from "@/components/Seo";
import SeoContent from "@/components/SeoContent";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import { useLanguage } from "@/lib/i18n/context";
import WebsiteSchema from "@/components/schema/WebsiteSchema";

const Index = () => {
  const { t } = useLanguage();

  return (
    <>
      <Seo
        title={t("seo_title")}
        description={t("seo_description")}
        keywords={t("meta_keywords")}
        url="https://mebelcity.uz/"
        image="https://mebelcity.uz/assets/images/google/nabor-tables.webp"
        ogType="website"
      >
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
        <BreadcrumbSchema
          items={[
            { name: "Главная", url: "https://mebelcity.uz/" },
          ]}
        />
      </Seo>

      <div className="h-screen flex flex-col bg-background transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Catalog home={true} />
          <ServicesSection />
          <SeoContent />
          <Partners />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;