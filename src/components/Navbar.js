import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItems } from "./navitems"
import './Navbar.css'
import { Link as Scroll } from 'react-scroll'




function Navbar() {
   const initialState = { clicked: false }
    const [state, setState] = useState(initialState)
  const  handleClick = () => {
        setState({ clicked:!state.clicked })
    }
    const [show, handleShow] = useState(false)
            const transitionNavBar=()=>{  if(window.scrollY>100){
                  handleShow(true)
              }
              else{
                  handleShow(false)
              }
            }
            useEffect(() => {
                window.addEventListener("scroll",transitionNavBar)
                return () => window.removeEventListener("scroll",transitionNavBar)
            }, [])

   
        return(

            <nav className={`NavbarItems ${ show && "nav-black"}` }>
                <h1 className="navbar-logo">FAABMOG</h1>
    
                <div className="menu-icon" onClick={handleClick}>
                    <i className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavItems.map((item, index) => {
                        return (
                            <Link to={item.url}>
                            <li key={index}>
                                <a href={item.url} className={item.cName} >
                                {item.title}
                                </a>
                            </li>
                            </Link>
                        )
                    })}
                  
                    <li key="1">
                                <a  className="nav-links" href="#about" >
                               ABOUT US
                                </a>
                            </li>
                            
                    <li key="1">
                                <a  className="nav-links" href="#footer" >
                                SOCIALS
                                </a>
                            </li>
                
                </ul>
                
            </nav>
        )
    }


export default Navbar;