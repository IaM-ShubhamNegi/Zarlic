import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundImg } from "../ui/Background/Background";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  let navigate = useNavigate();
  function onExploreHandler() {
    let path = `Mainpage`;
    navigate(path);
  }

  return (
    <Fragment>
      <div className={classes.opening}>
        <h1>Zarlic</h1>
      </div>
      <div className={classes.landing}>
        <BackgroundImg className={classes.landingbg}/>
        <div className={classes.container}>
          <p className={classes.para}>
            Expect Flavours From all over India
            <br />
            Multi Cuisene Delicacies
          </p>
          <div className={classes.exploreBtn_body} onClick={onExploreHandler}>
            <button className={classes.exploreBtn} aria-label="Explore"/>
            <p className={classes.exploreBtn_pera}>Explore</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
