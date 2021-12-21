import React from 'react'
import { Outlet } from 'react-router'
import LayoutComponent from '../components/Layout/Layout'

const Home = () => {
    return (
       <LayoutComponent>
           <div className='borderView'></div>
           <Outlet/>
       </LayoutComponent>
    )
}

export default Home
