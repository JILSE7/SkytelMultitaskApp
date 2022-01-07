import { useEffect, useState } from 'react';
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
import Waiting from '../components/Waiting';


const AppRouter = () => {
    
      const dispatch = useDispatch();
      const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const token = localStorage.getItem('token') || '';
        dispatch(checkLogin(token, setLoading));
    }, [dispatch]);

    if(loading) return <Waiting/>;

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