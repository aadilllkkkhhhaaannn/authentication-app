import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgottenPassword = ({ theme, changeTheme }) => {
  const [inputValue, setInputValue] = useState("");
  // const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    // const phoneNumber = "9826046890";
    const message = "http://localhost:5173/login";
    // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    //   message
    // )}`;

    const whatsappUrl = `https://wa.me/${inputValue}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  // const sendLoginLink = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/send-login-link",
  //       { input: inputValue }
  //     );
  //     setMessage("send login link");
  //   } catch (error) {
  //     console.error("Error sending login link:", error);
  //     setMessage("Login link sent!");
  //   }
  // };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="aadil card p-3 shadow-lg">
          <div className="adil">
            <img
              style={{ height: "100px", borderRadius: "200px" }}
              src="https://st2.depositphotos.com/1537427/5927/v/450/depositphotos_59279539-stock-illustration-user-login-or-authenticate-icon.jpg"
              alt=""
            />
          </div>
          <h5 className="text-center m-2">Find Your account</h5>
          <p className="text-center">
            Enter your username or the email or phone number linked to your
            account
          </p>
          <input
            style={{ borderRadius: "8px", borderColor: "black" }}
            className="m-2"
            required
            type="text"
            placeholder="Phone number"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="btn m-2 btn-primary"
            // onClick={sendLoginLink}
            onClick={handleClick}
          >
            Send Login Link
          </button>
          <h6
            style={{ cursor: "pointer", fontSize: "15px" }}
            className="text-center d-flex align-items-center justify-content-center"
          >
            Can't reset your password?
          </h6>
          <Link style={{ textDecoration: "none" }} to={"/auth/facebook"}>
            <h5
              style={{ cursor: "pointer", fontSize: "18px", color: "black" }}
              className={theme ? "text-center text-dark" : "text-center"}
            >
              {" "}
              <i className="fa-brands fa-facebook m-2"></i>
              Log in with Facebook
            </h5>
          </Link>
          {/* {message && <p className="text-center">{message}</p>} */}
        </div>
      </div>
    </>
  );
};

export default ForgottenPassword;
