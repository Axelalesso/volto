import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import database from "../../config/firebase";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    try {
      const q = query(
        collection(database, "products"),
        where("title", ">=", searchQuery),
        where("title", "<=", searchQuery + "\uf8ff")
      );

      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setResults(data);
    } catch (error) {
      console.error("Error buscando productos:", error);
    }
  };

  return (
    <div className="search-bar-container">
      {/* Formulario de búsqueda */}
      <form onSubmit={handleSearch} className="search-form">
  <input
    type="text"
    placeholder="Buscar productos, marcas o categorías..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="search-input"
  />
  <button type="submit" className="search-button">
    Buscar
  </button>
</form>

      {/* Resultados */}
      <div className="results">
        {results.length > 0 ? (
          results.map((product) => (
            <div
              key={product.id}
              className="search-result-card"
              onClick={() => (window.location.href = `/product/${product.id}`)}
            >
              <img src={product.imgPrincipal} alt={product.title} />
              <div>
                <h3 className="product-search-title">{product.title}</h3>
                <p className="product-search-price">${product.online_price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron productos</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

