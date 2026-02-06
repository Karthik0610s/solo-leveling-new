import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "progress",
  initialState: {
    weightHistory: [],
    water: 0
  },
  reducers: {
    addWeight: (state, action) => {
      state.weightHistory.push({
        value: action.payload,
        date: new Date().toLocaleDateString()
      });
    },
    addWater: state => {
      state.water += 1;
    }
  }
});

export const { addWeight, addWater } = slice.actions;
export default slice.reducer;
