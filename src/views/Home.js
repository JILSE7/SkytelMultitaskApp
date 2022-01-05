import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation } from 'react-router';
import {FcCustomerSupport, FcMindMap} from 'react-icons/fc';

import LayoutComponent from '../components/Layout/Layout'

const Home = () => {
    const {pathname} = useLocation();
    const {countMessage} = useSelector(state => state.auth);
    
    return (
       <LayoutComponent>
           <div className='borderView'></div>
           {
               pathname === "/" && (
                   <div style={{margin:"0 auto", height:"100%", marginTop:"25px"}} className='flex justify-center'>
                    <section style={{height: "90%",width:"80%", backgroundColor:"#e6e9f2", borderRadius: "5px"}} className='flex flex-col justify-around items-center'>
                        <h1 className='sendMessageTitle'>Numero de mensajes enviados</h1>
                        <div className='w-full flex justify-around'>
                            <div className='countMessages'>
                                <FcCustomerSupport size={"4em"}/>
                                <h2 className='text-center'>{countMessage.Asesores}</h2>
                                <h3>Enviados por Asesores</h3>
                            </div>
                            <div className='countMessages'>
                                <FcMindMap size={"4em"}/>
                                <h2 className='text-center'>{countMessage.skytelcom}</h2>
                                <h3>Enviados por Skytel.com</h3>
                            </div>
                        </div>
                    </section>
                   </div>
               )
           }
            
           <Outlet/>
       </LayoutComponent>
    )
}

export default Home
