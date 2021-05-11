import React, { Fragment } from 'react';
import Header from './components/Layout/Header';
import Goods from './components/Goods/Goods';

function App() {
  return (
   <Fragment>
     <Header />
     <main>
      <Goods />
     </main>
   </Fragment>
  );
}

export default App;
