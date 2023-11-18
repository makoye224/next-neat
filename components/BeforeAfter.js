import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const BeforeAfterWrapper = styled.div`
.swiper {
    width: 300px;
    height: 300px;
    position: relative;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
`

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export default function BeforeAfter() {
  return (
    <>
    <BeforeAfterWrapper>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
      </Swiper>
      </BeforeAfterWrapper>
    </>
  );
}
