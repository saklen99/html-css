import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CardProvider from './store/CardProvider';



function App() {
  const [cartshown, setcartshown] = useState(false);

  const showcarthandler = () => {
    setcartshown(true);
  };

  const hidecarthandler = () => {
    setcartshown(false);
  };
  return (
    <CardProvider>
      {cartshown && <Cart onclick={hidecarthandler}/>}
      <Header onshowcart={showcarthandler}/>
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
