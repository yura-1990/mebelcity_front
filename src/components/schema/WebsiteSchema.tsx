const WebsiteSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "MebelCity",
        url: "https://mebelcity.uz/",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://mebelcity.uz/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(schema)}
        </script>
    );
};

export default WebsiteSchema;