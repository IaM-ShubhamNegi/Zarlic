import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Scroll.module.css";

const Scroll = ({ title, src }) => {
  let navigate = useNavigate();
  const onclickHandler = () => {
    let path = `/menupage/#${title}`;
    navigate(path);
  };

  return (
    <>
      <div className={classes.scroll__card} onClick={onclickHandler}>
        <img className={classes.scroll__cardimg} src={src} alt={title} />
        <div className={classes.scroll__cardtext}>{title}</div>
      </div>
    </>
  );
};

export default Scroll;
