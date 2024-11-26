import React from 'react'

const Footer = () => {
  return (
    <div className='footer py-20 px-12 text-white  bg-[#323232]'>
    <div className='flex  justify-between'>
<div className='right  '>
<img src="./src/assets/logo.png" alt="" />
<p className='mt-5 '>Lorem ipsum dolor sit amet consectetur adip Eveniet deleniti mollitia rem. <br /> Delectus accusamus possimus earum minus dolosunt fuga maiores!</p>
<div className='flex gap-5 mt-7 cursor-pointer'>
<img src="./src/assets/facebook_icon.png" alt="" />
<img src="./src/assets/twitter_icon.png" alt="" />
<img src="./src/assets/linkedin_icon.png" alt="" />
</div>
</div>
<div className='mid'>
<h1 className='text-2xl'>Company</h1>
<p>Home</p>
<p>About</p>
<p>Privacy policy</p>
</div>
<div className='end'>
<h1 className='text-2xl'>Get in touch</h1>
<p>91432444332</p>
<p>wsdf@gmail.com</p>
</div>
</div >
<div className='border-t-2 border-white mt-12'></div>
<p className=' text-center mt-10'>Copyright © 2024 All rights reserved</p>
    </div>
  )
}

export default Footer
