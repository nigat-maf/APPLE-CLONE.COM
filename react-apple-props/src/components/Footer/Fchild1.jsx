import React, { Component } from "react";

export default class Fchild1 extends Component {
	render() {
		return (
			<>
				<div className="links-wrapper-3 col-sm-12 col-md">
					<h3>{this.props.tittle}</h3>
					<ul>
						<li>
							<a href="#">{this.props.product1}</a>
						</li>
						<li>
							<a href="#">{this.props.product2}</a>
						</li>
						<li>
							<a href="#">{this.props.product3}</a>
						</li>
						<li>
							<a href="#">{this.props.product4}</a>
						</li>
						<li>
							<a href="#">{this.props.product5}</a>
						</li>
						<li>
							<a href="#">{this.props.product6}</a>
						</li>
						<li>
							<a href="#">{this.props.product7}</a>
						</li>
						<li>
							<a href="#">{this.props.product8}</a>
						</li>
						<li>
							<a href="#">{this.props.product9}</a>
						</li>
						<li>
							<a href="#">{this.props.product10}</a>
						</li>
						<li>
							<a href="#">{this.props.product11}</a>
						</li>
					</ul>
				</div>
			</>
		);
	}
}
