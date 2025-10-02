import React from 'react'
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
function SliderrR() {
  return (
    <>
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
            <img src="/photos/pic_31.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_32.jpg" alt="Pic 2" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_33.jpg" alt="Pic 2" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_34.jpg" alt="Pic 2" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_35.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_31.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_36.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_32.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_37.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_33.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_38.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_34.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_39.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_35.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg flex items-center justify-center">
            <img src="/photos/pic_40.jpg" alt="Pic" className="rounded-lg bg-black" />
          </div>
        </SwiperSlide>
      </Swiper><br />
 <div className="flex items-center justify-center  py-10">
  <Link
    href="/projects"
    className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg font-semibold text-white rounded-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition"
  >
    View All Projects
  </Link>
</div>
      </>
  )
}

export default SliderrR