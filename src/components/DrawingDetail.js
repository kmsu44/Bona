import styled from "./drawingdetail.module.css";
import sample from "../img/sample5.jpeg";
function DrawingDetail(props) {
  return (
    <div className={styled.container}>
      <div className={styled.imgbox}>
        <img src={sample} alt="HomeImg" className={styled.img} />
      </div>
    </div>
  );
}

export default DrawingDetail;
