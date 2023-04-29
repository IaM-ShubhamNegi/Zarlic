import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
  {
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    cartIsVisible: false,
    orderBillIsVisible: false,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
          type: newItem.type,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      console.log("new item" + { newItem });
      console.log("existing item" + { existingItem });
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleOrderBill(state) {
      state.orderBillIsVisible = !state.orderBillIsVisible;
    },

    toggleCartAction(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.changed = action.payload.changed;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
