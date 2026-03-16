import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {CheckCircle, AlertTriangle, HelpCircle} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {toast} from '@/components/ui/sonner';

const ServiceWarranty = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const clear = setTimeout(() => setLoading(true), 500)

        return () => clearTimeout(clear);
    }, [])


    const handleWarrantyRequest = () => {
        toast("Заявка отправлена", {
            description: "Наш специалист свяжется с вами для решения гарантийного случая",
        });
    };

    return (
        <>
            <Helmet>
                <title>Гарантия качества - MebelCity</title>
                <meta name="description"
                      content="1 год гарантии на всю офисную мебель и бесплатное сервисное обслуживание от MebelCity"/>
            </Helmet>

            <div className="min-h-screen flex flex-col bg-white dark:bg-navy-dark">
                <Navbar/>
                {
                    loading ? <>
                            <main className="flex-grow pt-10">
                                <div className="container mx-auto px-4 py-12">
                                    <div className=" mx-auto">
                                        <h1 className="min-[1600px]:text-4xl xl:text-4xl text-2xl font-bold text-navy-dark dark:text-white mb-3">Гарантия
                                            качества</h1>
                                        <p className="min-[1600px]:text-2xl xl:text-xl text-md font-semibold text-gray-600 dark:text-gray-300 mb-8">
                                            1 год гарантии на всю офисную мебель и сервисное обслуживание. Мы
                                            уверены в качестве нашей продукции и предоставляем расширенную гарантию на все
                                            изделия.
                                        </p>

                                        {/*<div className="flex items-center mb-8">*/}
                                        {/*    <CheckCircle className="w-12 h-12 text-blue-600 mr-4"/>*/}
                                        {/*    <h2 className="text-2xl font-semibold text-navy-dark dark:text-white">Условия*/}
                                        {/*        гарантии</h2>*/}
                                        {/*</div>*/}

                                        {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">*/}
                                        {/*    <div*/}
                                        {/*        className="p-6 bg-gray-50 dark:bg-navy/30 rounded-xl border-t-4 border-wood text-center">*/}
                                        {/*        <h3 className="font-semibold text-navy-dark dark:text-white text-xl mb-2">На*/}
                                        {/*            корпусную мебель</h3>*/}
                                        {/*        <p className="text-3xl font-bold text-wood mb-4">5 лет</p>*/}
                                        {/*        <p className="text-gray-600 dark:text-gray-300">Шкафы, столы, тумбы и другие*/}
                                        {/*            предметы корпусной мебели</p>*/}
                                        {/*    </div>*/}
                                        {/*    <div*/}
                                        {/*        className="p-6 bg-gray-50 dark:bg-navy/30 rounded-xl border-t-4 border-wood text-center">*/}
                                        {/*        <h3 className="font-semibold text-navy-dark dark:text-white text-xl mb-2">На*/}
                                        {/*            мягкую мебель</h3>*/}
                                        {/*        <p className="text-3xl font-bold text-wood mb-4">3 года</p>*/}
                                        {/*        <p className="text-gray-600 dark:text-gray-300">Диваны, кресла, стулья с*/}
                                        {/*            мягкой обивкой</p>*/}
                                        {/*    </div>*/}
                                        {/*    <div*/}
                                        {/*        className="p-6 bg-gray-50 dark:bg-navy/30 rounded-xl border-t-4 border-wood text-center">*/}
                                        {/*        <h3 className="font-semibold text-navy-dark dark:text-white text-xl mb-2">На*/}
                                        {/*            фурнитуру</h3>*/}
                                        {/*        <p className="text-3xl font-bold text-wood mb-4">2 года</p>*/}
                                        {/*        <p className="text-gray-600 dark:text-gray-300">Петли, направляющие,*/}
                                        {/*            механизмы трансформации</p>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                        <div className="mb-8">
                                            <h2 className="flex items-center gap-4 min-[1600px]:text-3xl text-xl 2xl:text-2xl xl:text-3xl font-semibold text-navy-dark  dark:text-white">
                                                <div> <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5"/> </div>
                                                <span> Что входит в гарантийное обслуживание</span>
                                            </h2>

                                            <div className="space-y-0 my-4 ">
                                                {[
                                                    "Бесплатный ремонт или замена изделия в случае обнаружения производственного дефекта",
                                                    "Бесплатный выезд специалиста для диагностики проблемы",
                                                    "Ремонт или замена некачественных деталей и механизмов",
                                                    "Консультации по правильной эксплуатации и уходу за мебелью"
                                                ].map((item, index) => (
                                                    <div key={index}
                                                         className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-navy/20 rounded-md">
                                                        <div> <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5"/> </div>
                                                        <p className="text-gray-600 text-lg font-semibold dark:text-gray-300  min-[1600px]:text-xl">{item}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            <h3 className=" flex items-center gap-4 min-[1600px]:text-3xl text-xl 2xl:text-2xl xl:text-3xl font-semibold text-navy-dark  dark:text-white">
                                                <AlertTriangle className="w-5 h-5 text-red-600 mr-2"/>
                                                <span> На что не распространяется гарантия</span>
                                            </h3>

                                            <div className="space-y-0 mt-4">
                                                {[
                                                    "Механические повреждения, возникшие в процессе эксплуатации мебели",
                                                    "Дефекты, вызванные неправильной сборкой, если сборка производилась не нашими специалистами",
                                                    "Повреждения, связанные с нарушением условий эксплуатации (повышенная влажность, воздействие высоких температур и т.д.)",
                                                    "Естественный износ материалов (потертости, выцветание и т.д.)"
                                                ].map((item, index) => (
                                                    <div key={index}
                                                         className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-navy/20 rounded-md">
                                                        <div> <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5"/> </div>
                                                        <p className="text-gray-600 text-lg font-semibold dark:text-gray-300  min-[1600px]:text-xl">{item}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/*<div className="mb-12">*/}
                                        {/*    <h2 className="text-2xl font-semibold text-navy-dark dark:text-white mb-6 flex items-center">*/}
                                        {/*        <HelpCircle className="w-6 h-6 text-wood mr-2"/>*/}
                                        {/*        Часто задаваемые вопросы*/}
                                        {/*    </h2>*/}

                                        {/*    <Accordion type="single" collapsible className="w-full">*/}
                                        {/*        <AccordionItem value="item-1" className="border-b dark:border-gray-700">*/}
                                        {/*            <AccordionTrigger className="text-navy-dark dark:text-white">*/}
                                        {/*                Как оформить гарантийный случай?*/}
                                        {/*            </AccordionTrigger>*/}
                                        {/*            <AccordionContent className="text-gray-600 dark:text-gray-300">*/}
                                        {/*                Для оформления гарантийного случая вам необходимо связаться с нашей*/}
                                        {/*                сервисной службой по телефону или через форму на сайте.*/}
                                        {/*                Наш специалист зафиксирует ваше обращение, запишет всю необходимую*/}
                                        {/*                информацию и согласует с вами дату и время выезда мастера для*/}
                                        {/*                диагностики проблемы.*/}
                                        {/*            </AccordionContent>*/}
                                        {/*        </AccordionItem>*/}

                                        {/*        <AccordionItem value="item-2" className="border-b dark:border-gray-700">*/}
                                        {/*            <AccordionTrigger className="text-navy-dark dark:text-white">*/}
                                        {/*                Какие документы нужны для гарантийного обслуживания?*/}
                                        {/*            </AccordionTrigger>*/}
                                        {/*            <AccordionContent className="text-gray-600 dark:text-gray-300">*/}
                                        {/*                Для гарантийного обслуживания вам понадобится гарантийный талон или*/}
                                        {/*                документы, подтверждающие покупку мебели в нашей компании (договор*/}
                                        {/*                купли-продажи, чек).*/}
                                        {/*                При оформлении заявки на гарантийное обслуживание необходимо будет*/}
                                        {/*                указать номер заказа или договора.*/}
                                        {/*            </AccordionContent>*/}
                                        {/*        </AccordionItem>*/}

                                        {/*        <AccordionItem value="item-3" className="border-b dark:border-gray-700">*/}
                                        {/*            <AccordionTrigger className="text-navy-dark dark:text-white">*/}
                                        {/*                Сколько времени займет гарантийный ремонт?*/}
                                        {/*            </AccordionTrigger>*/}
                                        {/*            <AccordionContent className="text-gray-600 dark:text-gray-300">*/}
                                        {/*                Сроки выполнения гарантийного ремонта зависят от сложности проблемы.*/}
                                        {/*                В большинстве случаев мелкие поломки устраняются мастером во время*/}
                                        {/*                выезда.*/}
                                        {/*                Если требуется замена деталей, срок ремонта может составить от 3 до*/}
                                        {/*                14 дней. В исключительных случаях, когда необходима полная замена*/}
                                        {/*                изделия,*/}
                                        {/*                срок может увеличиться до 30 дней.*/}
                                        {/*            </AccordionContent>*/}
                                        {/*        </AccordionItem>*/}

                                        {/*        <AccordionItem value="item-4" className="border-b dark:border-gray-700">*/}
                                        {/*            <AccordionTrigger className="text-navy-dark dark:text-white">*/}
                                        {/*                Можно ли продлить гарантийный срок?*/}
                                        {/*            </AccordionTrigger>*/}
                                        {/*            <AccordionContent className="text-gray-600 dark:text-gray-300">*/}
                                        {/*                Да, мы предлагаем услугу продления гарантийного срока для*/}
                                        {/*                корпоративных клиентов.*/}
                                        {/*                Для получения дополнительной информации обратитесь к вашему*/}
                                        {/*                менеджеру или в сервисную службу компании.*/}
                                        {/*            </AccordionContent>*/}
                                        {/*        </AccordionItem>*/}
                                        {/*    </Accordion>*/}
                                        {/*</div>*/}

                                        {/*<div className="text-center mt-12">*/}
                                        {/*    <Button onClick={handleWarrantyRequest} size="lg"*/}
                                        {/*            className="bg-wood hover:bg-wood-dark text-white">*/}
                                        {/*        Оформить гарантийный случай*/}
                                        {/*    </Button>*/}
                                        {/*    <p className="mt-4 text-gray-500 dark:text-gray-400">*/}
                                        {/*        Если у вас остались вопросы, вы можете позвонить по телефону <strong>+998 71*/}
                                        {/*        202 40 40</strong>*/}
                                        {/*    </p>*/}
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

export default ServiceWarranty;
