import { createContext, useReducer } from "react";



const nullData = {
    isAuthenticated: false,
};


const UserContex = createContext(nullData);
UserContex.displayName = 'UserContext';

const reducer = (state, action) => {

};


function UserContexProvider(props) {
    const [state, dispatch] = useReducer(nullData, reducer);
  return <UserContex.Provider {...props} value={{...state, toggleUser:dispatch}}  />
}



export {UserContex, UserContexProvider};