import React from "react";

import {
  ChiefImg,
  MealImg,
  QualityImg,
  RestaurantImg,
} from "../ui/Background/Background";
import { Footer } from "../ui/Footer/Footer";
import { Header } from "../ui/Header/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import classes from "./Ourstory.module.css";


const Ourstory = () => {
  AOS.init({

    duration: 500,
    easing: 'ease-in-sine',
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
      <section className={`${classes.ourstory}`}>
        <RestaurantImg className={classes.ImgBg} />

          <div className={`${classes.ourstory_base}`} data-aos="fade-up">
            <p className={classes.ourstory_heading}>OUR STORY</p>
            <p className={classes.ourstory_para}>
              Zarlic is driven by uncompromising freshness and quality, gracious{" "}
              <br />
              hospitality, and a spark of innovation.
            </p>
          </div>

      </section>
      <section className={classes.meal}>

          <div className={classes.meal_columnOne} data-aos="fade-up">
            <div className={classes.meal_base}>
              <p className={classes.meal_para1}>
                AT ZARLIC, WE WANT TO CELEBRATE WITH YOU WHILE DELIVERING AN
              </p>
              <p className={classes.meal_para2}>
                OUTSTANDING MEAL AT A GREAT VALUE
              </p>
              <p className={classes.meal_para3}>
                Our menu features signature choices made by fresh ingredients,
                our delicious food with bold flavors, and our broad selection of
                premium handcrafted delicacies. Our restaurants are made
                possible by passionate employees who are driven to delight each
                and every guest with an excellent dining experience.
              </p>
            </div>
          </div>

        <div className={classes.meal_columnTwo} data-aos="fade-up">
          <div className={classes.meal_base}>
            <MealImg />
          </div>
        </div>

      </section>
      <section className={classes.quality}>
        <QualityImg className={`${classes.ImgBg} ${classes.qualityImg}`} />


        <div className={classes.quality_columnOne} data-aos="fade-up">
          <div className={classes.quality_base}>
            <p className={classes.quality_para1}>QUALITY MEANS</p>
            <p className={classes.quality_para1}>FRESHNESS.</p>
            <p className={classes.quality_para2}>
              Fresh means carefully-selected products to provide you with an
              ideal blend of our best ingredients. Quality is an uncompromising
              commitment to providing you a meal cooked the way you like it,
              with the hospitality to match.
            </p>
          </div>
        </div>

      </section>
      <section className={classes.passion}>



        <div className={classes.passion_columnOne} data-aos="fade-up">
          <div className={classes.passion_base}>
            <ChiefImg className={classes.passionImg} />
          </div>
        </div>
        <div className={classes.passion_columnTwo} data-aos="fade-up">
          <div className={classes.passion_base}>
            <p className={classes.passion_para1}>
              <span className={classes.passion_para2}>PASSION IS PEOPLE.</span>
              &nbsp;PEOPLE WHO LOVE WHAT THEY DO AND TAKE YOUR ENJOYMENT
              PERSONALLY.
            </p>
            <p className={classes.passion_para3}>
              Passion is what to expect from the people who take your order, the
              people who craft your meal (and peek out from the kitchen to see
              your delight) and the people who are designing our comfortable,
              stylish restaurants that are destinations in themselves. Everyone
              you meet here is happy you’ve come, and they’re genuinely
              dedicated to having you visit with us frequently.
            </p>
          </div>
        </div>

      </section>
      <section className={classes.pride}>

        <div className={classes.pride_base} data-aos="fade-up"> 
          <p className={classes.pride_para1}>PRIDE MAKES US A FAMILY</p>
          <p className={classes.pride_para2}>THIS IS OUR HOME</p>
          <p className={classes.pride_para3}>YOU ARE OUR GUEST</p>
          <p className={classes.pride_para4}>
            And we will attend to your dining experience with a degree of care
            and attention to detail unrivaled anywhere. A deep desire to serve
            others is the secret weapon of a gracious host. And it’s why, at
            Zarlic, we want you to always leave with a smile.
          </p>
        </div>

      </section>
      <Footer />
    </>
  );
};

export default Ourstory;
