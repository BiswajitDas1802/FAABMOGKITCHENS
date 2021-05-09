import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavItems } from "./navitems"
import './Navbar.css'




class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(

            <nav className="NavbarItems">
                <h1 className="navbar-logo">FAABMOG</h1>
    
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavItems.map((item, index) => {
                        return (
                            <Link to={item.url}>
                            <li key={index}>
                                <a href={item.id} className={item.cName} >
                                {item.title}
                                </a>
                            </li>
                            </Link>
                        )
                    })}
                </ul>
                
            </nav>
        )
    }
}

export default Navbar;