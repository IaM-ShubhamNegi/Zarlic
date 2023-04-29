import React from "react";
import { useNavigate } from "react-router-dom";
import { CareerImg, JoinImg } from "../ui/Background/Background";
import { Footer } from "../ui/Footer/Footer";
import { Header } from "../ui/Header/Header";
import classes from "./CareersPage.module.css";
import Aos from "aos";
import 'aos/dist/aos.css';

const CareersPage = () => {
let navigate =useNavigate();
  function openEnquiryHandler() {
    let path = `/Apply`;
    navigate(path);
  }

  Aos.init({

    duration: 500,
    easing: 'ease-in-sine',
    delay: 200,
  });


  return (
    <div>
      <Header
        onShowbg={false}
        onIsSearchVisible={false}
        onIsSearchSlide={false}
        isBgBlack={true}
        isMenupage={false}
        isPosition={false}
      />
      <section className={classes.career_join} >
        <JoinImg className={classes.ImgBg}/>
        <div className={`${classes.ocareer_join_base}`} data-aos="fade-up">
          <p className={classes.career_join_heading}>JOIN OUR TEAM</p>
          <p className={classes.career_join_para}>We turn jobs into careers</p>
        </div>
      </section>

      <section className={classes.career_apply} data-aos="fade-up">
        <p className={classes.career_apply_heading}>CAREERS</p>
        <div className={classes.career_apply_base}>
          <div className={classes.career_apply_cloumnOne}>
            <div className={classes.career_apply_body}>
                <CareerImg />
            </div>
          </div>
          <div className={classes.career_apply_cloumnTwo}>
            <div className={classes.career_apply_body}>
              <p className={classes.career_apply_paraOne}>
                <span className={classes.career_apply_parahighlight}>
                  TEAM MEMBER
                </span>
                <br /> OPPORTUNITIES
              </p>
              <p className={classes.career_apply_paraTwo}>
                We’re looking for great people to join our team. Fresh food,
                great people and comprehensive benefits are the perfect
                ingredients for a rewarding and exciting career. In fact, we’re
                as dedicated to the personal and professional growth of every
                Team Member as we are to the freshness of our food. Whether it’s
                part-time or an entire career, we want to make sure you get
                everything you want out of your Zarlic experience. And as soon
                as you join the team you’ll notice the fun, friendly working
                environment and the variety of experience that comes with
                working at Zarlic.
              </p>
              <button className={classes.career_apply_Btn} onClick={openEnquiryHandler} aria-label="Apply for job">Apply Now</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CareersPage;
