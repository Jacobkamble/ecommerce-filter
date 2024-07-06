import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  sortByPrice,
  filterByRating,
  filterByStock,
} from "../redux/features/filterSlice";
import Searchbar from "./Searchbar";

const Filter: React.FC = () => {

  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  const handleRating = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRating(value);
    dispatch(filterByRating(value));
  };

  return (
    <>
      <div
       className="flex"
      >
        <div>
          <Searchbar />
        </div>
        <div>
          {" "}
          <label htmlFor="higbh">High to Low</label>
          <input
            type="radio"
            name="high"
            onChange={() => dispatch(sortByPrice("highToLow"))}
          />
        </div>
        <div>
          <label htmlFor="high">Low To High</label>
          <input
            type="radio"
            name="high"
            onChange={() => dispatch(sortByPrice("lowToHigh"))}
          />
        </div>

        <div>
          {" "}
          <label htmlFor="high">Out Of Stock</label>
          <input
            type="checkbox"
            name="high"
            onChange={() => dispatch(filterByStock())}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="high">Rating</label>
          <input
            type="range"
            name="high"
            min={0}
            max={5}
            value={rating}
            onChange={handleRating}
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
