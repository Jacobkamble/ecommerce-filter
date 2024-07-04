import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  return <>
  <h2>Header
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/about"}>About</NavLink>
  </h2>
  <Outlet/>
  <h2>Footer</h2>
  </>;
};

export default AppLayout;
