import React, { useMemo } from "react";
import useFetch from "../hooks/useFetch";
import { URL } from "../data/dummy";
import ProductCart from "./ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { sortByPrice, filterByRating } from "../redux/features/filterSlice";

const ProductlistContainer: React.FC = () => {
  const { data, isLoading, error } = useFetch(URL);

 const {sort,rating:myRating}= useSelector(state=>state.filter )

//  console.log(state,";.;pjkjhn")

  const filterProducts = useMemo(() => {
    
    let updatedProducts = data;

   


    if (sort) {
      updatedProducts = updatedProducts.sort((a, b) => {
        return sort === "lowToHigh"
          ? a.price - b.price
          : b.price - a.price;
      });

    
    }

    if(myRating){
        updatedProducts=updatedProducts.filter(({rating})=> rating >= myRating)
    }

    console.log(updatedProducts,"upodtae")

    return updatedProducts
  }, [data,sort,myRating]);

  if (!error && isLoading) {
    return <h2>Loading....</h2>;
  }

  if (!isLoading && error) {
    return <h2>Something went wrong,please try again....</h2>;
  }

  console.log(filterProducts,"filter")
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6,150px)",
          gap: "10px",
        }}
      >
        {filterProducts.length > 0 &&
          filterProducts.map(({ id, stock, title, thumbnail, rating, price }) => {
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
