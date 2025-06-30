import React, { useEffect, useRef } from 'react'

import cl from './Gallery.module.scss'

import shoe1 from '../../assets/ShoePhotos/shoe1.png'
import shoe2 from '../../assets/ShoePhotos/shoe2.png'
import shoe3 from '../../assets/ShoePhotos/shoe3.png'
import shoe4 from '../../assets/ShoePhotos/shoe4.png'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';

import gsap from 'gsap'

const Gallery = ({ onSlideClick }) => {

  const btnRef = useRef(null)
  useEffect(() => {
    gsap.to(btnRef.current, {
      scale: 1.2,
      yoyo: true,
      repeat: -1,
      duration: 0.4,
      ease: 'power2.inOut',
      transformOrigin: 'center',
    })
  }, [])

  return (
    <div className={cl.gallery_container}>
      <div className={cl.swiper_div}>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
        > {
            [shoe1, shoe2, shoe3, shoe4].map((shoe, index) => {
              return <SwiperSlide onClick={() => { onSlideClick(index) }}
                key={index}>
                <img src={shoe} alt={`shoe ${index + 1}`} />
              </SwiperSlide>
            })
          }
        </Swiper>
      </div>
      <button ref={btnRef} className={cl.cta_button} onClick={() => { console.log('user_interaction:cta_click') }}></button>
    </div>
  )
}

export default Gallery