import React from "react";
import { Route, Routes } from "react-router-dom";
import MainFooter from "../components/footer/MainFooter";
import MainHeader from "../components/header/MainHeader";
import Offline from "../pages/Offline";
import Page404NotFound from "../pages/Page404NotFound";
import Activation from "../pages/public/Activation";
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";


function Public() {
	return (
		<>
			<MainHeader />
			<main>
				<Routes>
					<Route path="/" index exact element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/activation/:uid.:token" element={<Activation />} />
					
					
					<Route path="/offline/*" element={<Offline />} />
					<Route path="*" element={<Page404NotFound />} />
				</Routes>
			</main>
			<MainFooter />
		</>
	);
}

export default Public;