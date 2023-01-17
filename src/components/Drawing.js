import styled from "./drawing.module.css";
import { Link } from "react-router-dom";
function Drawing(props) {
  return (
    <div className={styled.container}>
      {props.data.map((data, index) => (
        <Link to={`/DrawingDetail/${data.id}`} key={index}>
          <div className={styled.card}>
            <img src={data.src} alt="HomeImg" className={styled.img} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Drawing;
