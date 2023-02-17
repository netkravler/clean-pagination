import React from "react";

const ProductCard = ({ product }) => {

  const { title, price, thumbnail, brand } = product;
  return (
    <figure>
      <img src={thumbnail} alt={title} />
      <figcaption>
        <div>{brand}</div>
        <footer>{price} kr.</footer>
      </figcaption>
    </figure>
  );
};

export default ProductCard;
