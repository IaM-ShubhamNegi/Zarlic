import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginActions } from "../../../store/login-slice";
import useInput from "../../hooks/use-input";
import { BackgroundImg } from "../Background/Background";
import classes from "./Authentication.module.css";

const Authentication = ({ title, SignUp, LogIn, Enquiry }) => {
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
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressInputHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredconfirmPassword,
    isValid: enteredconfirmPasswordIsValid,
    hasError: confirmpasswordInputHasError,
    valueChangeHandler: confirmpasswordChangeHandler,
    inputBlurHandler: confirmpasswordBlurHandler,
    reset: resetconfirmPasswordInput,
  } = useInput((value) => value === enteredPassword);

  const {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError: valueInputHasError,
    valueChangeHandler: selectedValueChangeHandler,
    inputBlurHandler: valueBlurHandler,
    reset: resetValueInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (SignUp) {
    if (
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredPhoneIsValid &&
      enteredPasswordIsValid &&
      enteredconfirmPasswordIsValid &&
      enteredAddressIsValid
    ) {
      formIsValid = true;
    }
  } else if (LogIn) {
    if (enteredEmailIsValid && enteredPasswordIsValid) {
      formIsValid = true;
    }
  } else if (Enquiry) {
    if (
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredPhoneIsValid &&
      enteredValueIsValid
    ) {
      formIsValid = true;
    }
  }

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const SignInSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetPhoneInput();
    resetPasswordInput();
    resetconfirmPasswordInput();
    resetAddressInput();

    let path = `/LogIn`;
    navigate(path);
  };

  const LogInSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetEmailInput();
    resetPasswordInput();
    dispatch(loginActions.login());
    navigate(-1);
  };

  const EnquirySubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetValueInput();
    resetPhoneInput();
    resetValueInput();
    let path = `/Mainpage`;
    navigate(path);
  };

  if (nameInputHasError === true) {
    var nameInputClasses = `${classes.form__body} ${classes.invalid}`;
    var nameErrortext = `${classes.error_text} ${classes.error_textopcaity_hundred}`;
  } else {
    nameInputClasses = classes.form__body;
    nameErrortext = `${classes.error_text} ${classes.error_textopcaity_zero}`;
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
  if (addressInputHasError === true) {
    var addressInputClasses = `${classes.form__body} ${classes.invalid}`;
    var addressErrortext = `${classes.error_text} ${classes.error_textopcaity_hundred}`;
  } else {
    addressInputClasses = classes.form__body;
    addressErrortext = `${classes.error_text} ${classes.error_textopcaity_zero}`;
  }
  if (passwordInputHasError === true) {
    var passwordInputClasses = `${classes.form__body} ${classes.invalid}`;
    var passwordErrortext = `${classes.error_text} ${classes.error_textopcaity_hundred}`;
  } else {
    passwordInputClasses = classes.form__body;
    passwordErrortext = `${classes.error_text} ${classes.error_textopcaity_zero}`;
  }
  if (confirmpasswordInputHasError === true) {
    var confirmpasswordInputClasses = `${classes.form__body} ${classes.invalid}`;
    var confirmpasswordErrortext = `${classes.error_text} ${classes.error_textopcaity_hundred}`;
  } else {
    confirmpasswordInputClasses = classes.form__body;
    confirmpasswordErrortext = `${classes.error_text} ${classes.error_textopcaity_zero}`;
  }
  if (valueInputHasError === true) {
    var valueInputClasses = `${classes.form__body} ${classes.invalid}`;
    var valueErrortext = `${classes.error_text} ${classes.error_textopcaity_hundred}`;
  } else {
    valueInputClasses = classes.form__body;
    valueErrortext = `${classes.error_text} ${classes.error_textopcaity_zero}`;
  }

  const formButton = LogIn
    ? classes.form__actions
    : `${classes.form__actions} ${classes.form__signup}`;

  return (
    <div className={classes.form__container}>
      <BackgroundImg className={classes.form__background} />
      <div className={classes.form}>
        <p className={classes.form__title}>{title}</p>
        <form
          onSubmit={
            (SignUp && SignInSubmitHandler) ||
            (LogIn && LogInSubmitHandler) ||
            (Enquiry && EnquirySubmitHandler)
          }
        >
          {(SignUp || Enquiry) && (
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
          )}
          {(SignUp || Enquiry) && (
            <p className={nameErrortext}>User name is not valid.</p>
          )}
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
          {(SignUp || Enquiry) && (
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
          )}
          {(SignUp || Enquiry) && (
            <p className={phoneErrortext}>User phone number is not valid.</p>
          )}

          {Enquiry && (
            <div className={valueInputClasses}>
              <label htmlFor="select">Select Position</label>
              <select
                id="select"
                placeholder="Select Your Desire Position"
                onChange={selectedValueChangeHandler}
                onBlur={valueBlurHandler}
                value={enteredValue}
              >
                <option value=""></option>
                <option value="Management">Management</option>
                <option value="Staff">Staff</option>
                <option value="Support">Support</option>
              </select>
            </div>
          )}
          {Enquiry && <p className={valueErrortext}>Position is empty</p>}

          {SignUp && (
            <div className={addressInputClasses}>
              <label htmlFor="address">Your Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter Your Address"
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
                value={enteredAddress}
              />
            </div>
          )}
          {SignUp && (
            <p className={addressErrortext}>User address is not valid.</p>
          )}
          {(SignUp || LogIn) && (
            <div className={passwordInputClasses}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                value={enteredPassword}
              />
            </div>
          )}
          {(SignUp || LogIn) && (
            <p className={passwordErrortext}>User password is not valid.</p>
          )}
          {SignUp && (
            <div className={confirmpasswordInputClasses}>
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                id="confirmpassword"
                placeholder="Confirm Your Password"
                onChange={confirmpasswordChangeHandler}
                onBlur={confirmpasswordBlurHandler}
                value={enteredconfirmPassword}
              />
            </div>
          )}
          {SignUp && (
            <p className={confirmpasswordErrortext}>Password does not match.</p>
          )}
          {SignUp && (
            <div className={formButton}>
              <button disabled={!formIsValid} aria-label="Sign In">SignIn</button>
            </div>
          )}
          {LogIn && (
            <div className={formButton}>
              <button disabled={!formIsValid} aria-label="Log In">LogIn</button>
            </div>
          )}
          {LogIn && (
            <p className={classes.register}>
              Don't have an account? <Link to="/SignUp">Register</Link>
            </p>
          )}
          {Enquiry && (
            <div className={formButton}>
              <button disabled={!formIsValid} aria-label="Apply">Apply</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Authentication;
