const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "MebelCity",
        alternateName: "МебельСити",
        url: "https://mebelcity.uz",
        logo: "https://mebelcity.uz/assets/images/logos/qora2.png",
        image: "https://mebelcity.uz/assets/images/google/nabor-tables.webp",
        description: "MebelCity — ведущий производитель и поставщик офисной мебели в Ташкенте и Узбекистане. Офисные столы, шкафы, кресла и комплекты мебели.",
        foundingDate: "2010",
        foundingLocation: {
            "@type": "Place",
            name: "Ташкент, Узбекистан"
        },
        address: {
            "@type": "PostalAddress",
            streetAddress: "Xorazmiy ko'chasi, 82 uy, Nazrbek",
            addressLocality: "Ташкент",
            addressRegion: "Toshkent viloyati",
            postalCode: "100000",
            addressCountry: "UZ"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 41.312245,
            longitude: 69.130527
        },
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: "+998-90-183-22-33",
                contactType: "customer service",
                areaServed: "UZ",
                availableLanguage: ["ru", "uz"]
            }
        ],
        areaServed: {
            "@type": "Country",
            name: "Узбекистан"
        },
        sameAs: [
            "https://www.facebook.com/mebelcity.uz",
            "https://www.instagram.com/mebelcity.uz"
        ]
    };

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    );
};

export default OrganizationSchema;
