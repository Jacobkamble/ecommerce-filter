import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { filterBySearch } from "../redux/features/filterSlice";

const Searchbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(filterBySearch(value));
  };

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
    </>
  );
};

export default Searchbar;
