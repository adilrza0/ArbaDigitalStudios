import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AuthPage from '../Pages/AuthPage'
import Profile from '../Pages/Profile'
import PrivateRoute from './PrivateRoute'
import MyStore from '../Pages/MyStore'

export default function AllRouters() {
  return (
    <Routes>
        <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>} />
        <Route path='/mystore' element ={<PrivateRoute><MyStore/></PrivateRoute>} />
    </Routes>
  )
}
