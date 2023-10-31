import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Products from './Products';
import Contact from './Contact';

export default function Router() {
  return (
    <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}
