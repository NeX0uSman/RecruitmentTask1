import React from 'react'
import video from '../../assets/videos/video.mp4'
import cl from './Video.module.scss'

const Video = ({ slideIndex }) => {
  
  const index = slideIndex + 1;
  
  const getPosition = () => {
    switch (index) {
      case 1: return cl.top_left
      case 2: return cl.top_right
      case 3: return cl.bottom_left
      case 4: return cl.bottom_right
      default: return ''
    }
  }

    return (
      <div className={`${cl.video_container} ${getPosition()}`}>
          <video autoPlay loop muted>
            <source src={video} type='video/mp4'></source>
          </video>
      </div>
    )
  }

  export default Video