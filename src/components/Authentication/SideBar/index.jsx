import React from "react";
import { ReactComponent as DottedRectangle } from "./../../../assets/dotted-rectangle.svg";
import { ReactComponent as DottedSquare } from "./../../../assets/dotted-square.svg";
import { ReactComponent as DoubleCircle } from "./../../../assets/double-circle.svg";
import { ReactComponent as Logo } from "../../../assets/h.svg";
import "./index.scss";

export default function SideBar() {
  return (
    <div className="left-side-bar-container bg-primary-10">
      <div className="flex mt-2 mx-3">
        <DottedRectangle className="dots-section"/>
        <Logo className="mg-logo"/>
        <DottedRectangle className="dots-section"/>
      </div>
      <div className="flex justify-center">
        <div className="text-xl4 pr-2 text-white font-extrabold">
          PORTFOLIO
        </div>
      </div>
      <div className=" ">
        <DoubleCircle className="dc-align"/>
        <div className="-top-52 pr-4 text-xl7 left-heading text-white font-extrabold">
          <div>One Account,</div>
          <div> Many Possibilities</div>
        </div>
      </div>
      <div className="footer">
        <DottedSquare/>
      </div>
    </div>
  );
}
