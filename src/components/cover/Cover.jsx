import React from 'react'
import style from  "./cover.module.css"
import coverVideo from "../../media/coverVideo.mp4"

const Cover = () => {
  return (
    <div className={style.containerCover}>
     <video className={style.video} src={coverVideo} autoPlay loop muted></video>
     <h1>Alan Rodrigo Flores</h1>
     <p data-text="Full stack Developer|Front-end|Back-end "></p>
    </div>
  )
}

export default Cover