interface ListItem {
  name: string;
  url: string;
  image?: string;
  description?: string;
}

interface ItemListSchemaProps {
  name: string;
  description?: string;
  items: ListItem[];
}

const ItemListSchema = ({ name, description, items }: ItemListSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
      image: item.image,
      description: item.description,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ItemListSchema;
