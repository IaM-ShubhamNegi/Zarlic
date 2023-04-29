import { createSlice } from "@reduxjs/toolkit";

const thankYouSlice = createSlice({
    name: 'thankyou',
    initialState: {

        thankYouIsVisible: false,

    },
    reducers: {
        toggleThankYou(state) {
            state.thankYouIsVisible = !state.thankYouIsVisible;
          },
    }
});

export const cartActions = thankYouSlice.actions;

export default thankYouSlice.reducer;