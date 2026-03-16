
import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Plus, Minus, Heart, Share2 } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { useLanguage } from '@/lib/i18n/context';
import { useCart } from '@/contexts/CartContext';
import {useStore} from "@/store";
import {imageUrl} from "@/axios";
import LupaZoom from "@/components/LupaZoom.tsx";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  slug: string;
  detailedDescription?: string;
  specifications?: Record<string, string>;
  materials?: string[];
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  colors?: string[];
}

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const getProducts = useStore((store) => store.getProducts);
  const products = useStore((store) => store.state.products);

  useEffect(() => {
    getProducts()
  }, [getProducts, language])

  const product = products.find(p => p.id.toString() == slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-navy-dark">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-dark dark:text-white">Товар не найден</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Извините, запрашиваемый товар не существует или был удален.
            </p>
            <Button className="mt-6 bg-wood hover:bg-wood-dark text-white" asChild>
              <a href="/catalog">Вернуться в каталог</a>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity(q => q + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };

  const handleAddToCart = () => {
    addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product?.images[0],
        slug: product.id.toString(),
    });
  };

  const handleAddToFavorites = () => {
    toast("Добавлено в избранное", {
      description: `${product.name} добавлен в избранное`,
    });
  };

  const handleShare = () => {
    toast("Ссылка скопирована", {
      description: "Теперь вы можете поделиться товаром с друзьями",
    });
  };

  function stripHtml(html: string): string {
    return html?.replace(/<[^>]+>/g, '')?.replace(/\s+/g, ' ').trim()
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - MebelCity</title>
        <meta name="description" content={stripHtml(product.description)} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white dark:bg-navy-dark transition-colors duration-300">
        <Navbar />
        {
            products.length > 0 &&
              <>
                <main className="flex-grow pt-6">
                  <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-[800px]:gap-12 gap-1">
                      <div className={'hidden min-[800px]:flex'}>
                        <LupaZoom src={`${imageUrl}/${product.images[0]}`} zoomScale={5}/>
                      </div>
                      <div className={'flex min-[800px]:hidden'}>
                        <img src={`${imageUrl}/${product.images[0]}`} alt="mebel" />
                      </div>

                      <div className="">
                        <div>
                          <h1 className=" min-[800px]:text-3xl text-2xl font-bold text-navy-dark dark:text-white">{product.name }</h1>
                          <p
                              className="mt-4 text-lg text-gray-600 dark:text-gray-300"
                              dangerouslySetInnerHTML={{ __html: product.description }}
                          ></p>
                          <div className="mt-6 flex sm:flex-row flex-col items-start xl:items-center gap-7">
                            <span className="text-2xl text-nowrap font-bold text-navy-dark dark:text-white">{product.price}</span>
                            <div className={'flex flex-wrap gap-3 items-center'}>
                              <div className="flex items-center flex-grow">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={decreaseQuantity}
                                    disabled={quantity === 1}
                                    className="border-gray-300 dark:border-gray-600"
                                >
                                  <Minus size={16} />
                                </Button>
                                <span className="w-10 text-center font-medium text-navy-dark dark:text-white">
                        {quantity}
                      </span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={increaseQuantity}
                                    className="border-gray-300 dark:border-gray-600"
                                >
                                  <Plus size={16} />
                                </Button>

                              </div>

                              <Button
                                  className="bg-wood ml-5 hover:bg-wood-dark text-white px-2 py-2 "
                                  size="custom"
                                  onClick={handleAddToCart}
                              >
                                Добавить в корзину
                              </Button>

                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </main>

                <Footer />
              </>
        }


      </div>
    </>
  );
};

export default ProductDetail;
