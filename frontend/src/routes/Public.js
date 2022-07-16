import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainFooter from '../components/footer/MainFooter';
import MainHeader from '../components/header/MainHeader';
import Page404NotFound from '../pages/Page404NotFound';
import Home from '../pages/public/Home';
import Login from '../pages/public/Login';
import Register from '../pages/public/Register';


function Public() {
	return (
		<>
			<MainHeader />
			<main>
				<Routes>
					<Route path="/" index element={<Home />} />
					<Route path="/login" index element={<Login />} />
					<Route path="/register" index element={<Register />} />
					
					
					<Route path="*" element={<Page404NotFound />} />
				</Routes>
			</main>
			<MainFooter />
		</>
	)
}

export default Public