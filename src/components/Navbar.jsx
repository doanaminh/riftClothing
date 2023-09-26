import { useNavigate } from "react-router-dom";
import Hamenu from "./Hamenu";

export default function () {
  const navigate = useNavigate();

  return (
    <>
      <div className="Navbar">
        <Hamenu />
        <div className="logo">
          <a href="/">R I F T</a>
        </div>
        <div className="shoppingCart">cart</div>
      </div>
    </>
  );
}
