import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import workoutReducer from "../slices/workoutSlice";
import xpReducer from "../slices/xpSlice";
import progressReducer from "../slices/progressSlice";


export default configureStore({
  reducer: {
    auth: authReducer,
    workout: workoutReducer,
    xp: xpReducer,
    progress: progressReducer,

  }
});
