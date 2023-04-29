import { createSlice } from "@reduxjs/toolkit";

const cooordinateSlice = createSlice({
  name: "coordinate",
  initialState: {
    isElementVisible: false,
    LocScrollY: 0,
    distance: 0,
  },
  reducers: {
    elementShowHandler(state,action) {
        state.distance = action.payload.distance;
        if (typeof window !== "undefined") {
            if (window.scrollY > state.distance || window.scrollY < state.distance ) {
              state.isElementVisible = true;
            } else {
                state.isElementVisible = false;
            }
            state.LocScrollY = window.scrollY;
          }
    }
  }
});

export const coordinateActions = cooordinateSlice.actions;

export default cooordinateSlice.reducer;
