import React, { Component } from "react";

export default class Props extends Component {
	render() {
		return (
			<>
				<section className={this.props.image}>
					<div className="container">
						<div className="new-alert">New</div>

						<div className="title-wraper bold black">
							{this.props.productName}
						</div>
						<div className={this.props.disClass}>{this.props.comment}</div>

						{this.props.inPrice && (
							<div className={this.props.color}>{this.props.inPrice}</div>
						)}
						<div className="links-wrapper">
							<ul>
								<li>
									<a href="">Learn more</a>
								</li>
								<li>
									<a href="">Order</a>
								</li>
							</ul>
						</div>

						{this.props.additional && (
							<div className="ipod-caption row">
								<div className="col-sm-12 col-md-6 text-md-right">
									{this.props.price}
								</div>
								<div className="col-sm-12 col-md-6 text-md-left">
									{this.props.additional}
								</div>
							</div>
						)}
					</div>
				</section>
			</>
		);
	}
}
