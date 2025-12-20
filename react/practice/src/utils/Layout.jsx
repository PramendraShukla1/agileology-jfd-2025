import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import NavbarNew from '../components/NavbarNew'

const Layout = () => {
  return (
    <div>
        <NavbarNew/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout