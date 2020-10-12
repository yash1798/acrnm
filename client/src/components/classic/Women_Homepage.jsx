import React, { Component } from 'react'
import Slider from "react-slick";

import top from "../../assets/img/female_zara.jpg"
import mid from "../../assets/img/female_zara2.jpg"
import bottom from "../../assets/img/female_zara6.jpg"

import next from "../../assets/img/next.svg"
import back from "../../assets/img/back.svg"

import RadioOff from "../../assets/img/radio-on.svg"

import "../css/Category_Homepage.css"
import { MenuOptionHomepage } from '../functional/MenuOption_Homepage'

export default class WomenHomepage extends Component {
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
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
        slidesToScroll: 1,
      className: "slides-men",
      dotsClass: "slick-dots slick-thumb",
      vertical: true,
        verticalSwiping: true,
       appendDots: dots => (
          <ul> {dots} </ul>
      ),
      customPaging: i => (
        <img src={RadioOff} alt="radio" />
      ),
      arrows: false
     
    }
    render() {
      return (
        <div className="homepage-women"><div className="right"><img src={next} alt="next" /><h1>Kids</h1></div>
          <div className="left"><h1>Men</h1><img src={back} alt="left"/></div>
            <Slider ref={slider => this.slider = slider} {...this.settings}>
                <MenuOptionHomepage img={top} header="New IN" desc="Explore this week's latest menswear collection." theme="transparent" />
                <MenuOptionHomepage img={mid} header="Collection" desc="Get the latest and best from our autumn collection." theme="transparent" />
                <MenuOptionHomepage img={bottom} header="Accessories" desc="Accessories for Men." theme="transparent" />
          </Slider>
          </div>
        )
    }
}
