import React from "react";
import FeedbackForm from "../main/FeedbackForm";
import { RestaurantImg } from "../ui/Background/Background";
import { Footer } from "../ui/Footer/Footer";
import { Header } from "../ui/Header/Header";
import classes from "./FeedbackPage.module.css";
import Aos from "aos";
import 'aos/dist/aos.css';

const FeedbackPage = () => {

  Aos.init({
    duration: 500,
    easing: "ease-in-sine",
    delay: 200,
  });

  return (
    <>
      <Header
        onShowbg={false}
        onIsSearchVisible={false}
        onIsSearchSlide={false}
        isBgBlack={true}
        isMenupage={false}
        isPosition={false}
      />
      <section className={classes.intro_section}>
        <RestaurantImg className={classes.ImgBg} />

        <div className={`${classes.intro_base}`} data-aos="fade-up">
          <p className={classes.intro_heading}>
            ZARLIC <br /> GUEST FEEDBACK
          </p>
          <p className={classes.intro_para}>
            Thank you for visiting the Zarlic Guest Feedback page. Whether about
            a great server, a not so great dining experience, or a question
            about anything related to us, we want to hear from you.
          </p>
        </div>
      </section>
      <section className={classes.feedback_section} data-aos="fade-up">
        <FeedbackForm/>
      </section>
      <Footer />
    </>
  );
};

export default FeedbackPage;
