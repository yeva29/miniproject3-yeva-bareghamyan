import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import TOKEN from "../requestMethod"
const Home = () => {

  return (
    <div className='container'>
      <Announcement />
      <Navbar/>
      <Slider/>
      <Categories />
      <Products filters={{color:'white',size:'XS'}}/>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
