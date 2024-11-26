import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className=''>
        
      <section className='header mx-28 px-8 py-36 text-white rounded-xl flex ' >
       
      <div className='flex flex-col gap-5 '>
      <h1 className='text-6xl '>Order your <br /> favorite food</h1>
        <p className='font-thin w-[600px]'>Craving something delicious? We've got you covered! Explore a world of flavors with fresh, hot meals delivered straight to your door. Quick, easy, and satisfying – your favorite dishes are just a click away!</p>
          
        <div>
        <button className='bg-white text-gray-500 px-4 py-1 rounded-full   border-solid  hover:bg-gray-200'>Order Now</button>
       
        </div>
      </div>
      </section>
      
    </div>
  )
}

export default Header
