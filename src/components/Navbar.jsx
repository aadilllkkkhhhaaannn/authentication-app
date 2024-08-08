import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUser } from '../features/auth/authSlice';


const Navbar = ({theme , changeTheme}) => {

  const dispatch = useDispatch();

  const handleLogOut = () => {

    dispatch(logOutUser())

  }

  const {user} = useSelector(state => state.auth)

  return (
    <>
      {/* <div className="navbar"> */}
      <nav
        className={
          theme ? "navbar bg-light shadow-lg" : "navbar bg-primary shadow-lg"
        }
      >
        <div className="container-fluid">
          <Link
            style={{ transition: "all ease-in-out 0.8s" }}
            to="/"
            className={
              theme
                ? "navbar-brand mb-0 h1 text-dark"
                : "navbar-brand mb-0 h1 text-light"
            }
          >
            <img
              style={{ height: "30px" }}
              src="https://appauth.io/logo/AppAuth_logo.svg"
              alt=""
            />
            Auth App
          </Link>
          <div className="login">
            <span className="float-end">
              {user ? (
                <div className="boss">
                  <button
                    // style={{ transition: "all ease-in-out 0.8s" }}
                    className={
                      theme
                        ? "btn btn-sm mx-1 btn-dark"
                        : "btn btn-sm mx-1 btn-light"
                    }
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    style={{ transition: "all ease-in-out 0.8s" }}
                    to="/register"
                    className={
                      theme
                        ? "btn btn-sm mx-1 btn-light shadow-lg"
                        : "btn btn-sm mx-1 btn-dark shadow-lg"
                    }
                  >
                    Register
                  </Link>

                  {/* <button
                className="float-end"
                onClick={() => changeTheme()}
                // onClick={() => ChangeTheme()}
                style={{ border: "none", background: "transparent" }}
              >
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="checkbox"
                  />
                  <label class="form-check-label" for="checkbox">
                    <span class="ball"></span>
                  </label>
                </div>
              </button> */}

                  <Link
                    style={{ transition: "all ease-in-out 0.8s" }}
                    to="/Login"
                    className={
                      theme
                        ? "btn btn-sm mx-1 btn-light shadow-lg"
                        : "btn btn-sm mx-1 btn-dark shadow-lg"
                    }
                  >
                    Sign in
                  </Link>
                </>
              )}

              {/* <div>
            <input type="checkbox" class="checkbox" id="checkbox" />
            <label
              onClick={() => changeTheme()}
              for="checkbox"
              class="checkbox-label"
            >
              <i class="fas fa-moon"></i>
              <i class="fas fa-sun"></i>
              <span class="ball"></span>
            </label>
          </div> */}

              {/* <button
            style={{ transition: "all ease-in-out 0.8s" }}
            className={
              theme
                ? "btn btn-sm mx-1 btn-light shadow"
                : "btn btn-sm mx-1 btn-dark shadow"
            }
            onClick={() => changeTheme()}
          >
            {theme ? "DARK MODE" : "LIGHT MODE"}
          </button> */}
            </span>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </>
  );
};

export default Navbar
