import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { NonvegIcon, VegIcon } from "../../ui/ui-icons/Icons";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id, type } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        type,
      })
    );
  };


  if (type === "veg") {
    var icon = <VegIcon className={classes.veg} />;
  } else {
    icon = <NonvegIcon className={classes.nonveg} />;
  }


  return (
    <li className={classes.item}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.cart_items}>
        <header>
          <h3>{title}</h3>
          <div className={classes.actions}>
            <button onClick={removeItemHandler}>-</button>
            <p>{quantity}</p>
            <button onClick={addItemHandler}>+</button>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            <span className={classes.itemprice}>
              {`\u20B9`}
              {price}
            </span>
          </div>
          <div className={classes.price}>
            {`\u20B9`}
            {total}{" "}
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
