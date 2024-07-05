import React, { useState } from "react";

const Searchbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
    </>
  );
};

export default Searchbar;
