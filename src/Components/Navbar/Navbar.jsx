import React, { useState } from 'react'
import {assets} from '../../assets/assets'
import './Navbar.css'
const Navbar = () => {
    const [menu, setMenu] = useState("home");
    
  return (
  
   <header className='navbar flex justify-between py-8 px-14'>
    <div className='w-[140px]'>
     <img src={assets.logo} alt="" />
     </div>
     <ul className='flex gap-6 justify-center text-gray-500 items-center'>
        <li className={menu==='home'? 'active':""} onClick={()=>setMenu("home")} >Home</li>
        <li className={menu==='menu'? "active":""} onClick={()=>setMenu("menu")}>Menu</li>
        <li className={menu==='mobile-app'? "active":""} onClick={()=>setMenu("mobile-app") }>Mobile App</li>
        <li className={menu==='contact'? "active":""} onClick={()=>setMenu("contact")}>Contact Us</li>
     </ul>
<div className='flex gap-6  items-center'>
<div className='relative'>
    <img className='size-5' src={assets.search_icon} alt="" />
    </div>
<div>
<div className='w-2 h-2 right-[8px] bg-red-500 rounded-full'></div>
<img className='size-5' src={assets.basket_icon} alt="" />

</div>
 
<button className='bg-white text-gray-500 rounded-full px-4 py-1  border-solid border-2 border-orange-500 hover:bg-gray-200'>Sign in</button>
   
</div>


   </header>

  )
}

export default Navbar
