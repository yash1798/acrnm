import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"

import hamburger from "../../assets/img/hamburger.svg"
import cart from "../../assets/img/cart-bag.svg"
import cross from "../../assets/img/cross.svg"

import "../css/Navbar.css"

export default class Navbar extends Component {
	renderDesc = (category) => {
		const desc = document.getElementById(category)
		desc.classList.toggle("visible")
	}

	renderSidebar = () => {
		const menu = document.getElementById("menu")
		menu.classList.remove("visible")
	}

	render() {
		return (
			<Fragment>
				<div className="navbar">
					<div className="first-div">
						<div id="menu" className="navlinks">
							<div className="categories">
								<img src={cross} alt="cross" onClick={this.renderSidebar} />
								<h1>Categories</h1>
							</div>

							<div className="men">
								<h1 onClick={() => this.renderDesc("men")}>Men</h1>
								<div id="men" className="desc">
									<h3>New In</h3>
									<h3>Collection</h3>
									<h3>Accessories</h3>
								</div>
							</div>
							<div className="women">
								<h1 onClick={() => this.renderDesc("women")}>Women</h1>
								<div id="women" className="desc">
									<h3>New In</h3>
									<h3>Collection</h3>
									<h3>Accessories</h3>
								</div>
							</div>
							<div className="kids">
								<h1 onClick={() => this.renderDesc("kids")}>Kids</h1>
								<div id="kids" className="desc">
									<h3>New In</h3>
									<h3>Collection</h3>
									<h3>Accessories</h3>
								</div>
							</div>
						</div>
						<div className="logo">
							<img
								onClick={() => this.renderDesc("menu")}
								src={hamburger}
								alt="menu"
							/>
							<h1>DUNK</h1>
						</div>
					</div>
					<div className="cart">
						<Link className="link" to="/login">
							<h1>LOG IN</h1>
						</Link>
						<img src={cart} alt="bag" />
					</div>
				</div>
			</Fragment>
		)
	}
}
