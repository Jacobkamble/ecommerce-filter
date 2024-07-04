import React from "react";
import { ProductCartType } from "../types/product";

interface ProductCartProps {
  productDetail: ProductCartType;
}

const ProductCart: React.FC<ProductCartProps> = ({
  productDetail: { thumbnail, title, rating, price, stock },
}) => {
  return (
    <>
      <div
        style={{
        // border:"2px solid red"
        }}
      >
        <img width={70} src={thumbnail} alt={title} />
        <h3>{title}</h3>
        <p>Price : {price}</p>
        <p>Rating : {rating}</p>
        <p>Stock : {stock}</p>
      </div>
    </>
  );
};

export default ProductCart;
