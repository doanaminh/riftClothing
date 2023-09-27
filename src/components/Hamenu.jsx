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
  const [hamOpen, setHamOpen] = useState(defHamOpen);
  const handleHamOpen = (e) => {
    const ev = e.target.id;
    setHamOpen({
      ...defHamOpen,
      [e.target.id]: !hamOpen[`${ev}`],
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
      <div className={`hamnav ${open ? "" : "navClose"}`}>
        <div className="hamBg" onClick={handleOpen}></div>
        <div className="hamnavOpen">
          <ul className="topSection">
            <li>
              <a onClick={handleOpen}>close</a>
            </li>
            <li>
              <a href="">R I F T</a>
            </li>
            <li></li>
          </ul>
          <div className="hamSearch">
            <input type="text" placeholder="Search . . ." />
            <label htmlFor="">g</label>
          </div>
          <div className="hamCats">
            <ul className="collections">
              <div className="hamCat" onClick={handleHamOpen} id="collections">
                <label id="collections">Collections</label>
                <span
                  id="collections"
                  className={`plus ${hamOpen.collections ? "hidePlus" : ""}`}
                >
                  +
                </span>
                <span
                  id="collections"
                  className={`menos ${hamOpen.collections ? "showMenos" : ""}`}
                >
                  -
                </span>
              </div>
              <div
                className={`hamSubCats ${hamOpen.collections ? "colOpen" : ""}`}
              >
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
              </div>
            </ul>

            <ul className="mens">
              <div className="hamCat" onClick={handleHamOpen} id="mens">
                <label id="mens">Mens</label>
                <span id="mens" className="plus">
                  +
                </span>
                <span id="mens" className="menos">
                  -
                </span>
              </div>
              <div className={`hamSubCats ${hamOpen.mens ? "mensOpen" : ""}`}>
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
              </div>
            </ul>

            <ul className="womens">
              <div className="hamCat" onClick={handleHamOpen} id="womens">
                <label id="womens">Womens</label>
                <span id="womens" className="plus">
                  +
                </span>
                <span id="womens" className="menos">
                  -
                </span>
              </div>

              <div
                className={`hamSubCats ${hamOpen.womens ? "womensOpen" : ""}`}
              >
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
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
