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
import { useStore } from "@/store";
import { useEffect } from "react";
import FaqSchema from "@/components/schema/FaqSchema";

const STORAGE_URL = 'https://adminpanel.mebelcity.uz/storage';

const Index = () => {
  const { t, language } = useLanguage();
  const getSeos = useStore((store) => store.getSeos);
  const seos = useStore((store) => store.state.seos);

  useEffect(() => {
    getSeos();
  }, [getSeos, language]);

  const seo = seos.find((s) => s.page === 'home');
  const title = seo?.title || t("seo_title");
  const description = seo?.description || t("seo_description");
  const keywords = seo?.keywords || t("meta_keywords");
  const ogImage = seo?.og_image ? `${STORAGE_URL}/${seo.og_image}` : "https://mebelcity.uz/assets/images/google/nabor-tables.webp";

  return (
    <>
      <Seo
        title={title}
        description={description}
        keywords={keywords}
        url="https://mebelcity.uz/"
        image={ogImage}
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
        <FaqSchema
          faqs={
            language === 'uz'
              ? [
                  { question: "MebelCity'da mebel qanday buyurtma qilinadi?", answer: "Telefon orqali (+998 90 183 22 33) yoki saytdagi forma orqali bog'laning. Bepul maslahat va o'lchov olish uchun mutaxassisimiz siz bilan bog'lanadi." },
                  { question: "Mebel yetkazib berish qancha turadi?", answer: "Toshkent bo'ylab yetkazib berish bepul. O'zbekistonning boshqa shaharlariga yetkazib berish narxi individual hisoblanadi." },
                  { question: "Ofis mebellariga kafolat bormi?", answer: "Ha, barcha mahsulotlarimizga 1 yillik kafolat beriladi. Ishlab chiqarish nuqsonlari bepul tuzatiladi." },
                  { question: "Maxsus o'lchamlarda mebel buyurtma qilish mumkinmi?", answer: "Ha, biz individual o'lchamlarda va dizaynlarda mebel tayyorlaymiz. Mutaxassisimiz siz bilan bog'lanib, barcha tafsilotlarni muhokama qiladi." },
                  { question: "To'lov qanday amalga oshiriladi?", answer: "Naqd pul, bank kartasi yoki bank o'tkazmasi orqali to'lash mumkin. Katta buyurtmalar uchun bo'lib to'lash imkoniyati mavjud." },
                ]
              : [
                  { question: "Как заказать мебель в MebelCity?", answer: "Свяжитесь с нами по телефону +998 90 183 22 33 или через форму на сайте. Наш специалист свяжется с вами для бесплатной консультации и замера." },
                  { question: "Сколько стоит доставка мебели?", answer: "Доставка по Ташкенту — бесплатно. В другие города Узбекистана стоимость рассчитывается индивидуально в зависимости от объёма." },
                  { question: "Есть ли гарантия на офисную мебель?", answer: "Да, на всю нашу продукцию предоставляется гарантия 1 год. Производственные дефекты устраняются бесплатно." },
                  { question: "Можно ли заказать мебель по индивидуальным размерам?", answer: "Да, мы изготавливаем мебель по индивидуальным размерам и дизайну. Наш специалист свяжется с вами для обсуждения всех деталей." },
                  { question: "Какие способы оплаты доступны?", answer: "Принимаем оплату наличными, банковской картой и банковским переводом. Для крупных заказов доступна рассрочка." },
                ]
          }
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