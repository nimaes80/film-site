import { createContext, useReducer, useEffect } from "react";



const nullData = {
		isAuthenticated: false,
};


const UserContext = createContext(nullData);
UserContext.displayName = 'UserContext';

function reducer (state, action) {
	switch (action.type) {
		case 'login':
			return {...action.payload};
		case 'logout':
			localStorage.clear();
			return nullData;
		default:
			throw new Error();
	};
};


function UserContextProvider(props) {
	const [state, dispatch] = useReducer(reducer, nullData);
	useEffect(() => {
		const simple_raw_access = localStorage.getItem('access');
		if (simple_raw_access !== null) {
			try{
				const raw_access = simple_raw_access.split('.')
				const access = raw_access[1];
				const data = JSON.parse(atob(access));
				if (data.exp < new Date().getSeconds()){
					dispatch({type:'login', payload:{
						user: data,
						access: simple_raw_access,
						isAuthenticated:true,
					}});
				};

			} catch {
				console.log('You are not Hacker but we are!');
			};
		}
	}, []);

	return <UserContext.Provider {...props} value={{...state, toggleUser:dispatch}}  />
}



export {UserContext, UserContextProvider};