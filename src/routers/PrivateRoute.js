import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {login} = useSelector(state => state.auth);

    return login ?  children : <Navigate to={"/login"}/>

}

export default PrivateRoute
