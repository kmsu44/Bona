import sample from "../img/sample.jpeg";
import styled from "./home.module.css";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
function Home(props) {
  return (
    <div className={styled.container}>
      <div className={styled.imgbox}>
        <img src={sample} alt="HomeImg" className={styled.img} />
      </div>
      <div className={styled.detailbox}>
        <div className={styled.detailcenter}>
          <a
            href="https://www.instagram.com/chaechae_drawing_/"
            className={styled.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styled.detail}>
              <AiOutlineInstagram className={styled.icon} />
              <div className={styled.textbox}>
                <p className={styled.text}>@chaechae_drawing_</p>
              </div>
            </div>
          </a>
          <a
            href="mailto:bona0901@naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styled.link}
          >
            <div className={styled.detail}>
              <AiOutlineMail className={styled.icon} />
              <div className={styled.textbox}>
                <p className={styled.text}>bona0901@naver.com</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
