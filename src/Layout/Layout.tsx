import { Outlet, } from "react-router-dom";
import Header from "../components/Header";
// import Sidebar from "./SidebarAndDropdown/Sidebar";
import { useEffect, useState } from "react";
import Sidebar from "../components/SidebarAndDropdown/Sidebar";

function Layout() {

	const [collapseNav, setCollapseNav] = useState(() => {
		// @ts-ignore
		return JSON.parse(localStorage.getItem("collapses")) || false;
	});

	useEffect(() => {
		// --- Set state of collapseNav to localStorage on pageLoad --- //
		localStorage.setItem("collapses", JSON.stringify(collapseNav));
		// --- Set state of collapseNav to localStorage on pageLoad --- //
	}, [collapseNav]);
	const toggleSideNav = () => {
		setCollapseNav(!collapseNav);
	}
	return (

		<div id="screen-wrapper">
			<Header toggleSideNav={toggleSideNav} />
			<Sidebar collapseNav={collapseNav} />
			<main>
				<Outlet />
			</main>

		</div>
	);
}

export default Layout;