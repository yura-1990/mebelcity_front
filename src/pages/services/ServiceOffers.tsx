import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {Tag, CheckCircle} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Link} from 'react-router-dom';
import {toast} from '@/components/ui/sonner';

const ServiceOffers = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const clear = setTimeout(() => setLoading(true), 500)

        return () => clearTimeout(clear);
    }, [])

    const handleContactRequest = () => {
        toast("Заявка отправлена", {
            description: "Наш менеджер свяжется с вами для обсуждения специальных предложений",
        });
    };

    return (
        <>
            <Helmet>
                <title>Специальные предложения - MebelCity</title>
                <meta name="description"
                      content="Эксклюзивные скидки и специальные предложения для корпоративных клиентов от MebelCity"/>
            </Helmet>

            <div className="min-h-screen flex flex-col bg-white dark:bg-navy-dark shadow-lg">
                <Navbar/>
                {
                    loading ? <>
                            <main className="flex-grow pt-[50px]">
                                <div className="container mx-auto px-4 py-12">
                                    <div className=" mx-auto">
                                        <h1 className="min-[1600px]:text-4xl xl:text-4xl text-2xl font-bold text-navy-dark dark:text-white mb-3">Специальные предложения</h1>
                                        <p className="min-[1600px]:text-2xl xl:text-xl text-md font-semibold text-gray-600 dark:text-gray-300 mb-8 ">
                                            Эксклюзивные скидки для корпоративных клиентов при заказе комплексного оснащения
                                            офиса
                                            или больших
                                            объемов мебели для любых помещений.
                                        </p>

                                        <div className="flex items-center mb-5">
                                            <Tag className="w-12 h-12 text-blue-600 mr-4"/>
                                            <h2 className="min-[1600px]:text-3xl text-xl 2xl:text-xl xl:text-3xl font-semibold text-navy-dark  dark:text-white">Преимущества
                                                корпоративных предложений</h2>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                            {[
                                                {
                                                    "title": "Индивидуальные скидки",
                                                    "description": "Размер скидки зависит от объёма заказа и может достигать 15% от розничной цены."
                                                },
                                                {
                                                    "title": "Бесплатная доставка",
                                                    "description": "При заказе на определённую сумму доставка и сборка мебели осуществляется бесплатно по городу Ташкенту."
                                                },
                                                {
                                                    "title": "Гарантийное обслуживание",
                                                    "description": "Расширенная гарантия для корпоративных клиентов — до 1 лет на всю мебель."
                                                },
                                                {
                                                    "title": "Индивидуальные условия оплаты",
                                                    "description": "Возможна рассрочка, отсрочка платежа или поэтапная оплата."
                                                }
                                            ].map((item, index) => (
                                                <div key={index} className="flex p-6 bg-gray-50 dark:bg-navy/30 rounded-xl">
                                                    <CheckCircle
                                                        className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1 text-xl"/>
                                                    <div>
                                                        <h3 className="font-bold text-xl text-navy-dark dark:text-white xl:text-2xl  mb-2">{item.title}</h3>
                                                        <p className="text-gray-600 text-lg font-semibold dark:text-gray-300  min-[1600px]:text-xl">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/*<h2 className="text-2xl font-semibold text-navy-dark dark:text-white mb-6">Текущие акции</h2>*/}
                                        {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">*/}
                                        {/*  {[*/}
                                        {/*    {*/}
                                        {/*      title: "Комплект офисной мебели",*/}
                                        {/*      description: "При заказе полного комплекта офисной мебели скидка 15%",*/}
                                        {/*      discount: "-15%"*/}
                                        {/*    },*/}
                                        {/*    {*/}
                                        {/*      title: "Стулья оптом",*/}
                                        {/*      description: "При заказе от 10 офисных стульев скидка 20%",*/}
                                        {/*      discount: "-20%"*/}
                                        {/*    },*/}
                                        {/*    {*/}
                                        {/*      title: "Мебель для гостиниц",*/}
                                        {/*      description: "Специальное предложение для гостиничного бизнеса",*/}
                                        {/*      discount: "Спец. цена"*/}
                                        {/*    },*/}
                                        {/*  ].map((item, index) => (*/}
                                        {/*    <Card key={index} className="overflow-hidden">*/}
                                        {/*      <div className="absolute top-4 right-4 bg-wood text-white px-3 py-1 rounded-full text-sm font-bold">*/}
                                        {/*        {item.discount}*/}
                                        {/*      </div>*/}
                                        {/*      <CardHeader>*/}
                                        {/*        <CardTitle className="text-navy-dark dark:text-white">{item.title}</CardTitle>*/}
                                        {/*        <CardDescription className="dark:text-gray-400">{item.description}</CardDescription>*/}
                                        {/*      </CardHeader>*/}
                                        {/*      <CardContent>*/}
                                        {/*        <Button */}
                                        {/*          variant="outline" */}
                                        {/*          className="w-full text-wood hover:bg-wood hover:text-white dark:border-wood" */}
                                        {/*          onClick={handleContactRequest}*/}
                                        {/*        >*/}
                                        {/*          Запросить предложение*/}
                                        {/*        </Button>*/}
                                        {/*      </CardContent>*/}
                                        {/*    </Card>*/}
                                        {/*  ))}*/}
                                        {/*</div>*/}

                                        {/*<div className="text-center mt-12">*/}
                                        {/*  <Button onClick={handleContactRequest} size="lg" className="bg-wood hover:bg-wood-dark text-white">*/}
                                        {/*    Получить индивидуальное предложение*/}
                                        {/*  </Button>*/}
                                        {/*  <p className="mt-4 text-gray-500 dark:text-gray-400">*/}
                                        {/*    Или <Link to="/contact" className="text-wood hover:underline">свяжитесь с нами</Link> для получения более подробной информации*/}
                                        {/*  </p>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </main>
                            <Footer/>
                        </>

                        : <div role="status" className={'h-[62vh] flex items-center justify-center'}>
                            <div>
                                <svg aria-hidden="true"
                                     className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                }

            </div>


        </>
    );
};

export default ServiceOffers;
