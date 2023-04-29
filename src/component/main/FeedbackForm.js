import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/use-input";
import classes from "./FeedbackForm.module.css";

const FeedbackForm = () => {
  let navigate = useNavigate();

  const {
    value: enteredExperience,
    isValid: enteredExperienceIsValid,
    hasError: experienceInputHasError,
    valueChangeHandler: experienceChangeHandler,
    inputBlurHandler: experienceBlurHandler,
    reset: resetExperienceInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDateInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value.length === 10);

  const {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError: valueInputHasError,
    valueChangeHandler: selectedValueChangeHandler,
    inputBlurHandler: valueBlurHandler,
    reset: resetValueInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredExperienceIsValid &&
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPhoneIsValid &&
    enteredDateIsValid &&
    enteredValueIsValid
  ) {
    formIsValid = true;
  }

  const FeedbackSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetPhoneInput();
    resetValueInput();
    resetExperienceInput();
    resetDateInput();

    let path = `/Mainpage`;
    navigate(path);
  };

  if (experienceInputHasError === true) {
    var experienceInputClasses = `${classes.form__body} ${classes.invalid}`;
    var experienceErrortext = `${classes.error_text} ${classes.error_textopcaity_hundred}`;
  } else {
    experienceInputClasses = classes.form__body;
    experienceErrortext = `${classes.error_text} ${classes.error_textopcaity_zero}`;
  }
  if (nameInputHasError === true) {
    var nameInputClasses = `${classes.form__body} ${classes.invalid}`;
    var nameErrortext = `${classes.error_text} ${classes.error_textopcaity_hundred}`;
  } else {
    nameInputClasses = classes.form__body;
    nameErrortext = `${classes.error_text} ${classes.error_textopcaity_zero}`;
  }
  if (dateInputHasError === true) {
    var dateInputClasses = `${classes.form__body} ${classes.invalid}`;
    var dateErrortext = `${classes.error_text} ${classes.error_textopcaity_hundred}`;
  } else {
    dateInputClasses = classes.form__body;
    dateErrortext = `${classes.error_text} ${classes.error_textopcaity_zero}`;
  }
  if (emailInputHasError === true) {
    var emailInputClasses = `${classes.form__body} ${classes.invalid}`;
    var emailErrortext = `${classes.error_text} ${classes.error_textopcaity_hundred}`;
  } else {
    emailInputClasses = classes.form__body;
    emailErrortext = `${classes.error_text} ${classes.error_textopcaity_zero}`;
  }
  if (phoneInputHasError === true) {
    var phoneInputClasses = `${classes.form__body} ${classes.invalid}`;
    var phoneErrortext = `${classes.error_text} ${classes.error_textopcaity_hundred}`;
  } else {
    phoneInputClasses = classes.form__body;
    phoneErrortext = `${classes.error_text} ${classes.error_textopcaity_zero}`;
  }
  if (valueInputHasError === true) {
    var valueInputClasses = `${classes.form__body} ${classes.invalid}`;
    var valueErrortext = `${classes.error_text} ${classes.error_textopcaity_hundred}`;
  } else {
    valueInputClasses = classes.form__body;
    valueErrortext = `${classes.error_text} ${classes.error_textopcaity_zero}`;
  }
  //     if (timeInputHasError === true) {
  //     var timeInputClasses = `${classes.form__body} ${classes.invalid}`;
  //     var timeErrortext = `${classes.error_text} ${classes.error_textopcaity_hundred}`;
  //   } else {
  //     timeInputClasses = classes.form__body;
  //     timeErrortext = `${classes.error_text} ${classes.error_textopcaity_zero}`;
  //   }



  return (
    <>
      <div className={classes.form}>
        <p className={classes.form__title}>Feedback</p>
        <form onSubmit={FeedbackSubmitHandler}>
          <div className={valueInputClasses}>
            <label htmlFor="select">Select Choices</label>
            <select
              id="select"
              placeholder="Select Your Desire Position"
              onChange={selectedValueChangeHandler}
              onBlur={valueBlurHandler}
              value={enteredValue}
            >
              <option value=""></option>
              <option value="Good">Great Experience</option>
              <option value="Bad">Not So Great Experience</option>
              <option value="Question">Question</option>
            </select>
          </div>
          <p className={valueErrortext}>Position is empty</p>

          <div className={experienceInputClasses}>
            <label htmlFor="experience">Your Experience</label>
            <input
              type="text"
              id="experience"
              placeholder="Enter Your Experience"
              onChange={experienceChangeHandler}
              onBlur={experienceBlurHandler}
              value={enteredExperience}
            />
          </div>
          <p className={experienceErrortext}>Experience field is empty.</p>

          <div className={dateInputClasses}>
            <label htmlFor="date">Date of Visit</label>
            <input
              type="date"
              id="date"
              placeholder="Enter Date of Visit"
              onChange={dateChangeHandler}
              onBlur={dateBlurHandler}
              value={enteredDate}
            />
          </div>
          <p className={dateErrortext}>Date field is empty.</p>

          <div>
            <div className={classes.radio_base}>
              <p className={classes.radio_para}>During what time period were you visiting:</p>
              <div className={classes.radio_Btn}>
                <label className={classes.radio_container} htmlFor="Lunch">
                  Lunch
                  <input type="radio" id="Lunch" value="Lunch" name="time" />
                  <span className={classes.radio_checkmark}></span>
                </label>

                <label className={classes.radio_container} htmlFor="Dinner">
                  Dinner
                  <input type="radio" id="Dinner" value="Dinner" name="time" />
                  <span className={classes.radio_checkmark}></span>
                </label>
              </div>
            </div>
          </div>

          <div className={nameInputClasses}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Full Name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            />
          </div>
          <p className={nameErrortext}>User name is not valid.</p>

          <div className={emailInputClasses}>
            <label htmlFor="email">Your E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your E-mail"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
          </div>
          <p className={emailErrortext}>User E-mail is not valid.</p>

          <div className={phoneInputClasses}>
            <label htmlFor="phone">Your Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter Your Phone Number"
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              value={enteredPhone}
            />
          </div>
          <p className={phoneErrortext}>User phone number is not valid.</p>

          <div className={classes.form__actions}>
            <button disabled={!formIsValid} aria-label="Submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;
