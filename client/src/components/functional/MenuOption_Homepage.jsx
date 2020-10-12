import React from 'react'

import { Button } from './Button'

import down from "../../assets/img/chevron-down-outline.svg"

import "../css/MenuOption_Homepage.css"

export const MenuOptionHomepage = (props) => {
    return (
        <div className="menu-option">
            <div className="bg-img" style={{ backgroundImage:`url(${props.img})` }} />
            <div className="hero">
                <h1>{props.header}</h1>
                <p>{props.desc}</p>
                <div style={{width: "8rem", height: "2.5rem"}}>
                    <Button theme="transparent" >VIEW</Button>
                </div>
            </div>
            <img className="down" src={down} alt="down" />
        </div>
    )
}
