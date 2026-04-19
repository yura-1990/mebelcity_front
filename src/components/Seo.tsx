import { Helmet } from "react-helmet-async";

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
  // Use the provided url directly — each page must pass its own canonical URL
  const canonicalUrl = url ? (url.startsWith("http") ? url : `${SITE_URL}${url}`) : SITE_URL;
  const ogImage = image || DEFAULT_IMAGE;
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  return (
    <>
      <Helmet>
        <html lang="ru" />
        <title>{title}</title>

        <meta name="description" content={description} />
        {keywords ? <meta name="keywords" content={keywords} /> : null}
        <meta name="robots" content={robotsContent} />
        <meta name="author" content="MebelCity" />

        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="ru" href={canonicalUrl} />
        <link rel="alternate" hrefLang="uz" href={canonicalUrl.replace(SITE_URL, `${SITE_URL}/uz`)} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="ru_RU" />

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