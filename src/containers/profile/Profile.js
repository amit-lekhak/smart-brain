import React, { useState } from "react";
import Card from "../../components/card/Card";
import { getToken } from "../../utility/helperFunctions";
import "./Profile.styles.css";

const Profile = ({ updateUserState, user, setShowProfile }) => {
  const { name, entries, joined, age, pet } = user;

  const [userData, setUserData] = useState({
    name,
    age: age ? +age : 0,
    pet: pet ? pet : "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!userData.name) return;

    updateProfile(userData);
  };

  const updateProfile = ({ name, age, pet }) => {
    if (!name) return;

    fetch("https://smart-brain-docker.herokuapp.com/api/profile", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ name, age: +age, pet }),
    })
      .then((res) => res.json())
      .then((data) => {
        closeModal();
        if (data.error) {
          return updateUserState({ error: data.error, user, route: "home" });
        }

        return updateUserState({ error: "", user: data.user, route: "home" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onInputChangeHandler = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [field]: value });
  };

  const closeModal = () => {
    setShowProfile(false);
  };

  return (
    <>
      <div className="profile-background-container"></div>
      <div className="profile-container">
        <Card classnames="profile-card">
          <span onClick={closeModal} className="close-modal">
            &times;
          </span>
          <div>
            <img
              className="avatar"
              src="https://tachyons.io/img/logo.jpg"
              alt="avatar"
            />

            <p>{userData && userData.name}</p>
            <p>{`Images Submitted: ${entries}`}</p>
            <p>
              {joined &&
                `Member since: ${new Date(joined).toLocaleDateString()}`}
            </p>
          </div>
          <hr />

          <div className="profile-input">
            <form onSubmit={onSubmitHandler}>
              <div className="form-item">
                <label htmlFor="name">
                  <h4>Name:</h4>
                </label>
                <input
                  onChange={onInputChangeHandler}
                  type="text"
                  name="name"
                  id="name"
                  value={userData.name}
                />
              </div>

              <div className="form-item">
                <label htmlFor="age">
                  <h4>Age:</h4>
                </label>
                <input
                  onChange={onInputChangeHandler}
                  type="number"
                  name="age"
                  id="age"
                  value={+userData.age}
                />
              </div>

              <div className="form-item">
                <label htmlFor="pet">
                  <h4>Pet:</h4>
                </label>
                <input
                  onChange={onInputChangeHandler}
                  type="text"
                  name="pet"
                  id="pet"
                  value={userData.pet}
                />
              </div>
              <div className="profile-button">
                <button
                  type="submit"
                  style={{ backgroundColor: "rgb(116, 248, 255)" }}
                >
                  <h4>Save</h4>
                </button>

                <button
                  onClick={closeModal}
                  style={{ backgroundColor: "orangered" }}
                >
                  <h4>Cancel</h4>
                </button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Profile;
