import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortByPrice } from "../redux/features/filterSlice";


const Filter: React.FC = () => {

const dispatch= useDispatch()

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          {" "}
          <label htmlFor="higbh">High to Low</label>
          <input type="radio" name="high" onChange={()=>dispatch(sortByPrice("highToLow"))}  />
        </div>
        <div>
          <label htmlFor="high">Low To High</label>
          <input type="radio" name="high" onChange={()=>dispatch(sortByPrice("lowToHigh"))} />
        </div>

        <div>
          {" "}
          <label htmlFor="high">Out Of Stock</label>
          <input type="checkbox" name="high" />
        </div>
      </div>
    </>
  );
};

export default Filter;
