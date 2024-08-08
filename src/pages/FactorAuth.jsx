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
          "About to 2 FactorAuthentication"
        </div>
        <img
          className="text-center mx-auto"
          style={{ height: "130px", width: "130px", borderRadius: "200px" }}
          src="https://cdn.mos.cms.futurecdn.net/DKnCXCBzVhrirv84RYHLg8-1200-80.jpg"
        />
        <form className="my-2">
          <div></div>
          <p className={theme ? "text-light" : "text-dark"}>
            Two-factor authentication (2FA) is a security process that requires
            users to provide two different authentication factors to verify
            their identity. These factors typically include something the user
            knows (like a password or PIN) 
          </p>
          <div className="">
            {/* <a className="m-3 float-end" style={{ cursor: "pointer" }}>
              <i
                class={
                  theme
                    ? "fa-solid fa-user-plus fa-2x text-light"
                    : "fa-solid fa-user-plus fa-2x text-black"
                }
              ></i>
            </a> */}
            {/* <a className="m-3 float-end" style={{ cursor: "pointer" }}>
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
            </a> */}
            {/* <a className="m-3 float-end" style={{ cursor: "pointer" }}>
              <i
                class={
                  theme
                    ? "fa-regular fa-heart fa-2x text-light"
                    : "fa-regular fa-heart fa-2x text-black"
                }
              ></i>
            </a> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default User;
