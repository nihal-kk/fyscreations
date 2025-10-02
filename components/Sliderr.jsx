import React from 'react'
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SliderL() {
  return (
     <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true} // infinite loop
        speed={2000} // time in ms for one full slide transition
        autoplay={{
          delay: 0, // no delay between transitions
          disableOnInteraction: false,
          reverseDirection: true
        }}
        freeMode={true} // enables smooth free movement
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_16.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_17.jpg" alt="Pic 2" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_18.jpg" alt="Pic 2" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_19.jpg" alt="Pic 2" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_20.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_21.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_22.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_23.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_24.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_25.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_26.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_27.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_28.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_29.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_30.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
      </Swiper>
  )
}

export default SliderL