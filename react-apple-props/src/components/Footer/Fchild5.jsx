import React, { Component } from "react";
import Img from "../../commonResource/images/icons/16.png";
export default class Fchild5 extends Component {
	render() {
		return (
			<>
				<div className="my-apple-wrapper">
					More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
					<a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
				</div>
				<div className="copyright-wrapper row">
					<div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
						Copyright &copy; 2020 Apple Inc. All rights reserved.
					</div>
					<div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
						<ul>
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Terms of Use</a>
							</li>
							<li>
								<a href="#">Sales and Refunds</a>
							</li>
							<li>
								<a href="#">Legal</a>
							</li>
							<li>
								<a href="#">Site Map</a>
							</li>
						</ul>
					</div>
					<div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
						<div className="flag-wrapper">
							<img src={Img} />
						</div>
						<div className="footer-country-name">United States</div>
					</div>
				</div>
			</>
		);
	}
}
