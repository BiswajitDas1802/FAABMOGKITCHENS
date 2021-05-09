import React from 'react'
import Menucard from './Menucard'
import Navbar from './Navbar'
import './menu.css'
import { biryaniItems,rollsChowmeins,starters,combos } from "./menuitem"
import TypeWriterEffect from 'react-typewriter-effect';
import Footer from './Footer'
import Header from './Header'
function Menu() {

    return (
        <div className="menu" >
             <Navbar/>
            {/*<div className="menu_body">
                <img src={bgimg}></img>
            </div> */}
            
            <div  >
            <Header/>
            <div className="arrow_cont2">
               
                <TypeWriterEffect
                   startDelay={1000}
                   cursorColor="#3F3D56"
                   multiText={[
                     "Hungry?!.. Scroll Down And Choose From Our Menu..."
                   ]}
                   loop={true}
                   nextTextDelay={1000}
                   typeSpeed={100}
                 />
                           </div>
          
        </div>
    
            
           <div className="Menu_body">

            <div className="menu_nonveg">
                <div className="menu_items">
                    <div className="menu_headings">
                   <p>Starter</p>
                    </div>
                    {starters.map(item=><Menucard src={item.src} desc={item.desc}
                    name={item.name} price={item.price}
                    />)}
                </div>
                <div className="menu_items">
                <div className="menu_headings">
                   <p>Biriyani</p>
                    </div>
                    {biryaniItems.map(item=><Menucard src={item.src} desc={item.desc}
                    name={item.name} price={item.price}
                    />)}
                </div>
                <div className="menu_items">
                <div className="menu_headings">
                   <p>Combos</p>
                    </div>
                    {combos.map(item=><Menucard src={item.src} desc={item.desc}
                    name={item.name} price={item.price}
                    />)}
                </div>
                <div className="menu_items">
                <div className="menu_headings">
                   <p>Rolls & Chowmein</p>
                    </div>
                    {rollsChowmeins.map(item=><Menucard src={item.src} desc={item.desc}
                    name={item.name} price={item.price}
                    />)}
                </div>  
            </div>
            <div className="Menu_order">
                <h1>Decided what to order?!.. </h1>
                <span style={{textDecoration:"underline",}}>Give us a call</span>
                <h1>Or Order From Zomato...</h1>
            </div>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Menu
