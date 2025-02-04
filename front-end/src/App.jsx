import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import USerSignUp from "./pages/USerSignUp";
import CaptianLogin from "./pages/CaptianLogin";
import CaptianSignUp from "./pages/CaptianSignUp";
import Main from "./pages/Main";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import USerLOgout from "./pages/USerLOgout";
import CaptianHome from "./pages/CaptianHome";
import CaptianProtectedWrapper from "./pages/CaptianProtectedWrapper";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<USerSignUp />} />
        <Route path="/captian-login" element={<CaptianLogin />} />
        <Route path="/captian-signup" element={<CaptianSignUp />} />

        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Main />
            </UserProtectedWrapper>
          }
        />

        <Route
          path="/user/logout"
          element={
            <UserProtectedWrapper>
              <USerLOgout />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/captian-home"
          element={
            <CaptianProtectedWrapper>
              <CaptianHome />
            </CaptianProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
