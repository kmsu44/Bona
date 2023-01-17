import styled from "./drawingdetail.module.css";
import sample from "../img/sample5.jpeg";
function DrawingDetail(props) {
  const drawing = {
    title: "새벽의 아침",
    year: "2022",
    ingredient: "캔버스에 유채",
    size: "1024x1024",
    purchase: "O",
    text: "이 작품과 같이 중앙 패널과 개폐가 가능한 좌우의 날개 부분으로이루어진 작품을 ”세 폭 제단화(트립틱)”이라고 합니다. 이것은 전패널을 횡단하는 풍경을 배경으로, 중앙에는 “그리스도 십자가형”이, 양날개 부분에는 무릎을 꿇고 기도하는 성화 기증자(기진자) 부부가 그려져있습니다. 클레베는 16세기 전반의 안트워프에서 활약한 화가로, 넓은파노라마 화면 속에 기괴한 암석 등의 세부를 세밀하게 그려 넣은 풍경묘사는 16세기 플랑드르 풍경화의 특색을 잘 보여줍니다.",
  };
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
        <div className={styled.titlebox}>
          <p className={styled.title}>{drawing.title}</p>
          <p className={styled.title}>{drawing.year}</p>
        </div>
        <img src={sample} alt="HomeImg" className={styled.img} />
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
