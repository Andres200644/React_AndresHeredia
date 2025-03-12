import React from "react";
import "../assets/styles/productCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} USD</p>
      <button className="buy-btn">Agregar al Carrito</button>
    </div>
  );
}

export default ProductCard;
