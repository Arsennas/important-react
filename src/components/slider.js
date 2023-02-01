import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Slider = () => {
  const [numbers] = useState([1, 2, 3, 4, 5, 6])
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 2000 }}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          numbers.map(item => {
            return <SwiperSlide key={item}>
              <div className='number'>{item}</div>
            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
};

export default Slider;