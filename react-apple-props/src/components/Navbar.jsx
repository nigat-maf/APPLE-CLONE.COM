import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navlinks from "./Header/Navlinks";
import logo from "../commonResource/images/icons/logo-sm.png";
import search from "../commonResource/images/icons/search-icon-sm.png";
import cart from "../commonResource/images/icons/cart-sm.png";

export default class Navbar extends Component {
	render() {
		return (
			<>
				<div className="nav-wrapper fixed-top">
					<div className="container">
						<nav className="navbar navbar-toggleable-sm navbar-expand-md">
							<button
								className="navbar-toggler navbar-toggler-right"
								type="button"
								data-toggle="collapse"
								data-target=".navbar-collapse"
							>
								☰
							</button>
							<Link className="navbar-brand mx-auto" to="">
								<img src={logo} />
							</Link>

							<div className="navbar-collapse collapse">
								<ul className="navbar-nav nav-justified w-100 nav-fill">
									<Navlinks Url="/mac" Name="mac" />
									<Navlinks Url="/iphone" Name="iphone" />
									<Navlinks Url="/ipad" Name="ipad" />
									<Navlinks Url="/watch" Name="watch" />
									<Navlinks Url="/tv" Name="tv" />
									<Navlinks Url="/music" Name="music" />
									<Navlinks Url="support" Name="support" />
									<li className="nav-item">
										<Link className="nav-link js-scroll-trigger" to="/search/">
											<img src={search} />
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link js-scroll-trigger" to="/cart/">
											<img src={cart} />
										</Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</>
		);
	}
}
