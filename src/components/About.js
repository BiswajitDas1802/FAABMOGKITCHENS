import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import './About.css'
function About() {
    // (window).load(function(){
    //     ("html,body").scrollTop(55);
    // });
    
console.log(window.location.hash)
console.log(window.scrollBy())

    return (
      
          <div className="about" id="about">
               <div className="about_img">
                   
               </div>
               <div className="about_text">
                   <div className="about_text_center">
                       <h1>Our Menu</h1>
                       <p>ajhb jahuih iakjhkjhskaj hkjsdhha dhwu hakhskdh akhsdjk hakjdhksa jhdkjshdk jahkjd ah lwd asd ada da dawda hsbd hajsbd jhabd hw</p>
                      <Route>
                          <Link to="/menu">
                       explore
                       </Link>
                       </Route>
                   </div>
               </div>
          </div>
       
       
    )
}

export default About


     {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,122.7C672,96,768,96,864,106.7C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
     
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,122.7C672,96,768,96,864,106.7C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}