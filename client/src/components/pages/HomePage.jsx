import React, { Component } from 'react'
import Slider from "react-slick"
import MenHomepage from '../classic/Men_Homepage'




export default class HomePage extends Component {
    render() {
     var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
}

        return (
            <Slider {...settings}>
                <MenHomepage />
      </Slider>
        )
    }
}
