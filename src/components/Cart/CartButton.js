import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import uiActions from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const itemQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleHandler = () => {
    dispatch(uiActions.actions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemQuantity}</span>
    </button>
  );
};

export default CartButton;
