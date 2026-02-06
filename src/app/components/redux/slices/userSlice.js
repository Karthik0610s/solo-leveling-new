import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /* PROFILE DATA */
  username: "Hunter",
  hunterName: "Shadow Hunter",
  email: "",
  dob: "",
  password: "",

  /* GAME DATA */
  level: 1,
  xp: 0
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {

    /* XP SYSTEM */
    addXP: (state, action) => {
      state.xp += action.payload;

      if (state.xp >= 100) {
        state.level++;
        state.xp = 0;
      }
    },

    /* PROFILE UPDATE */
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    }

  }
});

export const { addXP, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
