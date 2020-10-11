import React, { Component } from 'react'

import Slider from "react-slick";

var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };

class Vertical1 extends Component {
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
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    };
  render() {
    
    return (
      <Slider ref={slider => this.slider = slider } {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    )
  }
}
export default Vertical1
