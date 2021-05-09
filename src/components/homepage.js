import React, { useEffect, useState } from 'react'
import './homepage.css'
import img1 from './images/chicken.jpg'
import img2 from './images/mutton.jpg'
import img3 from './images/fried.jpg'
import img4 from './images/biryani.jpg'
import img5 from './images/chicken.jpg'

import ImgComp from './ImgComp'
import Navbar from './Navbar'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer'
import Header from './Header'
import About from './About'
function Homepage() {
    // const sliderArr = [<ImgComp src={img1}/>,<ImgComp src={img2}/>,<ImgComp src={img3}/>,<ImgComp src={img4}/>,<ImgComp src={img5}/>]
    const sliderArr = [{src:img1},
        {src:img2},
        {src:img3},
        {src:img4},
        {src:img5},
   ]
        
        
    return (
        <div className ="homepage">
          <Navbar/>
          <Header/>
         <div className="Home_carousal">
         <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img5}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     </div>
     <About/>
           <Footer/>
       </div>
       
    )
}

export default Homepage
