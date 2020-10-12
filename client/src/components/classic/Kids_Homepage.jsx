import React, { Component } from 'react'
import Slider from "react-slick";

import top from "../../assets/img/kids_top.jpg"
import mid from "../../assets/img/kids_mid.jpg"
import bottom from "../../assets/img/kids_zara4.jpeg"

import back from "../../assets/img/back.svg"


import "../css/Category_Homepage.css"
import { MenuOptionHomepage } from '../functional/MenuOption_Homepage'
import RadioOff from "../../assets/img/radio-on.svg"

export default class MenHomepage extends Component {
    constructor(props){
    super(props);
    this.slide = this.slide.bind(this);
}
slide(y){
    y < 0 ? (
       this.slider.slickNext()
    ) : (
       this.slider.slickPrev()
        )
    }
    
componentDidMount(){
    window.addEventListener('wheel', (e) => {
        this.slide(e.wheelDelta);
    })
  }
    settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      className: "slides-men",
        dotsClass: "slick-dots slick-thumb",
      arrows: true,
      appendDots: dots => (
          <ul> {dots} </ul>
      ),
      customPaging: i => (
        <img src={RadioOff} alt="radio" />
      )
     
    }
    render() {
        return (
            <div className="homepage-kids">
                <div className="left"><h1>Women</h1><img src={back} alt="back"/></div>
            <Slider ref={slider => this.slider = slider} {...this.settings}>
                <MenuOptionHomepage img={top} header="New IN" desc="Explore this week's latest menswear collection." theme="transparent" />
                <MenuOptionHomepage img={mid} header="Collection" desc="Get the latest and best from our autumn collection." theme="transparent" />
                <MenuOptionHomepage img={bottom} header="Accessories" desc="Accessories for Men." theme="transparent" />
                </Slider>
                </div>
        )
    }
}
