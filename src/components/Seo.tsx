import { Helmet } from "react-helmet-async";

interface SeoProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    schemaType?: "WebSite" | "WebPage" | "Product" | "ProductCollection";
    children?: React.ReactNode;
}

const Seo = ({
                 title,
                 description,
                 keywords,
                 image,
                 url,
                 schemaType = "WebPage",
                 children
             }: SeoProps) => {
    const defaultUrl = "https://mebelcity.uz";
    const defaultImage = "https://mebelcity.uz/assets/images/google/loft-table.webp";
    const canonicalUrl = url || defaultUrl;
    const ogImage = image || defaultImage;

    // JSON-LD Schema
    const schema = {
        "@context": "https://schema.org",
        "@type": schemaType,
        "name": title,
        "description": description,
        "url": canonicalUrl,
        "image": ogImage,
    };

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                {keywords && <meta name="keywords" content={keywords} />}

                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage} />

                {/* Indexing */}
                <meta name="robots" content="index, follow" />

                {/* Verification */}
                <meta name="yandex-verification" content="verification_token" />
                <meta name="google-site-verification" content="verification_token" />

                {/* Canonical */}
                <link rel="canonical" href={canonicalUrl} />

                {/* Structured Data */}
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            </Helmet>

            {/* Extra JSON-LD from pages (products, org info, etc.) */}
            {children}
        </>
    );
};

export default Seo;
