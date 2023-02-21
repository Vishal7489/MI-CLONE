import React from 'react'

const VideoCard = ({image,name,index}) => {
  return (
    <div className="videoCard" style={{backgroundImage: 'url(${image})'}}>
<a href="#/"></a>
<p>{name}</p>
    </div>
  )
}

export default VideoCard