import React, { useEffect, useState } from "react";
import UserService from "../../api/user.service";
import EventBus from "../../common/eventBus";

export const Index = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getModeratorBoard()
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        setContent(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        );

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      });
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};
