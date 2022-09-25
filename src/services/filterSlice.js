import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterChoose: "",
};

const filterSlice = createSlice({
  name: "filterRegion",
  initialState,
  reducers: {
    selectedFilterId: (state, action) => {
      state.filterChoose = action.payload;
    },
  },
});

export const { selectedFilterId } = filterSlice.actions;

export default filterSlice.reducer;
