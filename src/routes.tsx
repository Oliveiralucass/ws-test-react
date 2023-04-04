import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import store from './app/store'
import { Product } from './pages/Product/Product'
import { NewProduct } from './pages/NewProduct/NewProduct'

export const AppRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/product/:product'} element={<Product />}/>
        <Route path={'/add-product'} element={<NewProduct />}/>
      </Routes>
    </Provider>
  </BrowserRouter>
  )
}
