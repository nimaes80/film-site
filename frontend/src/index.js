import { CssBaseline } from '@mui/material';
import { createBrowserHistory } from "history";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import App from './App';
import './assets/css/style.css';
import './assets/js/app.js';


const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<CssBaseline />
		<HistoryRouter history={history}>
			<App />
		</HistoryRouter>
	</React.StrictMode>
);

