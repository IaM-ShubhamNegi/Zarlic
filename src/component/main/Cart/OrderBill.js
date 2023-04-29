import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import Modal from "../../ui/Modal/Modal";
import { CrossIcon } from "../../ui/ui-icons/Icons";
import classes from "./OrderBill.module.css";

const OrderBill = (props) => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleOrderBill());
    dispatch(
      cartActions.toggleCartAction({
        items: [],
        totalQuantity: 0,
        changed: false,
      })
    );
  };


  return (
    <Modal>
      <div className={classes.cart}>
        <div className={classes.cartHeader_container}>
          <button className={classes.crossBtn} onClick={toggleCartHandler}>
            <CrossIcon />
          </button>
        </div>
        <div className={classes.underline}></div>
        <div className={classes.cartItem_container}>
          <p className={classes.cartItem_paraOne}>Thank You</p>
          <p className={classes.cartItem_paraTwo}>For Ordering From Us</p>
          <p className={classes.cartItem_paraTwo}>Your order has begun, and it will soon be delivered to you.</p>
        </div>
        <div className={classes.underline}></div>
        <div className={classes.cartBtn_container}></div>
      </div>
    </Modal>
  );
};

export default OrderBill;
