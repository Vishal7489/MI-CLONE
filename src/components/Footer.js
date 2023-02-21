import React from 'react'
import "../Styles/PreFooter.css"
import "../Styles/Footer.css"








const Footer = ({footer}) => {
  return (
    <>
    <div className="PreFooter">
    <div>
        
    <p><b>Hassel-free replacement</b>  <br/>10-day easy replacement policy on mi.com</p>
</div>
<div> <p> <b>100% secure payments</b> <br/> We support Cards, Wallets,EMI and COD</p>
</div>
<div>
<p><b>Vast service network</b> <br/>1000 Mi service-center across 600 cities </p>
</div>
</div>



<div className="PreFooter2">
<div><p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>

<div>
<div>
<input type="email" name="email" placeholder="Enter Email Address"/>
<button></button>
</div>
<span>Thanks. You're on our email list for special offers.</span>
</div>
<div>
    <p>FOLLOW MI</p>
    <span>We want to hear from you!</span>
</div>
<div>

</div>


</div>

<div className="footer">
<div>
<p>SUPPORT</p>
{footer.support.map((item,index)=>(
<a key={item.url} href={item.url}>{item.name}</a>


))}
</div>
<div>
<p>SHOP AND LEARN</p>
{footer.support.map((item,index)=>(
<a key={item.url} href={item.url}>{item.name}</a>
))}
</div>
<div>
<p> RETAIL STORE   </p>
{footer.support.map((item,index)=>(
<a key={item.url} href={item.url}>{item.name}</a>
))}
</div> 
<div>
<p> About   </p>
{footer.support.map((item,index)=>(
<a key={item.url} href={item.url}>{item.name}</a>
))}
</div>
<div> 
    <p> CONTACT US  </p>
{footer.support.map((item,index)=>(
<a key={item.url} href={item.url}>{item.name}</a>
))}

</div>
<div>
<div>
Chat with our Virtual Al that (24/7 Live Agent Support)
<button>CHAT NOW</button>

</div>


</div>

</div>
<div className="footerBorder">
    <div> Copyright 0 2010-2021 xiaomi. All Rights Reserved</div>
</div>


  </>  
  )
}

export default Footer