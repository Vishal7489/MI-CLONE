import React from 'react'
import HotItemCard from "./HotItemCard.js"
import "../Styles/HotAccessories.css"

const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className="HotAccessories">

     <div>
        <img src={musicCover || smartDeviceCover|| homeCover|| lifeStyleCover|| mobileAccessoriesCover} alt="Cover"/>
        </div>


{/* ..............2nd */}
  <div>
    {music && music.map((item,index)=>(
    <HotItemCard Key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
    ))}


    {smartDevice && smartDevice.map((item,index)=>(
    <HotItemCard Key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
    ))}


    {home && home.map((item,index)=>(
    <HotItemCard Key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
    ))}


    {lifeStyle && lifeStyle.map((item,index)=>(
    <HotItemCard Key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
    ))}


    {mobileAccessories && mobileAccessories.map((item,index)=>(
    <HotItemCard Key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
    ))}

    <HotItemCard image=""/>
   


</div>
    

    </div>
  )
}

export default HotAccessories