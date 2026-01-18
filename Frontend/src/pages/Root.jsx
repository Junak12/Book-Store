import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const Root = () => {
  return (
    <div className='px-8 xl:px-[120px] xl:mx-auto bg-gray-200/30'>
        <div className='py-4'>
            <Navbar />
        </div>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default Root