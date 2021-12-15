
//Views
import Login from '../views/Login'
import Home from '../views/Home';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from '../views/Customers';
import Messages from '../views/Messages';



const AppRouter = () => {
    
    

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route path="clientes" element={<Customers/>}/>
                <Route path="mensajes" element={<Messages/>}/>
            </Route>
            <Route path="login" element={<Login/>}/>
          
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter