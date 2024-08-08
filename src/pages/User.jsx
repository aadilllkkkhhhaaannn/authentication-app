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
          "About to Users"
        </div>
        <img
          className="text-center mx-auto"
          style={{ height: "130px", width: "130px" }}
          src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png"
        />
        <form className="my-2">
          <div></div>
          <p className={theme ? "text-light" : "text-dark"}>
            In order to provide a personalized and secure experience for our
            users, our platform collects a variety of user information. This
            includes basic details such as name, email address, date of birth,
            and contact number, allowing us to tailor our services to individual
            {/* preferences. Additionally, users have the option to upload a profile
            picture to add a personal touch to their accounts. */}
          </p>
          {/* <div className=''>
        <a className='m-3 float-end' style={{cursor : "pointer"}}><i class={theme ? "fa-so  lid fa-user-plus fa-2x text-light" : "fa-solid fa-user-plus fa-2x text-black"}></i></a>
        <a className='m-3 float-end' style={{cursor : "pointer"}}><i class={theme ? "fa-solid fa-share-nodes fa-2x text-light" : "fa-solid fa-share-nodes fa-2x text-black"}></i></a>
        <a className='m-3 float-end' style={{cursor : "pointer"}}><i class={theme ? "fa-regular fa-comment fa-2x text-light" : "fa-regular fa-2x fa-comment text-black"}></i></a>
        <a className='m-3 float-end' style={{cursor : "pointer"}}><i class={theme ? "fa-regular fa-heart fa-2x text-light" : "fa-regular fa-heart fa-2x text-black"}></i></a>

       </div> */}
        </form>
      </div>
    </>
  );
};

export default User;
