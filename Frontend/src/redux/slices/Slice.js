import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response = await axios("http://localhost:3000/products");
    return response.data;
  }
);
export const deleteUserData = createAsyncThunk(
  "user/deleteUserData",
  async (id) => {
    await axios.delete(`http://localhost:3000/products/${id}`);
    const response = await axios("http://localhost:3000/products");
    const filtered = response.data.filter((elem) => elem.id != id);
    return filtered;
  }
);
export const postUserData = createAsyncThunk(
  "user/postUserData",
  async (newItem) => {
    const newProd = await axios.post(
      `http://localhost:3000/products/`,
      newItem
    );
    return newProd.data;
  }
);
export const counterSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: false,
    error: null,
    basket: JSON.parse(localStorage.getItem("basket")) || [],
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  },
  reducers: {
    addtoBasket: (state, action) => {
      const item = state.basket.find((elem) => elem.id == action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    increment: (state, action) => {
      const item = state.basket.find((elem) => elem.id == action.payload.id);
      item.quantity++;
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    decrement: (state, action) => {
      const item = state.basket.find((elem) => elem.id == action.payload.id);
      if (item.quantity == 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    removeFromBasket: (state, action) => {
      const item = state.basket.filter((elem) => elem.id != action.payload.id);
      state.basket = item;
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    wishlistHandle: (state, action) => {
      const item = state.wishlist.find((elem) => elem.id == action.payload.id);
      if (!item) {
        state.wishlist = [...state.wishlist, action.payload];
      } else {
        state.wishlist = state.wishlist.filter(
          (elem) => elem.id != action.payload.id
        );
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
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
      })
      .addCase(deleteUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(postUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, action.payload];
      })
      .addCase(postUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  addtoBasket,
  decrement,
  removeFromBasket,
  wishlistHandle,
} = counterSlice.actions;

export default counterSlice.reducer;
