interface ProductSchemaProps {
    name: string;
    description: string;
    sku: string;
    image: string;
    price: string;
    currency: string;
    url: string;
}

const ProductSchema = ({ name, description, sku, image, price, currency, url }: ProductSchemaProps) => {
    const schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name,
        image: [image],
        description,
        sku,
        offers: {
            "@type": "Offer",
            url,
            priceCurrency: currency,
            price,
            availability: "https://schema.org/InStock"
        }
    };

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

export default ProductSchema;
