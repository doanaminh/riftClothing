import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();

  return (
    <>
      <div className="Navbar">
        <div>hamburger menu</div>
        <div>logo</div>
        <div>shopping cart</div>
      </div>
    </>
  );
}