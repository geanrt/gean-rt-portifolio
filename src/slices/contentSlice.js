import {createSlice} from "@reduxjs/toolkit";

import contentObject from '../content.json'

const contentSlice = createSlice({
  name: "content",
  initialState: contentObject
});

export default contentSlice.reducer;
