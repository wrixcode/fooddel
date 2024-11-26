import React from 'react'
import { food_list } from '../../assets/assets'
const FoodDisplay = () => {
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-20 '>
      {
food_list.map((item, index)=>{

    return(
        <div key={index} className='border-2 w-60 mb-10  border-gray-300 pl-2  rounded-2xl'>
        
      <img className='w-[100%] rounded-t-lg ' src={item.image} alt="" />
        <p>
            {item.name}
        </p>
        <p>{item.category}</p>
        <p className='text-gray-500 font-light'>{item.description}</p>
       
        <p className='text-xl text-orange-500 '>${item.price}</p>
        </div>
)
})
    


      }
    </div>
  )
}

export default FoodDisplay
