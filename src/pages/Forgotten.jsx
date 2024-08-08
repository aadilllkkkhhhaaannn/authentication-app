import React from "react";

const Forgotten = ({ theme, changeTheme }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        style={{ width: "100%" }}
        className={
          theme ? "card p-3 shadow-lg bg-danger" : "card p-3 bg-light shadow-lg"
        }
      >
        <div className={theme ? "h5 my-2 text-danger" : "h5 my-2 "}>
          Find Your Account
        </div>
        <form className="my-2">
          <h6 className="mt-2">
            Please enter your email address or mobile number to search for your
            account.
          </h6>
          <div>
            <input
              type="password"
              placeholder="Email address or mobile number"
              className="form-control mt-4"
              name="password"
              required
            />
          </div>

          <div className="button float-end mt-4">
            <button className="btn m-2 btn-secondary">Cancel</button>
            <button className="btn btn-primary">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgotten;
