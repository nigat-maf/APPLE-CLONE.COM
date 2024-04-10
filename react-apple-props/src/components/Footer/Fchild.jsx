import React, { Component } from "react";

export default class Fchild extends Component {
	render() {
		return (
			<>
				<li>
					<a href="#">{this.props.item}</a>
				</li>
			</>
		);
	}
}
