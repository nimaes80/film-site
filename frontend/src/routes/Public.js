import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Page404NotFound from '../pages/Page404NotFound';
import MainHeader from '../components/header/MainHeader';
import MainFooter from '../components/footer/MainFooter';
import Login from '../pages/Login';


function Public() {
	return (
		<>
			<MainHeader />
			<main>
				<Routes>
					<Route path="/" index element={<Home />} />
					<Route path="/login" index element={<Login />} />
					
					
					<Route path="*" element={<Page404NotFound />} />
				</Routes>
			</main>
			<MainFooter />
		</>
	)
}

export default Public