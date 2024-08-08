import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const FeedbackApp = ({ theme, changeTheme }) => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const [review, setReview] = useState("");

  //  const handleInputChange = (e) => {
  //    setReview(e.target.value);
  //  };

  const handleClick = () => {
    const phoneNumber = "9826046890";
    const message = "Your Review : ";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="aa">
        <div className="card p-3 m-3">
          <h4 className="text-center">Give Your Feedback</h4>
          <form>
            <select className="form-select my-3">
              <option value="2">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            {/* <textarea
              required
              placeholder="Write Review Here..."
              className="form-control"
              onChange={handleInputChange}
            ></textarea> */}
            <button
              onClick={handleClick}
              style={{ transition: "all ease-in-out 0.8s" }}
              className={
                theme ? "btn btn-dark w-100 my-3" : "btn btn-primary w-100 my-3"
              }
            >
              Submit Your Review
            </button>
          </form>
        </div>
      </div>
      <div className="bb">
        {" "}
        <div className="card p-3 m-3">
          <li className="list-group-item">
            <h3>Rating :</h3>
            <h4 className="text-secondary">Review :</h4>
            <span className="float-end">
              <button
                style={{ transition: "all ease-in-out 0.8s" }}
                className={
                  theme
                    ? "btn btn-sm btn-dark mx-2 shadow"
                    : "btn btn-sm btn-light mx-2 shadow"
                }
                // onClick={() => editFeedback(feedback)}
              >
                Edit
              </button>
              <button
                style={{ transition: "all ease-in-out 0.8s" }}
                className={
                  theme
                    ? "btn btn-sm btn-light shadow"
                    : "btn btn-sm btn-dark shadow"
                }
                // onClick={() => deleteFeedback(feedback.id)}
              >
                Delete
              </button>
            </span>
          </li>
        </div>
      </div>
    </>
  );
};

export default FeedbackApp;
