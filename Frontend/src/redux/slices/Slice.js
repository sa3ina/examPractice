import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response = await axios("http://localhost:3000/products");
    return response.data;
  }
);
export const counterSlice = createSlice({
  name: "posts",
  initialState: { data: [], loading: false, error: null, basket: [] },
  reducers: {
    addtoBasket: (state, action) => {
      const item = state.basket.find((elem) => elem.id == action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const item = state.basket.find((elem) => elem.id == action.payload.id);

      item.quantity++;
    },
    decrement: (state, action) => {
      const item = state.basket.find((elem) => elem.id == action.payload.id);
      if (item.quantity == 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, addtoBasket, decrement } = counterSlice.actions;

export default counterSlice.reducer;
