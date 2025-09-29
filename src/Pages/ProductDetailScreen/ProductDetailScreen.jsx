import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/products'
import Navbar from '../../Components/Navbar/Navbar'
import './ProductDetailScreen.css'

const ProductDetailScreen = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const { product_id } = useParams()

  const getProductDetail = async () => {
    try {
      setLoading(true)
      const product_detail_response = await getProductById({ product_id })
      if (product_detail_response) {
        setProduct(product_detail_response)
        setSelectedImage(product_detail_response.imgPrincipal)
      } else {
        setError('Error al buscar producto')
      }
    } catch (err) {
      setError('Error de servidor')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  let content
  if (loading) {
    content = <h2>Cargando...</h2>
  } else if (error) {
    content = <div>{error}</div>
  } else if (!loading && !product) {
    content = <div>No encontrado</div>
  } else {
    content = (
      <div className="product-detail">
        <div className="product-image">
          <img
            className="imagen-detalle"
            src={selectedImage}
            alt={product.title}
          />

          <div className="galeria-thumbs">
            {product.galeria?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                className={`thumb ${selectedImage === img ? 'active' : ''}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h2 className="titulo_detalle">{product.title}</h2>
          <p className="texto">{product.detalles}</p>
          <p className="precio">Precio Online: ${product.online_price}</p>
          <button className='buy-button' onClick={() => window.open(product.linkMp, "_blank")}>
            Comprar
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      {content}
    </>
  )
}

export default ProductDetailScreen


