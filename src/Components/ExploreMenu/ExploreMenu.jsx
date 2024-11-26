import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ( {category, setCategory}) => {
  return (
    <>
    <div className='mt-5 mx-28 '>
        <h1 className=' text-5xl'>Explore our menu</h1>
        <p className='text-gray-500  mt-8 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem illum quod itaque consectetur temporibus quia quae deserunt necessitatibus cupiditate voluptatem.</p>
    </div>
<div className='category flex gap-12 mt-8 mx-28 mb-10'>

{
menu_list.map((item, index)=>{

    return(
        <div onClick={()=>setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} className='item' key={index}>
            <img  className={category===item.menu_name? "active":""} src={item.menu_image} alt="" />
            <p className='text-center text-gray-500'>{item.menu_name}</p>
        </div>
    )
})


    }
</div>
    
    </>
  )
}

export default ExploreMenu
