// Hooks
import { useEffect, useState } from "react";
import axios from "axios";
// Images
import pauseDesktop from "../../images/pattern-divider-desktop.svg";
import pauseMobile from "../../images/pattern-divider-mobile.svg";
import dice from "../../images/icon-dice.svg";
// Styles
import "./index.css";

const index = () => {
  const [advice, setAdvice] = useState([]);

  async function fetchAdvice() {
    try {
      const data = await axios.get("https://api.adviceslip.com/advice");
      // console.log(data.data.slip);
      setAdvice(data.data.slip);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container">
      <h1>Advice #{advice.id}</h1>
      <p>{advice.advice}</p>
      <picture>
        <source media="(min-width: 768px)" srcSet={pauseDesktop} />
        <img src={pauseMobile} alt="" />
      </picture>

      <div>
        <button onClick={fetchAdvice}>
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  );
};

export default index;
