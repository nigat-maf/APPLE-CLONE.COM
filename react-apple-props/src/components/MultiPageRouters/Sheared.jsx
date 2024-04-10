import React from "react";
import Navbar from "../Navbar";
import Fparent from "../Footer/Fparent";
import { Outlet } from "react-router-dom";

export default function Shared() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Fparent />
		</>
	);
}
