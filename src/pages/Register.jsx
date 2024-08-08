import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";

const Register = ({ theme, changeTheme }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnfrmpassword: "",
  });

  const { name, email, password, cnfrmpassword } = formData;

  const handlechange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cnfrmpassword) {
      toast.error("Register Succesfully!");
    }

    dispatch(registerUser(formData));
  };

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message);
    }
  }, [user, isError, message]);

  const handleClick = () => {
    const phoneNumber = "9826046890";
    const message =
      "Thank you for contacting Aadil khan! Please let us know how I can help you..";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (isLoading) {
    return (
      <h1 className="display-1 text-center text-dark">
        <div class="loader"></div>
      </h1>
    );
  }

  return (
    <>
      <div className="card p-3  shadow-lg ">
        <div className="h4 my-2 text-center">Register Here</div>
        <form className="my-2 " onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control my-2"
            required
            value={name}
            name="name"
            onChange={handlechange}
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control my-2"
            required
            value={email}
            name="email"
            onChange={handlechange}
          />
          <input
            type={showPassword ? "text" : "password"}
            style={{ paddingRight: "30px" }}
            placeholder="Password"
            className="form-control my-2"
            name="password"
            value={password}
            onChange={handlechange}
            required
          />
          <i
            className="fa-regular fa-eye"
            style={{
              position: "absolute",
              bottom: "40%",
              right: "28px",
              cursor: "pointer",
            }}
            onClick={togglePasswordVisibility}
          ></i>
          <input
            type={showPassword ? "text" : "password"}
            style={{ paddingRight: "30px" }}
            placeholder="Confirm Password"
            className="form-control my-2"
            name="Confirm password"
            value={password}
            onChange={handlechange}
            required
          />
          <i
            className="fa-regular fa-eye"
            style={{
              position: "absolute",
              bottom: "25%",
              right: "28px",
              cursor: "pointer",
            }}
            onClick={togglePasswordVisibility}
          ></i>
          <button
            type="Submit"
            className={
              theme
                ? "btn btn-dark w-100 shadow-lg"
                : "btn shadow-l btn-primary w-100"
            }
          >
            Register
          </button>
        </form>
      </div>
      <div className="text-center mt-5">
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

export default Register;
