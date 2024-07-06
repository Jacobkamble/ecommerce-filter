import React from "react";
import useFetch from "../hooks/useFetch";
import useFilterProducts from "../hooks/useFilterProducts";
import { useSelector } from "react-redux";
import ProductCart from "./ProductCart";
import { StateType } from "../types/product";
import { URL } from "../data/dummy";

const ProductlistContainer: React.FC = () => {
  const { data, isLoading, error } = useFetch(URL);

  const filters = useSelector((state: StateType) => state.filter);

  const filterProducts = useFilterProducts(data, filters);

  if (!error && isLoading) {
    return <h2>Loading....</h2>;
  }

  if (!isLoading && error) {
    return <h2>Something went wrong,please try again....</h2>;
  }

  return (
    <>
      <div
      className="list-container"
      >
        {filterProducts.length > 0 &&
          filterProducts.map(
            ({ id, stock, title, thumbnail, rating, price }) => {
              return (
                <ProductCart
                  key={id}
                  productDetail={{ id, stock, title, thumbnail, rating, price }}
                />
              );
            }
          )}
      </div>
    </>
  );
};

export default ProductlistContainer;
