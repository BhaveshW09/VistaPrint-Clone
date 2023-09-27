import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export function Swipers() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://mobirise.com/extensions/commercem4/assets/images/gallery00.jpg"
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mobirise.com/extensions/commercem4/assets/images/gallery01.jpg"
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mobirise.com/extensions/commercem4/assets/images/gallery03.jpg"
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mobirise.com/extensions/commercem4/assets/images/gallery05.jpg"
            alt="image"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
