import React, { useState } from 'react'
import Router from './routers/Router'

export default function App() {

  const [products, setProducts] = useState([]);

  return (
    <Router/>
  )
}

