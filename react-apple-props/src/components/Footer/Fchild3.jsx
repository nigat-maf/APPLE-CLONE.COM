import React, { Component } from "react";

export default class Fchild3 extends Component {
	render() {
		return (
			<>
				<h3>{this.props.tittle3}</h3>
				<ul>
					<li>
						<a href="#">{this.props.topics1}</a>
					</li>
					<li>
						<a href="#">{this.props.topics2}</a>
					</li>
					{this.props.topics3 && (
						<li>
							<a href="#">{this.props.topics3}</a>
						</li>
					)}
				</ul>
			</>
		);
	}
}
