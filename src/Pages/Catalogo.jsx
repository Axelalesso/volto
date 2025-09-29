import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ProductList from '../Components/ProductList/ProductList'

const Catalogo = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='titulo-principal-catalogo'>Nuestos Productos</h1>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default Catalogo