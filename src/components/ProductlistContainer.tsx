import React from "react";
import useFetch from "../hooks/useFetch";
import { URL } from "../data/dummy";
import ProductCart from "./ProductCart";

const ProductlistContainer: React.FC = () => {
  const { data, isLoading, error } = useFetch(URL);


  if (!error && isLoading) {
    return <h2>Loading....</h2>;
  }

  if (!isLoading && error) {
    return <h2>Something went wrong,please try again....</h2>;
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6,150px)",
          gap: "10px",
        }}
      >
        {data.length > 0 &&
          data.map(({ id, stock, title, thumbnail, rating, price }) => {
            return (
              <ProductCart
                key={id}
                productDetail={{ id, stock, title, thumbnail, rating, price }}
              />
            );
          })}
      </div>
    </>
  );
};

export default ProductlistContainer;
