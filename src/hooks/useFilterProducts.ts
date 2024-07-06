import { useMemo } from "react";
import { FilterState } from "../types/product";
import { Product } from "../types/product";

const useFilterProducts = (data:Product[], filters:FilterState):Product[] => {
  const { sort, rating, searchQuery, isOutOfStock } = filters;

  const filteredProducts = useMemo(() => {
    let updatedProducts = data;

    if (sort) {
      updatedProducts = updatedProducts.sort((a, b) => {
        return sort === "lowToHigh" ? a.price - b.price : b.price - a.price;
      });
    }

    if (rating) {
      updatedProducts = updatedProducts.filter(
        ({ rating: productRating }) => productRating >= rating
      );
    }

    if (searchQuery) {
      updatedProducts = updatedProducts.filter(({ title }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (isOutOfStock) {
      updatedProducts = updatedProducts.filter(({ stock }) => stock === 0);
    }

    return updatedProducts;
  }, [data, sort, rating, searchQuery, isOutOfStock]);

  return filteredProducts;
};

export default useFilterProducts;
