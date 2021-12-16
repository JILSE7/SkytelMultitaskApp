import { Route, Routes } from "react-router-dom"
import Customers from "../views/Customers"
import Home from "../views/Home"
import Messages from "../views/Messages"

const DashRouter = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route path="clientes" element={<Customers/>}/>
                <Route path="mensajes" element={<Messages/>}/>
            </Route>
        </Routes>
        
    )
}

export default DashRouter
