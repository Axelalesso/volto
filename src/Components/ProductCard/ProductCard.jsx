import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./productCard.css";


const ProductCard = ({ linkMp,imgPrincipal, title, local_price, online_price, id }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="product-card">
      <img className="product-image" src={imgPrincipal} alt={title} />
      <h3 className="product-title">{title}</h3>
      <div>
        <span className="local-price">Precio local :${local_price} <br/> </span>
        <span className="online-price">Precio online :${online_price}</span>
      </div>
      <button onClick={() => window.open(linkMp, "_blank")}>
        Comprar
      </button>

      <Link className="detalles" to={`/product/${id}`}>
        Ver detalle
      </Link>

      {/* Ejemplo de modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{title}</h2>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;