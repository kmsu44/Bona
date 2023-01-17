import styled from "./drawingdetail.module.css";
import { useParams } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
function DrawingDetail({ data }) {
  const id = useParams();
  const drawing = data[id.id - 1];
  const Table = ({ drawing }) => {
    return (
      <div className={styled.table}>
        <div className={styled.row}>
          <div className={styled.tabletext}>작품명</div>
          <div className={styled.tabletext}>{drawing.title}</div>
        </div>
        <div className={styled.row}>
          <div className={styled.tabletext}>제작년도</div>
          <div className={styled.tabletext}>{drawing.year}</div>
        </div>
        <div className={styled.row}>
          <div className={styled.tabletext}>재료</div>
          <div className={styled.tabletext}>{drawing.ingredient}</div>
        </div>
        <div className={styled.row}>
          <div className={styled.tabletext}>사이즈</div>
          <div className={styled.tabletext}>{drawing.size}</div>
        </div>
        <div className={styled.row}>
          <div className={styled.tabletext}>구매가능</div>
          <div className={styled.tabletext}>{drawing.purchase}</div>
        </div>
      </div>
    );
  };
  return (
    <div className={styled.container}>
      <div className={styled.content}>
        <div className={styled.box}>
          <div className={styled.titlebox}>
            <p className={styled.title}>{drawing.title}</p>
            <p className={styled.title}>{drawing.year}</p>
          </div>
          <Link to="/Drawing">
            <AiOutlineMenu className={styled.icon} />
          </Link>
        </div>
        <img src={drawing.src} alt="HomeImg" className={styled.img} />
        <Table drawing={drawing} />
        <div className={styled.textbox}>
          <p className={styled.title}>작품설명</p>
          <p className={styled.text}>{drawing.text}</p>
        </div>
      </div>
    </div>
  );
}

export default DrawingDetail;
