import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Fchild1 from "./Fchild1";
import Fchild from "./Fchild";
import Fchild2 from "./Fchild2";
import Fchild3 from "./Fchild3";
import Fchild4 from "./Fchild4";
import Fchild5 from "./Fchild5";

export default function Fparent() {
	useEffect(() => {
		$(document).on(function () {
			let ssize = $(window).width();
			console.log(ssize);
			console.log(typeof ssize);
			$(window).on(
				"resize"(function () {
					if (window.innerWidth < 768) {
						$(".footer-links-wrapper h3").next().hide();
						$(".footer-links-wrapper h3").removeClass("expanded");
					} else {
						$(".footer-links-wrapper h3").next().show();
					}
				})
			);

			let footSelector = $(".footer-links-wrapper h3");
			footSelector.on(function () {
				if (window.innerWidth < 768) {
					$(this).next().slideToggle();
					$(this).toggleClass("expanded");
				}
			});
		});
	}, []);
	let Products = [
		"mac",
		"ipad",
		"iphone",
		"watch",
		"tv",
		"music",
		"Airpods",
		"HomePods",
		"ipodtouch",
		"accessories",
		"Gift cards",
	];

	return (
		<>
			<footer className="footer-wrapper  me">
				<div className="container">
					<Fchild4 />
					<div className="footer-links-wrapper row">
						<div class="links-wrapper-1 col-sm-12 col-md">
							<h3>Shop and Learn</h3>
							<ul>
								{Products.map((el, index) => {
									return <Fchild item={el} />;
								})}
							</ul>
						</div>

						<Fchild2
							Cname="links-wrapper-2 col-sm-12 col-md"
							tittle1="Services"
							product1="Apple Music"
							product2="Apple News+"
							product3="Apple Tv+"
							product4="Apple Arcade"
							product5="Apple card"
							product6="icloud"
							tittle2="Account"
							product01="Manage Your Apple ID"
							product02="Apple Store Account"
							product03="iCloud.com"
						/>

						<Fchild1
							tittle="Apple Store"
							product1="Find a Store"
							product2="Genius Bar"
							product3="Today at Apple"
							product4="Apple Camp"
							product5="Field Trip"
							product6="Apple Store App"
							product7="Refurbished and Clearance"
							product8="Financing"
							product9="Apple Trade In"
							product10="Order Status"
							product11="Shopping Help"
						/>
						<div className="links-wrapper-4 col-sm-12 col-md">
							<Fchild3
								tittle3="For Business"
								topics1="Apple and Business"
								topics2="Shop for Business"
							/>
							<Fchild3
								tittle3="For Education"
								topics1="Apple and Education"
								topics2="Shop for College"
							/>
							<Fchild3
								tittle3="For Healthcare"
								topics1="Manage Your Apple ID"
								topics2="Apple Store Account"
								topics3="iCloud.com"
							/>
							<Fchild3
								tittle3="For Government"
								topics1="Apple and Education"
								topics2="Shop for College"
							/>
						</div>
						<Fchild2
							Cname="links-wrapper-5 col-sm-12 col-md"
							tittle1="Apple Values"
							product1="Find a Store"
							product2="Genius Bar"
							product3="Today at Apple"
							product4="Apple Camp"
							product5="Field Trip"
							product6="Apple Store App"
							tittle2="About Apple"
							product01="Find a Store"
							product02="Genius Bar"
							product03="Today at Apple"
							product04="Apple Camp"
							product05="Field Trip"
							product06="Apple Store App"
						/>
					</div>
					<Fchild5 />
				</div>
			</footer>
		</>
	);
}
