import { useNavigate } from "react-router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const User = ({ theme, changeTheme }) => {
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
          "About to Setting"
        </div>
        <img
          className="text-center mx-auto"
          style={{ height: "130px", width: "130px", borderRadius: "200px" }}
          src="https://i.pinimg.com/736x/a0/b6/0d/a0b60deba8fe18357fab1166011b7675.jpg"
        />
        <form className="my-2">
          <div></div>
          <p className={theme ? "text-light" : "text-dark"}>
            Settings are messages or alerts delivered to users to inform them
            about specific events, updates, or activities within an app, app,
            website, or device. They can range from simple text website, or
            device. They can range from simple text app, website, or device.
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

export default User;
