import './reviews.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Inems = () => {
    return (
        <div className='inner_slider'>
            <div className='info'>
                <div className="imgaes"></div>
                <div className="name">
                    <h4>Али</h4>
                    <p>Узбекистан</p>

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
            <h4 className='title'>It was a very good experience</h4>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id
                augue sit cursus pellentesque enim arcu.</p>
        </div>
    )
}


const Reviews = () => {
    return (
        <section className='reviews-wrapper'>
            <div className="top_block">
                <h3>Отзывы наших партнеров</h3>
                <p>Каждый отзыв по-особенному  ценный для нас. Ведь для этого было проделано большой совместный путь.
                    Успех состоит из доверие, готовности к развитию и перемен.</p>
            </div>
            <div className="bottom_block">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    // breakpoints={{
                    //     1024: {
                    //       slidesPerView: 2,
                    //     },
                    //     768: {
                    //       slidesPerView: 2,
                    //     },
                    //     640: {
                    //       slidesPerView: 1,
                    //     },
                    //   }}
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