import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Iphone() {
	const [iphonePage, setiphonePage] = useState([]);
	useEffect(() => {
		fetch("/iphone.json")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setiphonePage(data.results);
			});
	}, []);

	// console.log(iphonePage);
	return (
		<div >
			<section className="internal-page-wrapper top-100">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12">
							<div className="title-wraper bold"><br />Iphones</div>
							<div className="brief-description">
								The best for the brightest.
							</div>
						</div>
					</div><br /><br />
					{iphonePage.map((product, i) => {
						let id = product.product_url;
						let title = product.product_name;
						let img = product.product_img;
						let Brief = product.product_brief_description;
						let StartPrice = product.starting_price;
						let PriceRange = product.price_range;
						let productPage = "/iphone/" + id;
						let productDiv = (
							<div
								key={id}
								className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
							>
								<div
									className={`col-sm-12 col-md-6 my-auto order-${
										i % 2 === 0 ? "1" : "2"
									}`}
								>
									<div className="product-title">{title}</div>
									<div className="product-brief">{Brief}</div>
									<div className="starting-price">
										{`Starting at ${StartPrice}`}
									</div>
									<div className="monthly-price">{`the price range is ${PriceRange}`}</div>
									<div className="links-wrapper">
										<ul>
											<li>
												<Link to={productPage}>Learn more</Link>
											</li>
										</ul>
									</div>
								</div>

								<div
									className={`col-sm-12 col-md-6 order-${
										i % 2 === 0 ? "2" : "1"
									}`}
								>
									<div className="prodict-image">
										<img src={img} alt="" />
									</div>
								</div>
							</div>
						);
						return productDiv;
					})}
				</div>
			</section>
		</div>
	);
}
