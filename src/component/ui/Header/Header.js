import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../../store/cart-slice";
import { AddressSearch } from "../AddressSearchbar/AddressSearch";
import { CartIcon, UserIcon } from "../ui-icons/Icons";

import classes from "./Header.module.css";

export const Header = ({
  onShowbg,
  onIsSearchVisible,
  onIsSearchSlide,
  isBgBlack,
  isMenupage,
  isPosition,
}) => {
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  // const isCartEmpty = useSelector((state) => state.cart.changed);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  let navigate = useNavigate();
  function openMainpageHandler() {
    let path = `/Mainpage`;
    navigate(path);
  }

  function openSignuppageHandler() {
    let path = `/SignUp`;
    navigate(path);
  }

  function openLoginpageHandler() {
    let path = `/LogIn`;
    navigate(path);
  }

  return (
    <>
      <header
        className={`${classes.header} ${onShowbg && classes.show} 
        ${isPosition && classes.header_positionFixed}`}
      >
        <div className={classes.header_container}>
          {isBgBlack && <div className={classes.header_blackBackground}></div>}
          <div className={classes.header_BrandClm}>
            <div className={classes.navbrand} onClick={openMainpageHandler}>
              Zarlic
            </div>
          </div>
          <div className={classes.header_AddressbarClm}>
            <div className={classes.navsearch_container}>
              <div
                className={`${classes.navsearch} ${
                  onIsSearchSlide ? classes.slide : ""
                }`}
              >
                {onIsSearchVisible && <AddressSearch />}
              </div>
            </div>
          </div>

          <div className={classes.header_ButtonClm}>
            {!isLogin && (
              <div className={classes.authenticationBtns}>
                <button
                  className={`${classes.headbtn} ${classes.header_Btn}`}
                  onClick={openLoginpageHandler}
                  aria-label="Log In"
                >
                  <UserIcon />
                  <p>Log in</p>
                </button>
                <button
                  className={`${classes.headbtn} ${classes.header_Btn}`}
                  onClick={openSignuppageHandler}
                  aria-label="Sign In"
                >
                  <p>Sign up</p>
                </button>
              </div>
            )}
            {isLogin && (
              <div className={classes.userActionBtns}>
                <button
                  className={`${classes.Userbtn} ${classes.header_Btn}`}
                  // onClick={""}
                  aria-label="User Name"
                >
                  <UserIcon />
                  <p>UserName</p>
                </button>
                {isMenupage && (
                  <button
                    className={`${classes.Cartbtn} ${classes.header_Btn}`}
                    onClick={toggleCartHandler}
                    aria-label="open Cart"
                  >
                    {cartQuantity > 0 && (
                      <div className={classes.exclamation} />
                    )}
                    <CartIcon />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
