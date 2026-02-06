import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "workout",
  initialState: { history: [] },
  reducers: {
    addWorkout: (state, action) => {
      state.history.push({
        ...action.payload,
        date: new Date().toISOString()
      });
    }
  }
});

export const { addWorkout } = slice.actions;
export default slice.reducer;
