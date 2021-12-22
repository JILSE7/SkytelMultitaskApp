import { Route, Routes } from "react-router-dom"
import Customers from "../views/Customers"
import Home from "../views/Home"
import Messages from "../views/Messages"
import Profile from "../views/Profile"
import Stadistics from "../views/Stadistics"
import UsersManagment from "../views/UsersManagment"

const DashRouter = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route path="clientes" element={<Customers/>}/>
                <Route path="mensajes" element={<Messages/>}>
                    <Route path=":pin" element={<Messages/>}/>
                </Route>
                <Route path="perfil" element={<Profile/>}/>
                <Route path="estadisticas" element={<Stadistics/>}/>
                <Route path="gestion" element={<UsersManagment/>}/>
            </Route>
        </Routes>
        
    )
}

export default DashRouter
