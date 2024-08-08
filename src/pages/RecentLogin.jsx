import { useNavigate } from "react-router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const RecentLogin = ({ theme, changeTheme }) => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <>
      <div
        className={theme ? "card p-3 shadow-lg bg-black" : "card p-3 shadow-lg"}
      >
        <div
          className={
            theme ? "h6 my-2 text-center text-light" : "h6 my-2 text-center"
          }
        >
          "About to Login"
        </div>
        <img
          className="text-center mx-auto"
          style={{ height: "130px", width: "130px", borderRadius: "200px" }}
          src="https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg"
        />
        <h1
          className={
            theme ? "h4 list-group-item text-light" : "h4 list-group-item"
          }
        >
          Recent Logins
        </h1>
        <div
          className={theme ? "list-group-item text-light" : "list-group-item"}
        >
          vivek@gmail.com
        </div>
        <div
          className={theme ? "list-group-item text-light" : "list-group-item"}
        >
          anam@gmail.com
        </div>
        <div
          className={theme ? "list-group-item text-light" : "list-group-item"}
        >
          uzair@gmail.com
        </div>
        <form className="my-2">
          <div></div>
          <p className={theme ? "text-light" : "text-dark"}>
            To log in, Notifications are messages or alerts delivered to users
            to inform them about specific events, updates, or activities within
            an app, website,
            {/* assistance. log in to access additional features and personalized
            settings. Logging in ensures a more tailored and secure user
            experience. */}
          </p>
          {/* <div className="">
            <a className="m-3 float-end" style={{ cursor: "pointer" }}>
              <i
                class={
                  theme
                    ? "fa-solid fa-user-plus fa-2x text-light"
                    : "fa-solid fa-user-plus fa-2x text-black"
                }
              ></i>
            </a>
            <a className="m-3 float-end" style={{ cursor: "pointer" }}>
              <i
                class={
                  theme
                    ? "fa-solid fa-share-nodes fa-2x text-light"
                    : "fa-solid fa-share-nodes fa-2x text-black"
                }
              ></i>
            </a>
            <a className="m-3 float-end" style={{ cursor: "pointer" }}>
              <i
                class={
                  theme
                    ? "fa-regular fa-comment fa-2x text-light"
                    : "fa-regular fa-2x fa-comment text-black"
                }
              ></i>
            </a>
            <a className="m-3 float-end" style={{ cursor: "pointer" }}>
              <i
                class={
                  theme
                    ? "fa-regular fa-heart fa-2x text-light"
                    : "fa-regular fa-heart fa-2x text-black"
                }
              ></i>
            </a>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default RecentLogin;
