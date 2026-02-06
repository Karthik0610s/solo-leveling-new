import { createSlice } from "@reduxjs/toolkit";

const xpSlice = createSlice({
  name: "xp",
  initialState: {
    xp: 0,
    level: 1,
    achievements: []
  },
  reducers: {
    gainXP: (state, action) => {
      state.xp += action.payload;

      if (state.xp >= state.level * 100) {
        state.level += 1;
        state.xp = 0;
        state.achievements.push(`Level ${state.level} reached`);
      }
    }
  }
});

export const { gainXP } = xpSlice.actions;
export default xpSlice.reducer;
