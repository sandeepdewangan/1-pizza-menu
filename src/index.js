import React from "react";
import ReactDOM from "react-dom/client";
const pizzaData = [
  {
    name: "Veggie Delight",
    ingredients: "Onion, Olives with a little bit of cheese",
    price: 300,
    photoName: "images/vegitable.jpg",
    soldOut: false,
  },
  {
    name: "Cheese Delight",
    ingredients: "Onion, Olives with a quite a bit of cheese",
    price: 500,
    photoName: "images/cheese.jpg",
    soldOut: false,
  },
  {
    name: "Farm House",
    ingredients: "Combination of both",
    price: 600,
    photoName: "images/farmhouse.jpg",
    soldOut: false,
  },
];

function Pizza(props) {
  return (
    <div>
      <img
        src={props.pizzaObj.photoName}
        alt={props.pizzaObj.name}
        style={{ height: "100px" }}
      />
      <p>{props.pizzaObj.name}</p>
      <p>{props.pizzaObj.ingredients}</p>
      <p>{props.pizzaObj.price}</p>
    </div>
  );
}

function Header() {
  return (
    <div>
      <p>Welcome to Pizza Co.</p>
    </div>
  );
}

function Footer() {
  const hours = new Date().getHours;
  const isOpen = hours >= 10 && hours <= 5;
  console.log(isOpen);

  return (
    <div>
      <p>We are open! {new Date().toLocaleDateString()}</p>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <p>Our Menu</p>
      {pizzaData.map((pizza) => (
        <Pizza pizzaObj={pizza} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
