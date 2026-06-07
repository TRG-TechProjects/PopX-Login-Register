import { useState } from "react";

import MobileContainer from "../components/MobileContainer";

import avatar from "../assets/avatar.jpg";

import "../styles/account.css";

const Account = () => {
  const [user] = useState(() => {
  const data = localStorage.getItem("userData");
  return data ? JSON.parse(data) : {};
  });

  return (
    <MobileContainer>
      <div className="account-page">

        <div className="header">
          Account Settings
        </div>

        <div className="profile-card">

          <div className="profile-top">

            <div className="avatar-wrapper">
              <img
                src={avatar}
                alt="avatar"
                className="avatar"
              />

              <div className="camera-badge">
                📷
              </div>
            </div>

            <div>
              <h3>{user.fullName || "Marry Doe"}</h3>

              <p>{user.email || "marry@example.com"}</p>
            </div>

          </div>

          <div className="description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
            Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
            Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
          </div>

        </div>

      </div>
    </MobileContainer>
  );
};

export default Account;