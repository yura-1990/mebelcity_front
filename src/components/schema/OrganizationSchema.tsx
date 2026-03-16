const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "MebelCity",
        url: "https://mebelcity.uz",
        logo: "https://mebelcity.uz/assets/images/logos/qora2.png",
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: "+998-90-183-22-33",
                contactType: "customer service",
                areaServed: "UZ",
                availableLanguage: ["ru", "uz"]
            }
        ],
        sameAs: [
            "https://facebook.com/mebelcity",
            "https://instagram.com/mebelcity"
        ]
    };

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    );
};

export default OrganizationSchema;
