import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import axios from "axios";
import Animable from "@/components/Animable.tsx";
import {useLanguage} from "@/lib/i18n/context.tsx";

export default function Partners() {
    const [photos, setPhotos] = useState<any[]>([]);
    const { t } = useLanguage();

    useEffect(() => {
        // Example: replace with your backend or API endpoint
        axios
            .get("https://adminpanel.mebelcity.uz/api/about/partners")
            .then((res) => {
                setPhotos(res.data); // expecting an array of photo URLs

                console.log()
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container mb-5 mx-auto">
            <div className="text-center pb-[30px]">
                <Animable>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white section-title">
                        Наши клиенты
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Наши клиенты — наша гордость <br/>
                        Нам доверяют ведущие компании и частные заказчики, ценящие стиль и качество.
                    </p>
                </Animable>
            </div>



            {photos.length > 0 ? (
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    freeMode={true}
                    slidesPerView={'auto'}
                    direction={'horizontal'}
                    loop={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                    }}

                    className="pb-5 swiper-container-free-mode h-[130px]"
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        500: { slidesPerView: 4 },
                        1200: {slidesPerView: 5},
                        1600: { slidesPerView: 6 },
                        2000: { slidesPerView: 8 },
                    }}
                >

                    {
                        photos.map((el, index) =>
                            <SwiperSlide key={index}>
                                <div className={'h-full w-full border shadow bg-white flex items-center justify-center'}>
                                    <img
                                        src={`https://adminpanel.mebelcity.uz/storage/${el?.logo}`}
                                        alt={`photo-${index}`}
                                        loading="lazy"
                                        className="w-full h-full"
                                    />
                                </div>

                            </SwiperSlide>

                        )
                    }
                </Swiper>
            ) : (
                <p className="text-center text-gray-500">Loading photos...</p>
            )}
        </div>
    );
}
