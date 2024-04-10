import React, { Component } from "react";

export default class Fchild2 extends Component {
	render() {
		return (
			<>
				<div className={this.props.Cname}>
					<h3>{this.props.tittle1}</h3>
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
					</ul>
					<h3>{this.props.tittle2}</h3>
					<ul>
						<li>
							<a href="#">{this.props.product01}</a>
						</li>
						<li>
							<a href="#">{this.props.product02}</a>
						</li>
						<li>
							<a href="#">{this.props.product03}</a>
						</li>
						<li>
							<a href="#">{this.props.product04}</a>
						</li>
						<li>
							<a href="#">{this.props.product05}</a>
						</li>
						<li>
							<a href="#">{this.props.product06}</a>
						</li>
					</ul>
				</div>
			</>
		);
	}
}
