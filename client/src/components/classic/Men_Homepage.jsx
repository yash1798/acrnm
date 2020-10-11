import React, { Component } from 'react'

import top from "../../assets/img/male_zara4.jpg"

import "../css/Men_Homepage.css"
import { MenuOptionHomepage } from '../functional/MenuOption_Homepage'

export default class MenHomepage extends Component {
    render() {
        return (
            <div>
                <MenuOptionHomepage img={top} header="New IN" desc="Explore this week's latest menswear collection." />
            </div>
        )
    }
}
