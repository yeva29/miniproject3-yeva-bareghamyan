import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Logout from './pages/Logout';
import { Provider, useSelector } from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import user from './App'

// var user = false
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<App />} />
              <Route path='/Home' element={<Home />}/>
              <Route path='/Product/:id' element={<Product />}/>
              <Route path='/ProductList' element={<ProductList />}/>
              <Route path='/Cart' element={ <Cart />}/>
              <Route path='/Logout' element={ <Logout />}/>
              <Route path="/login" element={user == null ? <Navigate to="/" replace /> : <Login />} /> 
              <Route path="/register" element={<Register />} /> 
              {/* <Route path="/login" element={user ? <Login /> : <Home/>} /> */}
              {/* <Route path="/login" element={user ? <Navigate to="/" /> :  <Login />}  /> */}
              {/* <Route path="/register" element={user ? <Navigate to="/" /> :  <Register />}  /> */}
              {/* <Route path="/register" element={user ? <Register /> : <App/>} /> */}
              </Routes>
          </BrowserRouter>
        </PersistGate>

  </Provider>
);