import React, { Fragment } from 'react';
import Header from './components/Layout/Header';
import Goods from './components/Goods/Goods';
import Cart from './components/Cart/Cart';

function App() {
  return (
   <Fragment>
     <Cart />
     <Header />
     <main>
      <Goods />
     </main>
   </Fragment>
  );
}

export default App;
