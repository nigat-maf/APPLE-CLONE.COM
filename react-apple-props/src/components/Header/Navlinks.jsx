import { Component } from "react";
import { Link } from "react-router-dom";

class Navlinks extends Component {
	render() {
		return (
			<>
				<li className="nav-item">
					<Link className="nav-link js-scroll-trigger" to={this.props.Url}>
						{this.props.Name}
					</Link>
				</li>
			</>
		);
	}
}
export default Navlinks;
