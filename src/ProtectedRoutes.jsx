import { Outlet,Navigate } from "react-router-dom";

import React from 'react'

const ProtectedRoutes = () => {
  const auth_user = JSON.parse(localStorage.getItem('user'))
  return (
    auth_user?<Outlet/>:<Navigate to='/login'/>
  )
}

export default ProtectedRoutes