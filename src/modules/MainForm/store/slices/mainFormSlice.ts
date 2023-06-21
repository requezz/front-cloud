import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  email: "",
};

export const mainFormSlice = createSlice({
  name: "mainForm",
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<any>) => {
      state.phone = action.payload;
    },
    setEmail: (state, action: PayloadAction<any>) => {
      state.email = action.payload;
    },
  },
});

export const { actions: mainFormActions } = mainFormSlice;

export default mainFormSlice.reducer;
