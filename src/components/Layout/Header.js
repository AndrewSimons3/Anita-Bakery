import { Fragment } from 'react';

import anitaImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
  return <Fragment>
    <header className={classes.header}>
      <h1>Anita's Bakery</h1>
      <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
      <img src={anitaImage} alt="table of Anita's baking goods!" />
    </div>
  </Fragment>
};

export default Header;