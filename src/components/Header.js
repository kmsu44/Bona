import styled from "./header.module.css";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
function Header(props) {
  const Menu = () => {
    return (
      <div className={styled.Menubox}>
        <NavLink
          to="/Drawing"
          className={({ isActive }) =>
            isActive ? styled.activeStyle : styled.category
          }
        >
          Drawing
        </NavLink>
        <NavLink
          to="/Note"
          className={({ isActive }) =>
            isActive ? styled.activeStyle : styled.category
          }
        >
          Note
        </NavLink>
        <NavLink
          to="/Product"
          className={({ isActive }) =>
            isActive ? styled.activeStyle : styled.category
          }
        >
          Product
        </NavLink>
      </div>
    );
  };
  return (
    <div>
      <div className={styled.container}>
        <div className={styled.box}>
          <Link to="/" className={styled.title}>
            Bona's Drawing
          </Link>
        </div>
      </div>
      <div className={styled.menucontainer}>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
