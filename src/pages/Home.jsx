import videoBg from "../assets/videoBg.mp4";
import demo1 from "../assets/demo1.jpg";
import demo2 from "../assets/demo2.jpg";
import demo3 from "../assets/demo3.jpg";
import demo4 from "../assets/demo4.jpg";
import demo5 from "../assets/demo5.jpg";
import demo6 from "../assets/demo6.jpg";
import demo7 from "../assets/demo7.jpg";
import demo8 from "../assets/demo8.jpg";

import Inventory from "./Inventory";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemList from "../components/Items";

export default function () {
  const Item = (props) => (
    <li>
      <img src={props.item.img} alt="" />
      <td>{props.item.name}</td>
      <td>{props.item.quantity}</td>
      <td>{props.item.price}</td>
    </li>
  );

  const [items, setItems] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getItems() {
      const response = await fetch(`http://localhost:5000/items`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const items = await response.json();
      setItems(items);
    }

    getItems();

    return;
  }, [items.length]);

  // This method will delete a record
  async function deleteItem(id) {
    await fetch(`http://localhost:5000/item/${id}`, {
      method: "DELETE",
    });

    const newItems = items.filter((el) => el._id !== id);
    setRecords(newItems);
  }

  // This method will map out the records on the table
  function itemList() {
    return items.map((item) => {
      return <Item item={item} key={item._id} />;
    });
  }

  return (
    <>
      <section className="Home">
        <main className="landingImage">
          <div>
            <h2>Rift for Nike Collection</h2>
            <p>
              Discover the Rift for Nike in two Canadian-inspired colorways
              celebrating our new flagship location.
            </p>
            <a href="">READ THE BLOG</a>
          </div>
        </main>

        <section className="emailListing">
          <form action="" id="newsLetter">
            <span>&mdash; Coming Soon &mdash;</span>
            <h4>Rift for Nike - Toronto</h4>
            <p>
              Sign up to receive updates on upcoming Rift releases and other
              Rift news.
            </p>
            <div>
              <input type="checkbox" id="termsCondition" />
              <label htmlFor="termsCondition">
                I agree to the terms and conditions, privacy policy and cookie
                policy.
              </label>
            </div>
            <input type="email" placeholder="ENTER YOUR EMAIL" />
            <button htmlFor="newsLetter">SUBMIT</button>
          </form>
        </section>

        <section className="storeTour">
          <video autoPlay loop muted>
            <source src={videoBg} type="video/mp4" />
          </video>
          <div className="textContent">
            <h3>Rift Toronto Flagship</h3>
            <p>
              Take a first look inside of the Rift Toronto Flagship location.
            </p>
            <a href="">VIEW THE BLOG</a>
          </div>
        </section>

        <section className="storePanel">
          {/* <ul>
            <li>
              <img src={demo1} alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src={demo2} alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src={demo3} alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src={demo4} alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src={demo5} alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src={demo6} alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src={demo7} alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
            <li>
              <img src={demo8} alt="" />
              <p className="itemName">Rift for the Nikes: Phantom Whites</p>
              <span className="itemPrice">$230</span>
            </li>
          </ul> */}
          <ItemList />
        </section>
      </section>
    </>
  );
}
