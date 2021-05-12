import classes from './AvailableGoods.module.css'
import Card from '../UI/Card';
import GoodItem from './GoodItem/GoodItem';

const DUMMY_GOODS = [
  {
    id: 'm1',
    name: 'Chocolate Chip Cookies',
    description: 'Classic and best seller',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Lemon Ricotta',
    description: 'made with love',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Red Velvet Cheesecake Brownies',
    description: 'Will you be mine?',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Pumpkin Chocolate Chip Cookies',
    description: 'Spooky good taste!',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Almond Chocolate Cheesecake',
    description: 'Nuttylicious',
    price: 18.99,
  },
  {
    id: 'm6',
    name: 'Strawberry Ricotta Cake Bars',
    description: 'mmmm...lets get fruity',
    price: 18.99,
  },
];


const AvailableGoods = () => {
  const goodsList = DUMMY_GOODS.map((good) =>  (
    <GoodItem 
      id={good.id}
      key={good.id} 
      name={good.name} 
      description={good.description} 
      price={good.price}
      />
  ));

  return (
    <section className={classes.goods}>
      <Card>
        <ul>{goodsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableGoods;