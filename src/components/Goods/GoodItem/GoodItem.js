import classes from './GoodItem.module.css';
import GoodItemForm from './GoodItemForm';

const GoodItem = props => {
  const price = `$${props.price.toFixed(2)}`;

  return ( 
    <li>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <GoodItemForm />
      </div>
    </li>
  )
};

export default GoodItem;