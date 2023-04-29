import React, { useState, useEffect, useRef } from "react";
import { LocationIcon } from "../ui-icons/Icons";
import classes from "./AddressSearch.module.css";

export const AddressSearch = (props) => {
  const [activeInput, setActiveInput] = useState(false);

  const [address, setAddress] = useState("");
  const [showClear, setShowClear] = useState(false);
  const inputRef = useRef(null);

  function getAddressHandler(event) {
    setAddress(event.target.value);
  }

  const clearAddress = () => {
    setAddress("");
    inputRef.current.focus();
  };

  function toggleActive() {
    setActiveInput(true);
    inputRef.current.focus();
  }

  function toggleBlur() {
    setActiveInput(false);
    inputRef.current.blur();
  }

  useEffect(() => {
    if (address.trim() !== "") {
      setShowClear(true);
    } else {
      setShowClear(false);
    }
  }, [address]);

  // useEffect(() => {
  //   const listener = event => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       console.log("Enter key was pressed. Run your function.");
  //       event.preventDefault();
  //       // callMyFunction();
  //     }
  //   };
  //   document.addEventListener("keydown", listener);
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // }, []);

  return (
    <div
      className={
        activeInput
          ? `${classes.navsearch} ${classes.underline}`
          : classes.navsearch
      }
      onClick={toggleActive}
      onBlur={toggleBlur}
    >
      <LocationIcon />
      <input
        className={classes.input}
        id="searchInput"
        value={address}
        onChange={getAddressHandler}
        type="text"
        placeholder="Enter delivery address"
        ref={inputRef}
      />
      {showClear && (
        <button
          className={classes.address}
          id="clearbtn"
          onClick={clearAddress}
        >
          clear
        </button>
      )}
    </div>
  );
};
