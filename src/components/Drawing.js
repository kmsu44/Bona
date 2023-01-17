import styled from "./drawing.module.css";
import sample from "../img/sample.jpeg";
import sample2 from "../img/sample2.jpeg";
import { Link } from "react-router-dom";
function Drawing(props) {
  return (
    <div className={styled.container}>
      <Link to="/DrawingDetail">
        <div className={styled.card}>
          <img src={sample} alt="HomeImg" className={styled.img} />
        </div>
      </Link>
      <div className={styled.card}>
        <img src={sample2} alt="HomeImg" className={styled.img} />
      </div>
    </div>
  );
}

export default Drawing;
