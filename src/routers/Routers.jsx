import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Signup from '../pages/Signup'
import ProductDetails from '../pages/ProductDetails'
import Login from '../pages/Login'

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='home'/>} />
        <Route path='home' element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path='signup' element={<Signup/>} />
        <Route path='shop/:id' element={<ProductDetails/>} />
        <Route path='login' element={<Login/>} />
    </Routes>
  )
}

export default Routers