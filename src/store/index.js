import { configureStore } from '@reduxjs/toolkit';


import loginReducer from './login-slice';
import cartReducer from './cart-slice';
import coordinateReducer from './coordinate-slice';
import thankYouReducer from './thankyou-slice';


const store = configureStore({
  reducer: { login: loginReducer, cart: cartReducer, coordinate: coordinateReducer, thankyou: thankYouReducer },
});

export default store;