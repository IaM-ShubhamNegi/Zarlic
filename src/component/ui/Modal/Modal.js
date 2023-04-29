import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { BackgroundImg } from "../Background/Background";

import classes from "./Modal.module.css";

const Backdrop = (props) => {

  return (
    <div className={classes.backdrop}>
      <BackgroundImg className={classes.background__img}/>
    </div>
  );
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      <div className={classes.modal_container}>
        {ReactDOM.createPortal(
          <Backdrop/>,
          portalElement
        )}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      </div>
    </Fragment>
  );
};

export default Modal;
