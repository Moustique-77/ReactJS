import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Products from './Products';
import Contact from './Contact';
import Cart from './Cart/Cart';

export default function Router() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  )
}
