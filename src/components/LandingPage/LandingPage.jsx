import { Button } from "../Common";
import "./landingPage.css";
import iphone from "../../assets/iphone.png";
import gradient from "../../assets/gradient.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="main-flex">
      <div className="left-component fade-animation">
        <h1 className="heading1">
          Track Your Crypto, <span className="heading2">Simplified.</span>
        </h1>

        <p className="info-text">
          Track crypto through a public api in real time . Visit the dashboard
          to do so!
        </p>
        <div className="btn-flex">
          <Link to={"/dashboard"}>
            <Button text={"Dashboard"} />
          </Link>
          <Button text={"Share"} outlined={true} />
        </div>
      </div>
      <div className="right-component fade-animation">
        <img src={gradient} className="gradient" />
        <img src={iphone} className="iphone bounce-animation" />
      </div>
    </div>
  );
};

export default LandingPage;
