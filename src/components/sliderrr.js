import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image1 from '../components/images/photo_2022-12-20_13-05-06.jpg'
import Image2 from '../components/images/photo_2022-12-20_20-06-56.jpg'
import Image3 from '../components/images/photo_2023-01-07_13-13-31.jpg'
import Image4 from '../components/images/photo_2023-01-07_22-14-30.jpg'
import Image5 from '../components/images/photo_2023-01-08_22-19-01.jpg'
import Image6 from '../components/images/photo_2023-01-09_13-37-49.jpg'

const Sliderr = () => {
  const [images] = useState([Image1,Image2,Image3,Image4,Image5,Image6])
  return (
    <div className='sliderr'>
     <Swiper
        modules={[Navigation]}
        navigation={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          images.map(elem => {
            return <SwiperSlide key={elem}>
              <div className='images'>
                <img src={elem} alt="" />
              </div>
            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
};

export default Sliderr;