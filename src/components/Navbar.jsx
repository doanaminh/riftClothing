import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  return (
    <>
      <div className="Navbar">
        <div className="hamenu">
          <span>&mdash;</span>
          <span>&mdash;</span>
          <span>&mdash;</span>
        </div>
        <div className="logo">
          <a href="/">R I F T</a>
        </div>
        <div className="shoppingCart">cart</div>
      </div>
    </>
  );
}
