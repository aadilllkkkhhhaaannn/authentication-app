import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { loginUser } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

const Login = ({ theme, changeTheme }) => {
  const { user, isLoading, message, isError } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      toast.error("Password is Invalid!");
    }
    dispatch(loginUser(formData));
  };

  

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [user, isError, message]);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = () => {
    const phoneNumber = "9826046890";
    const message =
      "Thank you for contacting Aadil khan! Please let us know how I can help you..!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  if (isLoading) {
    return (
      <h1 className="display-1 text-center text-dark">
        {/* <i class="fas fa-circle-notch"></i>Loading..! */}
        <div class="loader"></div>
        {/* <div class="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div> */}
      </h1>
    );
  }

  return (
    <>
      <div className="card p-3 shadow-lg">
        <img
          style={{ height: "60px" }}
          src="https://appauth.io/logo/AppAuth_logo.svg"
          alt=""
        />
        <div className={theme ? "h3 my-2 text-center" : "h5 my-2 text-center"}>
          Login to Authentication
        </div>
        <form className="my-2" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="form-control my-2"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              style={{ paddingRight: "30px" }}
              placeholder="Password"
              className="form-control my-2"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <i
              className="fa-regular fa-eye"
              style={{
                position: "absolute",
                top: "30%",
                right: "10px",
                cursor: "pointer",
              }}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <button
            className={
              theme ? "btn btn-dark my-2 w-100" : "btn btn-primary my-2 w-100"
            }
          >
            Login
          </button>

          <div className={theme ? "text-center text-dark" : "text-center"}>
            Forgot your login details?
            <Link style={{ textDecoration: "none" }} to={"forgottenpassword"}>
              <h7 className={theme ? "text-center text-dark" : "text-center"}>
                {/* <span className="span">Forgot your login details?</span> */}
                Get help logging in.
              </h7>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/auth/facebook"}>
              <h5
                style={{ cursor: "pointer", fontSize: "18px" }}
                className={theme ? "text-center text-dark" : "text-center"}
              >
                {" "}
                <i sty className="fa-brands fa-facebook m-2"></i>
                Log in with Facebook
              </h5>
            </Link>
          </div>
        </form>
      </div>

      <div className="text-center mt-3">
        <div className="float-end">
          <div className="float-end">
            <img
              onClick={handleClick}
              style={{
                color: "white",
                fontSize: "32px",
                cursor: "pointer",
                height: "50px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_j6zKHu8BEYzvw9sK3O5kVj2jE5xA0NNdYw&s"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

// <i class="fa fa-whatsapp" aria-hidden="true"></i>
