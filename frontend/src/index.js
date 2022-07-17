"use-strict";
import { CssBaseline } from "@mui/material";
import { createBrowserHistory } from "history";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/js/app.js";
import "./services/pwa_service";

const App = lazy(() => import("./App"));

const renderLoader = () => <p style={{width:"100%", textAlign:"center", marginTop:200, fontSize:"larger"}} > در حال بارگیری ... </p>;


const history = createBrowserHistory({ window });


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Suspense fallback={renderLoader()}>
			<CssBaseline />
			<HistoryRouter history={history}>
				<App />
			</HistoryRouter>
		</Suspense>
	</React.StrictMode>
);



