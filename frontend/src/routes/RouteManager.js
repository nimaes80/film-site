import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import jwt_decode from "../utils/jwt_decode";
import Private from "./Private";
import Public from "./Public";



function RouteManager() {
	const userContext = useContext(UserContext);
	const accessToken = localStorage.getItem("access");
	const refreshToken = localStorage.getItem("refresh");

	useEffect(() => {
		// eslint-disable-next-line eqeqeq
		if (refreshToken != null && refreshToken != undefined) {
		const decodedToken = jwt_decode(refreshToken).payload;
		const data = {
				user: {
					isAuthenticated: Date.now() >= decodedToken.exp * 1000 ? false : true,
					username: decodedToken.username,
					accessToken: accessToken,
					refreshToken: refreshToken,
					user: decodedToken,
				},
			};
			userContext.toggleUser({ type: "login", payload:data});
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	console.log(userContext);
	return (
		<Routes>
			{
				userContext.isAuthenticated ? <Route exact path="/dashboard/*" element={<Private />} /> : null
			}
			<Route path="/*" index element={<Public />} />
		</Routes>
	);


}

export default RouteManager;