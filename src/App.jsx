import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import ExploreMenu from './Components/ExploreMenu/ExploreMenu'
import FoodDisplay from './Components/FoodDisplay/FoodDisplay'
import Footer from './Components/Footer/Footer'
const App = () => {
  const [category, setCategory] = useState("All");
  
  return (
 <div>
  <Navbar/>
 
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/placeorder' element={<Placeorder/>}/>
    </Routes>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay/>
    <Footer/>
 </div>
  )
}

export default App
