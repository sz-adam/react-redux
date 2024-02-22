import { useDispatch } from "react-redux";

import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  
  const toggleCarthandler = () => {
    dispatch(uiActions.toogle());
  };

  return (
    <button className={classes.button} onClick={toggleCarthandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
