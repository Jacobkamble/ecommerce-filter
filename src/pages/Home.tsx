import React from "react";
import ProductlistContainer from "../components/ProductlistContainer";
import Filter from "../components/Filter";

const Home: React.FC = () => {
  return (
    <div className="home-container"
    >
      <div >
        {" "}
        <Filter />
      </div>
      <div>
        <ProductlistContainer />
      </div>
    </div>
  );
};

export default Home;
