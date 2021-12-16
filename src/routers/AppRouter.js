//Redux
import { useSelector } from 'react-redux';

//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Views
import Login from '../views/Login'
import Home from '../views/Home';
import Customers from '../views/Customers';
import Messages from '../views/Messages';
import DashRouter from './DashRouter';

const AppRouter = () => {
    
    

    return (
        <BrowserRouter >
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/*" element={<DashRouter/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter