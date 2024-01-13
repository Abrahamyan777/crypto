import { Swiper, SwiperSlide } from "swiper/react";
import './videoSlider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";


import photo1 from "../../../images/photo1.png";
import photo2 from "../../../images/photo2.png";
import photo3 from "../../../images/photo3.png";
import photo4 from "../../../images/photo4.avif";
import photo5 from "../../../images/photo5.avif";
import photo6 from "../../../images/photo6.avif";
import photo7 from "../../../images/photo7.jpg";
import photo8 from "../../../images/photo8.webp";
import photo9 from "../../../images/photo9.webp";



const VideoSlider = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_conteiner"
      >
        <SwiperSlide>
          <img src={photo1} alt="photo1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} alt="photo2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} alt="photo3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo4} alt="photo4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo5} alt="photo5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo6} alt="photo6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo7} alt="photo7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo8} alt="photo8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo9} alt="photo9" />
        </SwiperSlide>
      </Swiper>
    </div>

  )
}

export default VideoSlider;