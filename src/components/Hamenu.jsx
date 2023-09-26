import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const defHamOpen = {
    collections: false,
    mens: false,
    womens: false,
  };
  const [hamOpen, setHamOpen] = useState({
    open1: true,
    open2: false,
    open3: false,
  });
  const handleHamOpen = (e) => {
    console.log(e.target);
    setHamOpen({
      ...defHamOpen,
      [e.target.name]: !e.target.name,
    });
  };

  return (
    <>
      <div className="hamburgerContainer">
        <div className="hamenu" onClick={handleOpen}>
          <span>&mdash;</span>
          <span>&mdash;</span>
          <span>&mdash;</span>
        </div>
      </div>
      <div className={`hamnav ${open ? "navOpen" : "navClose"}`}>
        <ul>
          <li>
            <a onClick={handleOpen}>close</a>
          </li>
          <li>
            <a href="">logo</a>
          </li>
        </ul>
        <div className="hamSearch">
          <input type="text" placeholder="Search . . ." />
          <label htmlFor="">maglass</label>
        </div>
        <ul className="collections">
          <label htmlFor="" onClick={handleHamOpen}>
            Collections
          </label>
          <span>+</span>
          <span>-</span>
          <li>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              Rift Monday Program
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              Rift Fall 2023
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              Rift Fall Classics
            </a>
          </li>
        </ul>
        <ul className="mens">
          <label htmlFor="">Mens</label>
          <span>+</span>
          <span>-</span>
          <li>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              New Arrivals
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              Footwear
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              Apparel
            </a>
          </li>
        </ul>
        <ul className="womens">
          <label htmlFor="">Womens</label>
          <span>+</span>
          <span>-</span>
          <li>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              New Arrivals
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              Footwear
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              Apparel
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
