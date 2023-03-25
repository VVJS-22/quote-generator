import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='layout'>
        <h1 style={{textAlign: 'center'}}>Quotes - Login 360</h1>
        <Outlet />
    </div>
  )
}

export default Layout