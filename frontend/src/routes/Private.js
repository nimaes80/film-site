import React from "react";
import { Route, Routes } from "react-router-dom";
import Page404NotFound from "../pages/Page404NotFound";

function Private() {
	return (
		<Routes>
			<Route path="*" element={<Page404NotFound />} />


		</Routes>
	);
}

export default Private;