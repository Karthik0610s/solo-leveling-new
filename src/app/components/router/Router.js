import { Route, Routes, BrowserRouter } from "react-router-dom";

import PR from "../router/routePath";

import MainLayout from "./../../layouts/MainLayout";
import AuthLayout from "./../../layouts/AuthLayout";

import Dashboard from "../../../pages/Dashboard/Dashboard";
import Workout from "../../../pages/Workout/Workout";
import Login from "../../../pages/Auth/login";
import Signup from "../../../pages/Auth/signup";
import Progress from "../../../pages/Progress/Progress";
import Achievements from "../../../pages/Achievements/Achievements"
import Profile from "../../../pages/Profile/Profile"



export default function Router() {
  return (
<BrowserRouter basename="/solo-leveling-new">
      <Routes>
        {/* AUTH ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path={PR.LOGIN} element={<Login />} />
          <Route path={PR.SIGNUP} element={<Signup />} />
        </Route>
           
        {/* MAIN APP ROUTES */}
        <Route element={<MainLayout />}>
          <Route path={PR.DASHBOARD} element={<Dashboard />} />
          <Route path={PR.WORKOUT} element={<Workout />} />
          <Route path={PR.PROGRESS} element={<Progress />} />
          <Route path={PR.ACHIEVEMENTS} element={<Achievements/>} />
          <Route path={PR.PROFILE} element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
