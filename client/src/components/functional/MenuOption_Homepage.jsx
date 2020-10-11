import React from 'react'

import "../css/MenuOption_Homepage.css"
import { Button } from './Button'

export const MenuOptionHomepage = (props) => {
    return (
        <div className="menu-option">
            <div className="bg-img" style={{ backgroundImage:`url(${props.img})` }} />
            <div className="hero">
                <h1>{props.header}</h1>
                <p>{props.desc}</p>
                <Button>VIEW</Button>
            </div>
        </div>
    )
}
