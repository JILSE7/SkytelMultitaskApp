import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({children}) => {
    const {login} = useSelector(state => state.auth);

    return login ? <Navigate to="/"/> : children;
}

export default PublicRoute
