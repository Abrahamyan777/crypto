import './reviews.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const Inems = () => {

    const {t} = useTranslation()

    return (
        <div className='inner_slider'>
            <div className='info'>
                <div className="imgaes"></div>
                <div className="name">
                    <h4>{t("Reviews.Items.Ali")}</h4>
                    <p>{t("Reviews.Items.Uzbekistan")}</p>

                </div>
                <div className="score">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <h4 className='title'>{t("Reviews.Items.It was a very good experience")}</h4>
            <p className='text'>{t("Reviews.Items.text")}</p>
        </div>
    )
}


const Reviews = () => {

    const {t} = useTranslation()

    return (
        <section className='reviews-wrapper'>
            <div className="top_block">
                <h3>{t("Reviews.Reviews.Reviews from our partners")}</h3>
                <p>{t("Reviews.Reviews.text")}</p>
            </div>
            <div className="bottom_block">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Inems />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Inems />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Inems />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Inems />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Inems />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Inems />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Inems />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Inems />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Inems />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews;