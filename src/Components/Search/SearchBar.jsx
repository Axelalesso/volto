import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import database from "../../config/firebase";


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
    <div className="search-container">

      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar productos, marcas o categorías…"
        />
        <button className="btn" type="submit">Buscar</button>
      </form>

      <div className="results">
        {results.length > 0 ? (
          results.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imgPrincipal} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
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
