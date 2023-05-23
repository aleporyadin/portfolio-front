import React, { useState } from "react";
import Navbar from "../../components/Navbar";

export const Profile = () => {
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: "" });

  return (
    <>
      <Navbar />

      <div className="container">
        {userReady && (
          <div>
            <header className="jumbotron">
              <h3>
                <strong>{currentUser.username}</strong> Profile
              </h3>
            </header>
            <p>
              <strong>Token:</strong> {currentUser.token.substring(0, 20)}{" "}
              ...{" "}
              {currentUser.token.substr(
                currentUser.token.length - 20
              )}
            </p>
            <p>
              <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
              {currentUser.roles &&
                currentUser.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
