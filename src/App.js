import { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [total, calcTotal] = useState(0);
  const [cart, updateCart] = useState({})
  const [resetKey, setResetKey] = useState(0);

  return (
    <div>
      <Title title="Japanese Menu" logo="sushiLogo.png"/>
      <Tagline motto="Sushi that serves" subtitle="we cooked"/>
      <div key={resetKey}>
        {menuItems.map(({title, description, price, imageName}) =>
        (
          <MenuItem title={title} desc={description} price={price} imgname={imageName} subtotal={total} modTotal={calcTotal} cart={cart} updateCart={updateCart} />
        ))}
        <div class="row p-3">
          <div class="col-6"><span class="itemprice">{'Subtotal: $' + total.toFixed(2)}</span></div>
          <div class="col-3"><button type="button" class="button" onClick={() => {
            if (Object.keys(cart).length === 0) {
              alert("Cart is empty!")
            } else {
              alert("Order placed!" + JSON.stringify(cart))
            }
          }}> Order </button></div>
          <div class="col-3"><button type="button" class="button" onClick={() => {
                             calcTotal(0); updateCart({}); setResetKey(resetKey + 1) }}> Clear All </button></div>
        </div>
      </div>
    </div>
  );
}

function Title({title, logo}) {
  return (
  <div class="container-fluid">
    <div class = "bg-white text-black p-5 text-center">
      <img src={logo} alt="Logo" class="logo" style={{margin: 5}}></img>
      <span class="title">{title}</span>
    </div>
  </div>);
}

function Tagline({motto, subtitle}) {
  return (
    <div>
      <div class = "bg-white text-black text-center">
      <span class="fancytext">{motto}</span>
    </div>

    <div class = "bg-white text-black mb-5 text-center">
      <span class="bigtext">{subtitle}</span>
    </div>
    </div>
  )
}

export default App;
