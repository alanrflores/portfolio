import React from 'react'
import style from  "./cover.module.css"
import coverVideo from "../../media/coverVideo.mp4"

const Cover = () => {
  return (
    <div className={style.containerCover}>
     <video className={style.video} src={coverVideo} autoPlay loop muted></video>
     <h1>Alan Rodrigo Flores</h1>
     <p>Developer | Desarrollador Front End | Estudiante Desarrollador Full Stack </p>
    </div>
  )
}

export default Cover