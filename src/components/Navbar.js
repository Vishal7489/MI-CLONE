import React from 'react'
import '../Styles/Nav.css';
import {logo} from "../data/data.json"
import {Link} from "react-router-dom"

// 7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/></svg>


const Navbar = () => {
  return (
    <div className="nav"> 

    <div className="logo">

     <Link to="/dsd"> 
     <img id="logoImage" src={logo} alt="Not"/>
     </Link>
</div>


<Link className="navlinks" href="/miphones">Mi Phones </Link>
<Link className="navlinks" href="/redmiphones">Redmi Phones </Link>
<Link className="navlinks" href="/tv">TV</Link>
<Link className="navlinks" href="/laptops">Laptops </Link>
<Link className="navlinks" href="/lifestyle">Fitness & Lifestyle </Link>
<Link className="navlinks" href="/home">Home</Link>
<Link className="navlinks" href="/audio">Radio </Link>
<Link className="navlinks" href="/accessories">Accessories</Link>

  <div className="searchbox">
    <input type="text" name="search" placeholder="Search Products"/>

</div>
</div>


  )
}

export default Navbar;