import React from "react";
import { Link } from "react-router-dom";
import { RestaurantImg } from "../ui/Background/Background";
import { Footer } from "../ui/Footer/Footer";
import { Header } from "../ui/Header/Header";
import classes from "./FaqPage.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const FaqPage = () => {
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
            FREQUENTLY ASKED <br /> QUESTIONS
          </p>
          <p className={classes.intro_para}>
            Our shared knowledge made available to you
          </p>
        </div>
      </section>
      <section className={classes.question_section} data-aos="fade-up">
        <p className={classes.question_section_heading}> QUESTIONS </p>
        <div className={classes.question_section_base}>
          <p className={classes.question_section_Q}>
            {`\u00b7`} What Are Your Hours Of Operation?{" "}
          </p>
          <p className={classes.question_section_A}>
            {`\u23af`} Our standard hours of operation are: 11:00 AM - 9:00 PM{" "}
          </p>
          <p className={classes.question_section_Q}>
            {`\u00b7`} How Do I Make Reservations At Zarlic?{" "}
          </p>
          <p className={classes.question_section_A}>
            {`\u23af`} Currently we do not accept reservations online. Please{" "}
            <spam className={classes.question_section_link}>
              <Link to="/Location">Contact Us</Link>
            </spam>{" "}
            to check availability.{" "}
          </p>
          <p className={classes.question_section_Q}>
            {`\u00b7`} How Do I Apply For A Job At Zarlic?{" "}
          </p>
          <p className={classes.question_section_A}>
            {`\u23af`} We’re looking for great people to join our growing team,
            and working at Zarlic is more than just a job, it’s an opportunity
            to develop your professional skills. If you would like to pursue an
            opportunity at a unique place where “Quality, Passion and Pride” is
            not only a commitment but also a benefit, please visit{" "}
            <spam className={classes.question_section_link}>
              <Link to="/Careers">Career Page</Link>
            </spam>{" "}
            to apply. You may also visit us at our restaurant to apply for an
            hourly position.{" "}
          </p>
          <p className={classes.question_section_Q}>
            {`\u00b7`} How Do I Get A Copy Of My Favorite Zarlic Recipes?
          </p>
          <p className={classes.question_section_A}>
            {`\u23af`} Due to legal binding agreements, we are unable to
            disclose any proprietary information regarding our recipes and
            ingredients. We invite you to join us for a high-quality, casual
            dining experience to enjoy the signature dishes and unique flavors
            at Zarlic!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FaqPage;
