import { useEffect } from 'react';
//Redux
import { useDispatch } from 'react-redux';
import { checkLogin } from '../actions/auth';

//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashRouter from './DashRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//Views
import Login from '../views/Login'


const AppRouter = () => {
    
      const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token') || '';
        dispatch(checkLogin(token));
    }, [])

    return (
        <BrowserRouter basename = {process.env.PUBLIC_URL} >
        <Routes>
            <Route path="/login" element={
                <PublicRoute>
                    <Login/>
                </PublicRoute>
            }/>
            <Route path="/*" element={
                <PrivateRoute>
                    <DashRouter/>
                </PrivateRoute>
            
            }/>
          
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter