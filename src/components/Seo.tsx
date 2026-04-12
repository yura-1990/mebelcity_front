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
  const canonicalUrl = url || `${SITE_URL}/`;
  const ogImage = image || DEFAULT_IMAGE;
  const robotsContent = noindex ? "noindex, nofollow" : "index, follow";

  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        {keywords ? <meta name="keywords" content={keywords} /> : null}
        <meta name="robots" content={robotsContent} />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={SITE_NAME} />

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