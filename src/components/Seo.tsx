import { Helmet } from "react-helmet-async";
import { useLanguage } from '@/lib/i18n/context';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  keywords?: string;
  ogType?: "website" | "article" | "product";
  noindex?: boolean;
  children?: React.ReactNode;
}

const SITE_URL = "https://mebelcity.uz";
const DEFAULT_IMAGE = "https://mebelcity.uz/assets/images/google/loft-table.webp";
const SITE_NAME = "MebelCity";

const Seo = ({
  title,
  description,
  image,
  url,
  keywords,
  ogType = "website",
  noindex = false,
  children,
}: SeoProps) => {
  const { language } = useLanguage();
  const canonicalUrl = url ? (url.startsWith("http") ? url : `${SITE_URL}${url}`) : SITE_URL;
  const ogImage = image || DEFAULT_IMAGE;
  const robotsContent = noindex
    ? "noindex, nofollow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  // Uzbek alternate uses query param since there is no /uz/ subdirectory
  const uzAlternate = `${canonicalUrl}${canonicalUrl.includes('?') ? '&' : '?'}lang=uz`;

  return (
    <>
      <Helmet>
        <html lang={language || "ru"} />
        <title>{title}</title>

        <meta name="description" content={description} />
        {keywords ? <meta name="keywords" content={keywords} /> : null}
        <meta name="robots" content={robotsContent} />
        <meta name="author" content="MebelCity" />

        {/* Geo tags — key for local Tashkent/Uzbekistan ranking */}
        <meta name="geo.region" content="UZ-TK" />
        <meta name="geo.placename" content="Ташкент, Узбекистан" />
        <meta name="geo.position" content="41.312245;69.130527" />
        <meta name="ICBM" content="41.312245, 69.130527" />

        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="ru" href={canonicalUrl} />
        <link rel="alternate" hrefLang="uz" href={uzAlternate} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content={language === 'uz' ? 'uz_UZ' : 'ru_RU'} />
        <meta property="og:locale:alternate" content={language === 'uz' ? 'ru_RU' : 'uz_UZ'} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      {children}
    </>
  );
};

export default Seo;