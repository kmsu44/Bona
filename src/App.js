import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drawing from "./components/Drawing";
import DrawingDetail from "./components/DrawingDetail";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Note from "./components/Note";
import Product from "./components/Product";
import sample from "./img/sample.jpeg";
import sample2 from "./img/sample2.jpeg";
import sample3 from "./img/sample3.jpeg";

function App() {
  const drawingdata = [
    {
      id: 1,
      src: sample,
      title: "새벽의 아침",
      year: "2022",
      ingredient: "캔버스에 유채",
      size: "1024x1024",
      purchase: "O",
      text: "이 작품과 같이 중앙 패널과 개폐가 가능한 좌우의 날개 부분으로이루어진 작품을 ”세 폭 제단화(트립틱)”이라고 합니다. 이것은 전패널을 횡단하는 풍경을 배경으로, 중앙에는 “그리스도 십자가형”이, 양날개 부분에는 무릎을 꿇고 기도하는 성화 기증자(기진자) 부부가 그려져있습니다. 클레베는 16세기 전반의 안트워프에서 활약한 화가로, 넓은파노라마 화면 속에 기괴한 암석 등의 세부를 세밀하게 그려 넣은 풍경묘사는 16세기 플랑드르 풍경화의 특색을 잘 보여줍니다.",
    },
    {
      id: 2,
      src: sample2,
      title: "도시의 거리",
      year: "2022",
      ingredient: "캔버스에 유채",
      size: "1024x1024",
      purchase: "O",
      text: "이 작품과 같이 중앙 패널과 개폐가 가능한 좌우의 날개 부분으로이루어진 작품을 ”세 폭 제단화(트립틱)”이라고 합니다. 이것은 전패널을 횡단하는 풍경을 배경으로, 중앙에는 “그리스도 십자가형”이, 양날개 부분에는 무릎을 꿇고 기도하는 성화 기증자(기진자) 부부가 그려져있습니다. 클레베는 16세기 전반의 안트워프에서 활약한 화가로, 넓은파노라마 화면 속에 기괴한 암석 등의 세부를 세밀하게 그려 넣은 풍경묘사는 16세기 플랑드르 풍경화의 특색을 잘 보여줍니다.",
    },
    {
      id: 3,
      src: sample3,
      title: "크리스마스 트리",
      year: "2022",
      ingredient: "캔버스에 유채",
      size: "1024x1024",
      purchase: "O",
      text: "이 작품과 같이 중앙 패널과 개폐가 가능한 좌우의 날개 부분으로이루어진 작품을 ”세 폭 제단화(트립틱)”이라고 합니다. 이것은 전패널을 횡단하는 풍경을 배경으로, 중앙에는 “그리스도 십자가형”이, 양날개 부분에는 무릎을 꿇고 기도하는 성화 기증자(기진자) 부부가 그려져있습니다. 클레베는 16세기 전반의 안트워프에서 활약한 화가로, 넓은파노라마 화면 속에 기괴한 암석 등의 세부를 세밀하게 그려 넣은 풍경묘사는 16세기 플랑드르 풍경화의 특색을 잘 보여줍니다.",
    },
    {
      id: 4,
      src: sample2,
      title: "도시의 거리",
      year: "2022",
      ingredient: "캔버스에 유채",
      size: "1024x1024",
      purchase: "O",
      text: "이 작품과 같이 중앙 패널과 개폐가 가능한 좌우의 날개 부분으로이루어진 작품을 ”세 폭 제단화(트립틱)”이라고 합니다. 이것은 전패널을 횡단하는 풍경을 배경으로, 중앙에는 “그리스도 십자가형”이, 양날개 부분에는 무릎을 꿇고 기도하는 성화 기증자(기진자) 부부가 그려져있습니다. 클레베는 16세기 전반의 안트워프에서 활약한 화가로, 넓은파노라마 화면 속에 기괴한 암석 등의 세부를 세밀하게 그려 넣은 풍경묘사는 16세기 플랑드르 풍경화의 특색을 잘 보여줍니다.",
    },
    {
      id: 5,
      src: sample2,
      title: "도시의 거리",
      year: "2022",
      ingredient: "캔버스에 유채",
      size: "1024x1024",
      purchase: "O",
      text: "이 작품과 같이 중앙 패널과 개폐가 가능한 좌우의 날개 부분으로이루어진 작품을 ”세 폭 제단화(트립틱)”이라고 합니다. 이것은 전패널을 횡단하는 풍경을 배경으로, 중앙에는 “그리스도 십자가형”이, 양날개 부분에는 무릎을 꿇고 기도하는 성화 기증자(기진자) 부부가 그려져있습니다. 클레베는 16세기 전반의 안트워프에서 활약한 화가로, 넓은파노라마 화면 속에 기괴한 암석 등의 세부를 세밀하게 그려 넣은 풍경묘사는 16세기 플랑드르 풍경화의 특색을 잘 보여줍니다.",
    },
    {
      id: 6,
      src: sample2,
      title: "도시의 거리",
      year: "2022",
      ingredient: "캔버스에 유채",
      size: "1024x1024",
      purchase: "O",
      text: "이 작품과 같이 중앙 패널과 개폐가 가능한 좌우의 날개 부분으로이루어진 작품을 ”세 폭 제단화(트립틱)”이라고 합니다. 이것은 전패널을 횡단하는 풍경을 배경으로, 중앙에는 “그리스도 십자가형”이, 양날개 부분에는 무릎을 꿇고 기도하는 성화 기증자(기진자) 부부가 그려져있습니다. 클레베는 16세기 전반의 안트워프에서 활약한 화가로, 넓은파노라마 화면 속에 기괴한 암석 등의 세부를 세밀하게 그려 넣은 풍경묘사는 16세기 플랑드르 풍경화의 특색을 잘 보여줍니다.",
    },
  ];
  const productdata = [
    {
      id: 1,
      src: sample,
      title: "Happy",
      price: 1000,
    },
    {
      id: 2,
      src: sample2,
      title: "Happy",
      price: 1000,
    },
    {
      id: 3,
      src: sample2,
      title: "Happy",
      price: 1000,
    },
    {
      id: 4,
      src: sample2,
      title: "Happy",
      price: 1000,
    },
  ];
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Drawing" element={<Drawing data={drawingdata} />} />
        <Route path="/Note" element={<Note />} />
        <Route path="/Product" element={<Product data={productdata} />} />
        <Route
          path="/DrawingDetail/:id"
          element={<DrawingDetail data={drawingdata} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
