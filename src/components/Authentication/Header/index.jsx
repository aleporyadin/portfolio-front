import { ArrowBackIosNew as BackArrow } from "@mui/icons-material";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ back }) {
  const navigate = useNavigate();

  return (
    <div className="header flex help justify-between mt-8 items-center mx-8">
      <div className="flex items-center">
        {back ?
          <span
            role="button"
            tabIndex="0"
            onClick={() => {
              navigate(-1);
            }}
            className="flex items-center cursor-pointer">
            <BackArrow/>
            <span className="text-gray-20">Back</span>
          </span>
          : null}{" "}
      </div>
    </div>
  );
}

Header.defaultProps = {
  back: true
};

Header.propTypes = {
  back: PropTypes.bool
};
