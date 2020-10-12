import React, { Component } from 'react'
import Slider from "react-slick"

import MenHomepage from '../classic/Men_Homepage'
import WomenHomepage from '../classic/Women_Homepage'
import KidsHomepage from '../classic/Kids_Homepage'

import RadioOff from "../../assets/img/radio-on.svg"



import "../css/Homepage.css"






export default class HomePage extends Component {
    render() {
     var settings = {
      dots:true,
         infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
         className: "slides",
         dotsClass: "slick-dots slick-thumb",
         arrows: false,
         appendDots: dots => (
          <ul> {dots} </ul>
      ),
      customPaging: i => (
        <img src={RadioOff} alt="radio" />
      )
}

        return (
            <Slider {...settings}>
                <MenHomepage />
            <WomenHomepage />
            <KidsHomepage />
      </Slider>
        )
    }
}
