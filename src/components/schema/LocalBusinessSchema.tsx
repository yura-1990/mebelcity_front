const LocalBusinessSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FurnitureStore",
        name: "MebelCity",
        alternateName: "МебельСити",
        url: "https://mebelcity.uz",
        logo: "https://mebelcity.uz/assets/images/logos/qora2.png",
        image: "https://mebelcity.uz/assets/images/google/nabor-tables.webp",
        description: "MebelCity — производитель и поставщик офисной мебели в Ташкенте. Офисные столы, шкафы, комплекты мебели с доставкой по Узбекистану.",
        telephone: "+998-90-183-22-33",
        email: "umarovrassel@gmail.com",
        priceRange: "$$",
        currenciesAccepted: "UZS",
        paymentAccepted: "Cash, Card, Bank Transfer",
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
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "10:00",
                closes: "17:00"
            }
        ],
        areaServed: [
            {
                "@type": "City",
                name: "Ташкент"
            },
            {
                "@type": "Country",
                name: "Узбекистан"
            }
        ],
        sameAs: [
            "https://www.facebook.com/mebelcity.uz",
            "https://www.instagram.com/mebelcity.uz"
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Каталог офисной мебели",
            itemListElement: [
                {
                    "@type": "OfferCatalog",
                    name: "Офисные столы",
                    url: "https://mebelcity.uz/ofisnaya-mebel"
                },
                {
                    "@type": "OfferCatalog",
                    name: "Офисные шкафы",
                    url: "https://mebelcity.uz/ofisnaya-mebel"
                },
                {
                    "@type": "OfferCatalog",
                    name: "Комплекты офисной мебели",
                    url: "https://mebelcity.uz/ofisnaya-mebel"
                }
            ]
        }
    };

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    );
};

export default LocalBusinessSchema;
