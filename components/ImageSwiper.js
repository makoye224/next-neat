'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

import { images } from '@/lib/images'
import { cn } from '@/lib/utils'

import 'swiper/css'

export default function Page() {
  const [swiper, setSwiper] = useState(null)
  const [showNavigation, setShowNavigation] = useState(true)

  return (
    <section className='relative min-h-screen mt-300 text-white lg:ml-20'>
      <div className='container'>

        {/* navigation */}
        <nav className={cn('my-10', !showNavigation && 'hidden')}>
          <ul className='flex gap-4'>
            {images.map((image, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    swiper.slideTo(index)
                    // setShowNavigation(false)
                  }}
                  className='relative block  overflow-hidden rounded-lg'
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className='block h-full w-full object-cover'
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main slides */}
        <Swiper
          spaceBetween={10}
          onSwiper={setSwiper}
          className='lg:h-96 w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}