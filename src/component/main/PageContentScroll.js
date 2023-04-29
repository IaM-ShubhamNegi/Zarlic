import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpiceImg } from "../ui/Background/Background";
import { LeftArrowIcon, RightArrowIcon } from "../ui/ui-icons/Icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { AnimateOnScroll } from "./AnimateOnScroll";
import classes from "./PageContentScroll.module.css";

const PageContentScroll = () => {
  AOS.init({

    duration: 500,
    easing: 'ease-in-sine',
    delay: 200,
  });
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  let navigate = useNavigate();

// const animateCard = document.querySelectorAll(`.${classes.base}`);
// animateCard.forEach((Animcard) => observer.observe(Animcard));
// AnimateOnScroll(animateCard);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const openOurStoryPageHandler = () => {
    let path = '/OurStory'
    navigate(path);
  }

  const openCareerPageHandler = () => {
    let path = '/Careers'
    navigate(path);
  }

  const openFAQPageHandler = () => {
    let path = '/FAQ'
    navigate(path);
  }

  const openFeedbackPageHandler = () => {
    let path = '/Feedback'
    navigate(path);
  }

  return (
    <div className={classes.page}>
      <SpiceImg className={classes.ImgBg} />
      <div className={classes.PageContent}>
        {scrollX !== 0 && (
          <button className={classes.left} onClick={() => slide(-1200)}>
            <LeftArrowIcon />
          </button>
        )}

        <section
          className={classes.scrollContent}
          ref={scrl}
          onScroll={scrollCheck}
        >
          <div className={classes.card}>
            <div className={classes.base} data-aos="fade-up">
              <p className={classes.heading}>OUR STORY</p>
              <p className={classes.para}>
                Know more about us.
              </p>
              <div
                className={classes.exploreBtn_body}
                onClick={openOurStoryPageHandler}
              >
                <button className={classes.exploreBtn} aria-label="Explore our Story" />
                <p className={classes.exploreBtn_pera}>Explore</p>
              </div>
            </div>
          </div>

          <div className={classes.card}>
            <div className={classes.base} data-aos="fade-up">
              <p className={classes.heading}>JOIN OUR TEAM</p>
              <p className={classes.para}>We turn jobs into careers</p>
              <div
                className={classes.exploreBtn_body}
                onClick={openCareerPageHandler}
              >
                <button className={classes.exploreBtn} aria-label="Explore to Join Our Team"/>
                <p className={classes.exploreBtn_pera}>Explore</p>
              </div>
            </div>
          </div>

          <div className={classes.card}>
            <div className={`${classes.base}`} data-aos="fade-up">
              <p className={classes.heading}>
                FAQ
              </p>
              <p className={classes.para}>
                Our shared knowledge made available to you
              </p>
              <div
                className={classes.exploreBtn_body}
                onClick={openFAQPageHandler}
              >
                <button className={classes.exploreBtn} aria-label="Explore to FAQ"  />
                <p className={classes.exploreBtn_pera}>Explore</p>
              </div>
            </div>
          </div>

          <div className={classes.card}>
            <div className={`${classes.base}`} data-aos="fade-up">
              <p className={classes.heading}>
                FEEDBACK
              </p>
              <p className={classes.para}>
                We want to hear from you.
              </p>
              <div
                className={classes.exploreBtn_body}
                onClick={openFeedbackPageHandler}
              >
                <button className={classes.exploreBtn} aria-label="Explore to give Feedback" />
                <p className={classes.exploreBtn_pera}>Explore</p>
              </div>
            </div>
          </div>
        </section>
        {!scrolEnd && (
          <button className={classes.right} onClick={() => slide(+1200)}>
            <RightArrowIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default PageContentScroll;
