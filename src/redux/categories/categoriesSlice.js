import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: "coming soon",
  reducers: {
    checkStatus: () => "coming soon",
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
