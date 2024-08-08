import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Home = ({ theme, changeTheme }) => {
  const { user, isLoading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <div>
        <h1 className="text-center h5">
          {/* "Welcome back Users" */}
          Welcome, {user?.name}! 😎
        </h1>

        <div className="text-center">
          <div></div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div className="col mb-4">
          <div
            className="jalla card"
            style={{ maxWidth: "400px", height: "428px" }}
          >
            <img
              style={{ height: "222px" }}
              src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Your Profile</h5>
              <p className="card-text">
                The user seems concise and focused, preferring brief
                information. They likely value
              </p>
              <Link to={"/user"}>
                <div className="one">
                  <a
                    href="#"
                    style={{ marginTop: "16px" }}
                    className="btn float-end btn-primary"
                  >
                    View Profile
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card" style={{ maxWidth: "400px", height: "428px" }}>
            <img
              style={{ height: "222px" }}
              src="https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-text">Recent Logins</h5>
              <p className="card-text">
                {" "}
                Logging in typically involves providing credentials (such as
                username and password) to gain.
              </p>
              <Link to={"/recentlogin"}>
                <div className="two">
                  <a
                    href="#"
                    style={{ marginTop: "19px" }}
                    className="btn float-end btn-primary"
                  >
                    View Details
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card" style={{ maxWidth: "400px", height: "428px" }}>
            <img
              style={{ height: "240px" }}
              src="https://i.pinimg.com/474x/0a/9b/cf/0a9bcff7e1ab1450fea861d10f1034a9.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Notifications</h5>
              <p className="card-text">
                A notification is a brief message or alert that provides users
                with important information or updates.
              </p>
              <Link to={"/notification"}>
                <div className="three">
                  <a href="#" className="btn float-end btn-primary">
                    Check Now{" "}
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div className="col mb-4">
          <div className="card" style={{ maxWidth: "400px", height: "428px" }}>
            <img
              style={{ height: "180px" }}
              src="https://i.pinimg.com/736x/a0/b6/0d/a0b60deba8fe18357fab1166011b7675.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">App Settings</h5>
              <p className="card-text">
                Settings allow you to customize your user experience, adjusting
                preferences.
              </p>
              <Link to={"/settings"}>
                <div className="four">
                  <a
                    href="#"
                    style={{ marginTop: "80px" }}
                    className="btn float-end btn-primary"
                  >
                    Open Settings{" "}
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card" style={{ maxWidth: "400px", height: "428px" }}>
            <img
              src="https://cdn.mos.cms.futurecdn.net/DKnCXCBzVhrirv84RYHLg8-1200-80.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">2 Factor Authentication</h5>
              <p className="card-text">
                Two-Factor Authentication (2FA) is a security process requiring
                two forms of verification to access an account, typically
                {/* combining something you know (password) */}
              </p>
              <Link to={"/factorauth"}>
                <div className="five">
                  <a
                    href="#"
                    style={{ marginTop: "50px" }}
                    className="btn float-end btn-primary"
                  >
                    2 Factor Auth{" "}
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card" style={{ maxWidth: "400px", height: "428px" }}>
            <img
              src="https://www.deskera.com/blog/content/images/2021/06/feedback-mindmap-760.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Give Feedback</h5>
              <p className="card-text">
                Feedback should be clear and concise, focusing on specific
                actions or outcomes. Highlight both strengths and areas for
              </p>
              <Link to={"/feedbackapp"}>
                <div className="six">
                  <a
                    href="#"
                    style={{ marginTop: "48px" }}
                    className="btn float-end btn-primary"
                  >
                    Submit Feedback{" "}
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*  <Link to={"/factorauth"}>
                <div className="five">
                  <a
                    href="#"
                    style={{ marginTop: "50px" }}
                    className="btn float-end btn-primary"
                  >
                    2 Factor Auth{" "}
                  </a>
                </div>
              </Link> */}
      <div className="text-center">
        <a href="https://www.instagram.com/aadilllkkkhhhaaannn" target="_blank">
          <i class="fab fa-instagram text-black fa-2x m-2 text-center"></i>
        </a>
        <a href="https://www.facebook.com/aadilkhaann.09" target="_blank">
          <i class="fab fa-facebook fa-2x m-2 text-black text-center"></i>
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank">
          <i class="fab fa-linkedin fa-2x m-2 text-black text-center"></i>
        </a>
      </div>
      <h3 style={{ color: "black" }} className="text-center">
        DEVELOPED BY <span className="gradient-text">AADIL KHAN!</span>
        {/* <span className="/"> */}
        {/* </span> */}
      </h3>
    </>
  );
};

export default Home;
