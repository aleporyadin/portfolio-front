import React, { useEffect, useState } from "react";
import UserService from "../../api/user.service";
import Navbar from "../../components/Navbar";

export const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent()
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        setContent(
          (error.response && error.response.data) ||
            error.message ||
            error.toString()
        );
      });
  }, []);

  return (
    <div className="container">
      <Navbar/>
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};
