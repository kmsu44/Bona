import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drawing from "./components/Drawing";
import DrawingDetail from "./components/DrawingDetail";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Note from "./components/Note";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Drawing" element={<Drawing />} />
        <Route path="/Note" element={<Note />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/DrawingDetail" element={<DrawingDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
