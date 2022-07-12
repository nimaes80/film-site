import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from '../context/UserContex';
import Public from './Public';
import Private from './Private';

function RouteManager() {
	const userContext = useContext(UserContext);



	if (userContext.isAuthenticated) {
		return (
			<Routes>
				<Route path='/dashboard/*' element={<Private />} />
				<Route path='/*' index element={<Public />} />
			</Routes>
		)
	} else {
		return (
			<Routes>
					<Route path='/*' index element={<Public />} />
			</Routes>
		)
	}

}

export default RouteManager