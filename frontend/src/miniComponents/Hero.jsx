import React from 'react'
import {Link} from "react-router-dom"



function Hero() {
  return (
   <section className='hero'>
    <div className='banner'>
      <h1>volunteers</h1>
      <h3>Needed</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus expedita eligendi repudiandae architecto, nesciunt eius assumenda odit provident laudantium inventore pariatur rem omnis ex facere eum totam ad? Accusantium, in.
      Aninobis rexpli quam laboriosam. Harum!</p>
      <Link to="/doanate" className='btn'>
        Donate Now  
      </Link>
    </div>
<div className='banner'>
  <img src="/hero.png" alt="hero" />
</div>
   </section>
  )
}

export default Hero