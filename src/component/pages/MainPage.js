import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageContentScroll from "../main/PageContentScroll";
import { AddressSearch } from "../ui/AddressSearchbar/AddressSearch";
import { BackgroundImg } from "../ui/Background/Background";
import { FoodCarousel } from "../ui/Carousel/FoodCarousel";
import { Footer } from "../ui/Footer/Footer";
import { Header } from "../ui/Header/Header";
import classes from "./MainPage.module.css";

const MainPage = () => {
  const [showBg, setShowBg] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isSearchSlide, setIsSearchSlide] = useState(false);

  useEffect(() => {
    const headerShowHandler = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setShowBg(true);
        }
        if (window.scrollY === 0) {
          setShowBg(false);
        }
        if (window.scrollY > 314) {
          setIsSearchVisible(true);
          setIsSearchSlide(true);
        } else {
          setIsSearchVisible(false);
          setIsSearchSlide(false);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", headerShowHandler);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", headerShowHandler);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <div className={classes.head}>
        <Header
          onShowbg={showBg}
          onIsSearchVisible={isSearchVisible}
          onIsSearchSlide={isSearchSlide}
          isBgBlack={false}
          isMenupage={false}
          isPosition={true}
        />
      </div>
      <section className={classes.hero}>
        <BackgroundImg className={classes.herobg} />
        <div className={classes.hero__content}>
          <h1 className={classes.hero__heading}>Order food to your door</h1>
          <div className={classes.hero__search}>
            <div className={classes.hero__searchbar}>
              <AddressSearch />
            </div>
            <Link to="/Menupage">
              <p className={classes.hero__btn}>Order Food</p>
            </Link>
          </div>
          <p className={classes.hero__para}>
            <Link to="/signup">Sign in</Link> for your recent address
          </p>
        </div>
      </section>
      <section className={classes.cuisine}>
        <p className={classes.cuisine__para}>Food we offer</p>
        <FoodCarousel />
      </section>
      <PageContentScroll/>
      <Footer />
    </>
  );
};

export default MainPage;
