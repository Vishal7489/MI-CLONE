import React from 'react'
import VideoCard  from "./VideoCard.js"
import "../Styles/videoCard.css"

const Videos = ({videos}) => {
  return (
    <div className="videos"> 
{
videos.map((item,index)=>(
<VideoCard index={index}   key={item.image}  src={item.image} name={item.name}/>


))}
    </div>
  )
}

export default Videos