import React, { Component } from "react";
import Props from "./SecondTwoSections/Props";

export default class IpadMacSection extends Component {
	render() {
		return (
			<>
				<Props
					image="first-hightlight-wrapper"
					productName="iPad Pro "
					price="iPad Pro available starting 3.25"
					additional="Magic Keyboard coming in May"
				/>
				<Props
					image="second-hightlight-wrapper"
					productName="MacBook Air"
					disClass="description-wrapper black"
					comment="Twice the speed. Twice the storage."
					color="price-wrapper grey"
					inPrice="From $999."
				/>
			</>
		);
	}
}
