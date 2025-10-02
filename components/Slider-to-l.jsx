import React from "react";
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SliderR() {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mb-15">
  My Works
</h1>

      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true} // infinite loop
        speed={2000} // time in ms for one full slide transition
        autoplay={{
          delay: 0, // no delay between transitions
          disableOnInteraction: false,
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
            <img src="/photos/pic_1.png" alt="Pic 1" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_2.jpg" alt="Pic 2" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_3.jpg" alt="Pic 2" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_4.jpg" alt="Pic 2" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_5.png" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_7.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_8.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_9.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_10.png" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_11.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_12.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_13.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_14.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_15.png" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_6.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SliderR;
