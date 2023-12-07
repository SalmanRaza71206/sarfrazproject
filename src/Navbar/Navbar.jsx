import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";
import { BiSolidUpArrow } from "react-icons/bi";
import './Navbar.css'
function Navbar() {
    const [hidenav,sethidenav]=useState(false)
    const handlehide=()=>{
        sethidenav(true)
    }
    const handlehideopen=()=>{
        sethidenav(false)
    }
  return (
    <div className='navbar-container'>
      <div className="logo"><span style={{color:"green"}}>ATG</span>WORLD</div>
      <div className="search-bar">
      <IoSearchOutline /><input type="search" name="" id="" placeholder='search for your favourite groups in ATG'/>
      </div>
      <div className="create-account">
        <span>Create Account. <span>It's Free!
               
        {
            hidenav?(
                <>
                <BiSolidUpArrow onClick={handlehideopen} style={{fontSize:"0.7rem"}} />
                <div style={{position:"absolute",boxShadow:"0px 0px 1px 1px rgba(0, 0, 0, 0.247)",width:"180px",padding:"10px",backgroundColor:"#ffff",cursor:"pointer",borderRadius:"10px",textAlign:"center"}}>
                <option value="Login">Login</option>
                <option value="Signup">Signup</option>
                </div>
                </>
            ):(<>
           
                <FaSortDown onClick={handlehide}/>
                </>
                 )
        }
        </span></span>
      </div>
    </div>
  )
}

export default Navbar
