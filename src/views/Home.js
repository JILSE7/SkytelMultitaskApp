import React from 'react'
import { Outlet } from 'react-router'
import LayoutComponent from '../components/Layout/Layout'

const Home = () => {
    return (
       <LayoutComponent>
           hola
           <Outlet/>
       </LayoutComponent>
    )
}

export default Home
