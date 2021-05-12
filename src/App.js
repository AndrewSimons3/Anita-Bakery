import React, { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Goods from './components/Goods/Goods';
import Cart from './components/Cart/Cart';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  } 

  return (
   <Fragment>
     {cartIsShown && <Cart />}
     <Header onShowCart={showCartHandler} />
     <main>
      <Goods />
     </main>
   </Fragment>
  );
}

export default App;
