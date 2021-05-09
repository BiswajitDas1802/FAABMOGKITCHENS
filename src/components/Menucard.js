
import React from 'react'
import './menucard.css'

function Menucard({src,name,desc,price}) {
    return (
        <div className="Menucard">
            <div className="Menucard_img">
                <img src={src} />
            </div>
            <div className="aftrimg">
            <div className="Menucard_name">
                {name}
            </div>
            <div className="Menucard_descrition">
                {desc}
            </div>
            <div className="menucard_price">
                {price}
            </div>
            </div>
        </div>
    )
}

export default Menucard
