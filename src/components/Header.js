import styled from "./header.module.css";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
function Header(props) {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((menu) => !menu);
  };
  const OpenedMenu = () => {
    return (
      <div className={styled.Menubox}>
        <Link
          to="/Drawing"
          className={styled.category}
          onClick={() => toggleMenu()}
        >
          Drawing
        </Link>
        <Link
          to="/Note"
          className={styled.category}
          onClick={() => toggleMenu()}
        >
          Note
        </Link>
        <Link
          to="/Product"
          className={styled.category}
          onClick={() => toggleMenu()}
        >
          Product
        </Link>
      </div>
    );
  };
  return (
    <div>
      <div className={styled.container}>
        <div className={styled.box}>
          <button className={styled.menubtn} onClick={() => toggleMenu()}>
            <AiOutlineMenu className={styled.icon} />
          </button>
        </div>
        <div className={styled.box}>
          <Link to="/" className={styled.title}>
            Bona's Drawing
          </Link>
        </div>
        <div className={styled.menubtn}></div>
      </div>
      <div>{menu ? <OpenedMenu /> : <div></div>}</div>
    </div>
  );
}

export default Header;
