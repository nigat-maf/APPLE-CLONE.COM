import React from "react";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import Home from "./components/MultiPageRouters/Home";
import { Route, Routes } from "react-router-dom";
import Iphone from "./components/MultiPageRouters/Iphone";
import Ipade from "./components/MultiPageRouters/Ipade";
import Mac from "./components/MultiPageRouters/Mac";
import Tv from "./components/MultiPageRouters/Tv";
import Music from "./components/MultiPageRouters/Music";
import Support from "./components/MultiPageRouters/Support";
import Watch from "./components/MultiPageRouters/Watch";
import Cart from "./components/MultiPageRouters/Cart";
import Search from "./components/MultiPageRouters/Search";
import Shared from "./components/MultiPageRouters/Sheared";
import Four04 from "./components/MultiPageRouters/Four04";
import Products from "./components/MultiPageRouters/Products";
// comment
export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Shared />}>
					<Route path="/" element={<Home />} />
					<Route path="/iphone/" element={<Iphone />} />
					<Route path="/iphone/:productId" element={<Products />} />
					<Route path="/ipad" element={<Ipade />} />
					<Route path="/mac" element={<Mac />} />
					<Route path="/tv" element={<Tv />} />
					<Route path="/music" element={<Music />} />
					<Route path="/support" element={<Support />} />
					<Route path="/watch" element={<Watch />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/search" element={<Search />} />
					<Route path="*" element={<Four04 />} />
				</Route>
			</Routes>
		</>
	);
}
