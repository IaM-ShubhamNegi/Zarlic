import { useDispatch, useSelector } from "react-redux";
import Modal from "../../ui/Modal/Modal";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";
import { CrossIcon } from "../../ui/ui-icons/Icons";
import { cartActions } from "../../../store/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  const toggleOrderBillHandler = () => {
    dispatch(cartActions.toggleCart());
    dispatch(cartActions.toggleOrderBill());
  };

  const toggleCartEmpty = () => {
    dispatch(
      cartActions.toggleCartAction({
        items: [],
        totalQuantity: 0,
        changed: false,
      })
    );
    dispatch(cartActions.toggleCart());
  };

  return (
    <Modal >
      <div className={classes.cart}>
        <div className={classes.cartHeader_container}>
          <h2>Your Cart</h2>
          <button className={classes.crossBtn} onClick={toggleCartHandler}>
            <CrossIcon />
          </button>
        </div>
        <div className={classes.underline}></div>
        <div className={classes.cartItem_container}>
          {cartItems.length === 0 ? (
            <p className={classes.cartItem_empty}>Your Cart is Empty</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={{
                    id: item.id,
                    title: item.name,
                    quantity: item.quantity,
                    total: item.totalPrice,
                    price: item.price,
                    type: item.type,
                  }}
                />
              ))}
            </ul>
          )}
        </div>
        <div className={classes.underline}></div>
        <div className={classes.cartBtn_container}>
          <button
            className={`${classes.cartBtn} ${classes.cancel}`}
            onClick={toggleCartEmpty}
          >
            Cancel
          </button>
          <button disabled={cartItems.length === 0} className={`${classes.cartBtn} ${classes.order}`} onClick={toggleOrderBillHandler}>
            Order
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
