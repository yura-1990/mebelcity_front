import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {Package, ArrowRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import {toast} from '@/components/ui/sonner';

const ServiceDesign = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const clear = setTimeout(() => setLoading(true), 500)

        return () => clearTimeout(clear);
    }, [])

    const handleDesignRequest = () => {
        toast("Заявка отправлена", {
            description: "Наш дизайнер свяжется с вами для консультации",
        });
    };

    return (
        <>
            <Helmet>
                <title>Индивидуальный дизайн - MebelCity</title>
                <meta name="description"
                      content="Разработка уникальных мебельных решений под ваши потребности и корпоративный стиль"/>
            </Helmet>
            <div className="min-h-screen flex flex-col bg-white dark:bg-navy-dark">
                <Navbar/>
                {
                    loading ? <>
                            <main className="flex-grow pt-24">
                                <div className="container 2xl:px-0 xl:px-[150px] mx-auto px-4 py-12">
                                    <div className=" mx-auto">
                                        <h1 className="text-4xl font-bold text-navy-dark dark:text-white mb-6">Индивидуальный
                                            дизайн</h1>
                                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                                            Разработка уникальных решений под ваши потребности и корпоративный стиль. Наши
                                            дизайнеры создадут мебель, которая идеально впишется в ваше пространство и
                                            подчеркнет индивидуальность интерьера.
                                        </p>

                                        <div className="flex items-center mb-8">
                                            <Package className="w-12 h-12 text-blue-600 mr-4"/>
                                            <h2 className="text-2xl font-semibold text-navy-dark dark:text-white">Этапы
                                                создания индивидуальной мебели</h2>
                                        </div>

                                        <div className="space-y-8 mb-12">
                                            {[
                                                {
                                                    step: "01",
                                                    title: "Консультация и планирование",
                                                    description: "Первая встреча с нашим дизайнером, обсуждение ваших потребностей, предпочтений и бюджета. Анализ пространства и функциональных требований."
                                                },
                                                {
                                                    step: "02",
                                                    title: "Разработка концепции",
                                                    description: "Создание эскизов и 3D-моделей будущей мебели. Подбор материалов, цветовой гаммы и фурнитуры. Представление нескольких вариантов дизайна на выбор."
                                                },
                                                {
                                                    step: "03",
                                                    title: "Утверждение проекта",
                                                    description: "Обсуждение предложенных вариантов, внесение корректировок и окончательное утверждение дизайна, материалов и сроков изготовления."
                                                },
                                                {
                                                    step: "04",
                                                    title: "Производство и установка",
                                                    description: "Изготовление мебели на нашем современном производстве. Контроль качества на всех этапах. Доставка и профессиональная установка готовой мебели."
                                                }
                                            ].map((item, index) => (
                                                <div key={index} className="flex gap-6">
                                                    <div
                                                        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                                        {item.step}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-navy-dark dark:text-white mb-2">{item.title}</h3>
                                                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                                                        {/*{index < 3 && <ArrowRight className="text-blue-600 mt-4 ml-auto" />}*/}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <Separator className="my-12 dark:bg-gray-700"/>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                            <div>
                                                <h2 className="text-2xl font-semibold text-navy-dark dark:text-white mb-6">Наши
                                                    возможности</h2>
                                                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                                    <li className="flex hover:text-blue-600 items-center gap-2">
                                                        <span
                                                            className="w-2 h-2 bg-wood hover:text-blue-600 rounded-full"></span>
                                                        <span className={'hover:text-blue-600'}>Мебель любой сложности и конфигурации</span>
                                                    </li>
                                                    <li className="flex hover:text-blue-600 items-center gap-2">
                                                        <span
                                                            className="w-2 h-2 bg-wood hover:text-blue-600 rounded-full"></span>
                                                        <span className={'hover:text-blue-600'}>Широкий выбор материалов и фурнитуры</span>
                                                    </li>
                                                    <li className="flex hover:text-blue-600 items-center gap-2">
                                                        <span
                                                            className="w-2 h-2 bg-wood hover:text-blue-600 rounded-full"></span>
                                                        <span className={'hover:text-blue-600'}>Интеграция вашего корпоративного стиля</span>
                                                    </li>
                                                    <li className="flex hover:text-blue-600 items-center gap-2">
                                                        <span
                                                            className="w-2 h-2 bg-wood hover:text-blue-600 rounded-full"></span>
                                                        <span className={'hover:text-blue-600'}>Эргономичные решения для максимального комфорта</span>
                                                    </li>
                                                    <li className="flex hover:text-blue-600 items-center gap-2">
                                                        <span
                                                            className="w-2 h-2 bg-wood hover:text-blue-600 rounded-full"></span>
                                                        <span className={'hover:text-blue-600'}>Функциональная мебель для оптимизации пространства</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/*<div>*/}
                                            {/*  <h2 className="text-2xl font-semibold text-navy-dark dark:text-white mb-6">Типы проектов</h2>*/}
                                            {/*  <ul className="space-y-3 text-gray-600 dark:text-gray-300">*/}
                                            {/*    <li className="flex items-center gap-2">*/}
                                            {/*      <span className="w-2 h-2 bg-wood rounded-full"></span>*/}
                                            {/*      <span>Офисные помещения любого масштаба</span>*/}
                                            {/*    </li>*/}
                                            {/*    <li className="flex items-center gap-2">*/}
                                            {/*      <span className="w-2 h-2 bg-wood rounded-full"></span>*/}
                                            {/*      <span>Гостиницы и рестораны</span>*/}
                                            {/*    </li>*/}
                                            {/*    <li className="flex items-center gap-2">*/}
                                            {/*      <span className="w-2 h-2 bg-wood rounded-full"></span>*/}
                                            {/*      <span>Торговое оборудование</span>*/}
                                            {/*    </li>*/}
                                            {/*    <li className="flex items-center gap-2">*/}
                                            {/*      <span className="w-2 h-2 bg-wood rounded-full"></span>*/}
                                            {/*      <span>Жилые интерьеры премиум-класса</span>*/}
                                            {/*    </li>*/}
                                            {/*    <li className="flex items-center gap-2">*/}
                                            {/*      <span className="w-2 h-2 bg-wood rounded-full"></span>*/}
                                            {/*      <span>Общественные пространства</span>*/}
                                            {/*    </li>*/}
                                            {/*  </ul>*/}
                                            {/*</div>*/}
                                        </div>

                                        {/*<div className="text-center mt-12">*/}
                                        {/*  <Button onClick={handleDesignRequest} size="lg" className="bg-wood hover:bg-wood-dark text-white">*/}
                                        {/*    Заказать индивидуальный дизайн*/}
                                        {/*  </Button>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </main>
                            <Footer/>
                        </>
                        : <div role="status" className={'h-[60vh] flex items-center justify-center'}>
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

export default ServiceDesign;
