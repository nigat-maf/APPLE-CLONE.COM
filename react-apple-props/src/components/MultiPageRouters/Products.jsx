import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four04 from "./Four04";
export default function Products() {
	const [iphonesPage, setiphonePage] = useState([]);
	const { productId } = useParams();
	console.log(productId);
	useEffect(() => {
		fetch("/iphone.json")
			.then((response) => response.json())
			.then((data) => {
				const sproduct = data.results;
				const sIphoneProduct = sproduct.filter(
					(product) => product.product_url === productId
				);
				console.log(sIphoneProduct);
				setiphonePage(sIphoneProduct);
			});
	}, [productId]);
	console.log(iphonesPage);
	if (iphonesPage.length) {
		return (
			<>
				<div>
					<section className="internal-page-wrapper top-100">
						<div className="container">
							{iphonesPage.map((product, i) => {
								let id = product.product_url;
								let title = product.product_name;
								let img = product.product_img;
								let Brief = product.product_brief_description;
								let StartPrice = product.starting_price;
								let PriceRange = product.price_range;
								let details = product.product_description;
								let productDiv = (
									<div key={id} className="bottom-100">
										<div className="row justify-content-center text-center bottom-50">
											<div className="col-12">
												<div className="title-wraper bold">
													<br />
													<br />
													{title}
												</div>
												<div className="brief-description">{Brief}</div>
											</div>
										</div>
										<br />

										<div className="justify-content-center text-center product-holder h-100">
											<div className={`col-sm-12 col-md-12 my-auto`}>
												<div className="starting-price">
													{`Starting at ${StartPrice}`}
												</div>
												<div className="monthly-price">{`the price range is ${PriceRange}`}</div>
												<div className="product-details">{details}</div>
											</div>
											<br />

											<div className={`col-sm-12 col-md-12`}>
												<div className="prodict-image">
													<img src={img} />
												</div>
											</div>
										</div>
									</div>
								);
								return productDiv;
							})}
						</div>
					</section>
				</div>
			</>
		);
	} else {
		return <Four04 />;
	}
}
