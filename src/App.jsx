import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import PrivateRoutes from "./components/PrivateRoutes";
import User from "./pages/User";
import RecentLogin from "./pages/RecentLogin";
import Notification from "./pages/Notification";
import FactorAuth from "./pages/FactorAuth";
import Facebook from "./pages/Facebook";
import Forgotten from "./pages/Forgotten";
import ForgottenPassword from "./pages/ForgottenPassword";
import FeedbackApp from "./pages/FeedbackApp";
const App = () => {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    theme ? setTheme(false) : setTheme(true);
  };
  return (
    <Router>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <div className="container p-5">
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="auth/facebook"
            element={<Facebook theme={theme} changeTheme={changeTheme} />}
          />
          <Route path="auth/forgotten" element={<Forgotten />} />
          <Route
            path="/"
            element={<Home theme={theme} changeTheme={changeTheme} />}
          />
          <Route
            path="/login"
            element={<Login theme={theme} changeTheme={changeTheme} />}
          />
          <Route
            path="/register"
            element={<Register theme={theme} changeTheme={changeTheme} />}
          />
          <Route path="/auth" element={<PrivateRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path="user"
              element={<User theme={theme} changeTheme={changeTheme} />}
            />
          </Route>
          <Route
            path="/login/forgottenpassword"
            element={<ForgottenPassword />}
          />
          <Route
            path="/user"
            element={<User theme={theme} changeTheme={changeTheme} />}
          />
          <Route
            path="/recentlogin"
            element={<RecentLogin theme={theme} changeTheme={changeTheme} />}
          />
          <Route
            path="/Notification"
            element={<Notification theme={theme} changeTheme={changeTheme} />}
          />
          <Route
            path="/settings"
            element={<Settings theme={theme} changeTheme={changeTheme} />}
          />
          <Route
            path="/factorauth"
            element={<FactorAuth theme={theme} changeTheme={changeTheme} />}
          />
          <Route
            path="/feedbackapp"
            element={<FeedbackApp theme={theme} changeTheme={changeTheme} />}
          />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
