import styled from "./product.module.css";
import { Link } from "react-router-dom";
function Product(props) {
  const Card = ({ product }) => {
    return (
      <div className={styled.card}>
        <img src={product.src} alt="HomeImg" className={styled.img} />
        <div className={styled.textbox}>
          <p className={styled.title}>{product.title}</p>
          <p className={styled.price}>
            {product.price.toLocaleString("ko-kr")}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={styled.container}>
      <div className={styled.content}>
        {props.data.map((product, index) => (
          <Link className={styled.link} key={index}>
            <Card product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Product;
