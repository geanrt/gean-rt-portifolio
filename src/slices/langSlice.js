import {createSlice} from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    selected: localStorage.getItem('lang')||"br"
  },
  reducers: {
    updateLang: (state, action) => {
      state.selected = action.payload
    }
  },
});

export const {updateLang} = langSlice.actions;
export default langSlice.reducer;
