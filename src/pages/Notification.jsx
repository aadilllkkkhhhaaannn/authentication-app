import { useNavigate } from "react-router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const User = ({ theme, changeTheme }) => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  //  const { user } = useSelector((state) => state.auth);

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
          "About to Notification"
        </div>

        <img
          className="text-center mx-auto"
          style={{ height: "130px", width: "130px", borderRadius: "200px" }}
          src="https://i.pinimg.com/474x/0a/9b/cf/0a9bcff7e1ab1450fea861d10f1034a9.jpg"
        />
        <h6
          className={
            theme
              ? "list-group-item text-secondary"
              : "list-group-item text-secondary"
          }
        >
          <div style={{ cursor: "not-allowed" }} className="btn btn-dark sm">
          DISABLED
          </div>
          {/* Some times for notifications is Disabled{" "} */}
          {/* <i style={{ color: "black" }} class="fa-solid fa-ban"></i> */}
        </h6>
        <form className="my-2">
          <div></div>
          <p className={theme ? "text-light" : "text-dark"}>
            Notifications are messages or alerts delivered to users to inform
            them about specific events, updates, or activities within an app,
            website, or device. They can range from simple text notifications
            {/* more interactive prompts, typically appearing on screen or through
            other communication channels like email or push notifications on
            mobile devices. */}
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
