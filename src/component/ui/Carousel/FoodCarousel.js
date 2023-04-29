import React, { useRef, useState } from "react";
import {categories} from "../../../utils/data";
import Scroll from "./Scroll";
import classes from "./FoodCarousel.module.css";
import { LeftArrowIcon, RightArrowIcon } from "../ui-icons/Icons";

export const FoodCarousel = () => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

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
  return (
    <div className={classes.scroll__body}>
      {scrollX !== 0 && (
        <button className={classes.left} onClick={() => slide(-1300)}>
          <LeftArrowIcon/>
        </button>
      )}
      <div className={classes.scroll_content} ref={scrl} onScroll={scrollCheck}>
        {categories.map((category) => (
          <Scroll
            key={category.title}
            itemId={category.title}
            title={category.title}
            src={category.src}
          />
        ))}
      </div>
      {!scrolEnd && (
        <button className={classes.right} onClick={() => slide(+1300)}>
          <RightArrowIcon/>
        </button>
      )}
    </div>
  );
};
