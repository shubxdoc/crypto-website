import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./header.css";
import TemporaryDrawer from "./TemporaryDrawer";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">
        CryptoCapital <span style={{ color: "var(--blue)" }}>.</span>
      </h1>

      <div className="links">
        <Link to={"/"}>
          <p className="link">Home</p>
        </Link>
        <Link to={"/watchlist"}>
          <p className="link">Watchlist</p>
        </Link>
        <Link to={"/dashboard"}>
          <Button text="Dashboard" onClick={() => console.log("clk")} />
        </Link>
      </div>
      <div className="only-mobile">
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
