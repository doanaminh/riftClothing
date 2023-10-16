import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Items = (props) => (
  <tr>
    <td>{props.item.name}</td>
    <td>{props.item.quantity}</td>
    <td>{props.item.price}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.item._id}`}>
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteItem(props.item._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function ItemList() {
  const [items, setItems] = useState([]);

  // This method fetches the items from the database.
  useEffect(() => {
    async function getItems() {
      const response = await fetch(`http://localhost:5050/items`);

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

  // This method will delete a item
  async function deleteitem(id) {
    await fetch(`http://localhost:5050/items/${id}`, {
      method: "DELETE",
    });

    const newItems = items.filter((el) => el._id !== id);
    setItems(newItems);
  }

  // This method will map out the items on the table
  function itemList() {
    return items.map((item) => {
      return (
        <item
          item={item}
          deleteItem={() => deleteitem(item._id)}
          key={item._id}
        />
      );
    });
  }

  // This following section will display the table with the items of individuals.
  return (
    <div>
      <h3>Item List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{itemList()}</tbody>
      </table>
    </div>
  );
}
