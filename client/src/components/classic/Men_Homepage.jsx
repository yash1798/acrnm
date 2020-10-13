import React, { Component } from "react"
import Slider from "react-slick"

import top from "../../assets/img/male_zara4.jpg"
import mid from "../../assets/img/male_zara5.jpg"
import bottom from "../../assets/img/male_zara6.jpg"

import next from "../../assets/img/next.svg"

import "../css/Category_Homepage.css"
import { MenuOptionHomepage } from "../functional/MenuOption_Homepage"
import RadioOff from "../../assets/img/radio-on.svg"

export default class MenHomepage extends Component {
	slide(y) {
		if (this.slider) {
			y < 0 ? this.slider.slickNext() : this.slider.slickPrev()
		}
	}

	componentDidMount() {
		window.addEventListener("wheel", (e) => {
			this.slide(e.wheelDelta)
		})
	}
	settings = {
		dots: true,
		infinite: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		className: "slides-men",
		dotsClass: "slick-dots slick-thumb",
		appendDots: (dots) => <ul> {dots} </ul>,
		customPaging: (i) => <img src={RadioOff} alt="radio" />,
		arrows: false,
	}
	render() {
		return (
			<div className="homepage-men">
				<div className="right">
					<img src={next} alt="next" />
					<h1>Women</h1>
				</div>
				<Slider ref={(slider) => (this.slider = slider)} {...this.settings}>
					<MenuOptionHomepage
						img={top}
						header="New IN"
						desc="Explore this week's latest menswear collection."
						theme="transparent"
					/>
					<MenuOptionHomepage
						img={mid}
						header="Collection"
						desc="Get the latest and best from our autumn collection."
						theme="transparent"
					/>
					<MenuOptionHomepage
						img={bottom}
						header="Accessories"
						desc="Accessories for Men."
						theme="transparent"
					/>
				</Slider>
			</div>
		)
	}
}
