import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const token = JSON.parse(window.localStorage.getItem('token'))

  return (
    <div>
      {
        token ? <Outlet /> : <Navigate to='/' />
      }
    </div>
  )
}

export default PrivateRoute