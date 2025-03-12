import React from "react";
import "../assets/styles/itemListContainer.css";

function ItemListContainer({ message }) {
  return (
    <div className="item-list-container">
      <h2>{message}</h2>
    </div>
  );
}

export default ItemListContainer;
