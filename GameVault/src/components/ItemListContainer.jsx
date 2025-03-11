import React from "react";
import "../assets/styles/itemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="item-list-container">
      <h1>{mensaje}</h1>
    </div>
  );
};

export default ItemListContainer;
