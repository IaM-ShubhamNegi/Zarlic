import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { NonvegIcon, VegIcon } from "../ui-icons/Icons";
import classes from "./Card.module.css";

const Card = (props) => {
const dispatch = useDispatch();
// const Items = useSelector((state) => state.cart.items);
const LogIn = useSelector((state) => state.login.isLogin);


  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.name,
        price: props.price,
        type: props.type,
      })
    );
  };

  // const seeToCartHandler = () => {

  //   console.log(Items);

  // };


  if (props.type === "veg") {
    var icon = <VegIcon className={classes.veg} />;
  } else {
    icon = <NonvegIcon className={classes.nonveg} />;
  }

  return (
    <div className={classes.card}>
      <div className={classes.card__description}>
        <div className={classes.card__stack}>
          <div className={classes.card__imgContainer}>
            <img
              className={classes.card__img}
              src={props.src}
              alt={props.name}
            />
            {icon}
          </div>
          <div className={classes.card__data}>
            <p className={classes.card__name}>{props.name}</p>
            <p className={classes.card__price}>
              {`\u20B9`} {props.price}
            </p>
          </div>
        </div>
        <div>
          {LogIn && <button className={classes.add__btn} onClick={addToCartHandler} aria-label="Add to Cart">Add</button>}
          {/* <button className={classes.add__btn} onClick={seeToCartHandler}>see</button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
