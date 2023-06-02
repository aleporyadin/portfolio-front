import React, {useState, useEffect} from "react";
import clsx from "clsx";
import Banner from "components/Banner/index";
import Input from "components/Input/index";
import Button from "components/Button/index";
import "./index.scss";
import avatar from "./avatar.png";

export default function Profile() {


  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showTwoAuth, setShowTwoAuth] = useState(false);
  const [file, setFile] = useState(avatar);
  const hiddenFileInput = React.useRef(null);
  const [userDetails, setUserDetails] = useState({

  });

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="home-screen">
        <div className={clsx("layout-home", "w-full")}>
          <div className="w-full gap-4 flex flex-col">
            <div className="w-full bg-white rounded-t-3xl relative">
              <div className={clsx("main-container profile-grid", "w-full bg-white rounded-3xl")}>
                <div className="flex flex-col main-container justify-center">
                  <div className="text-base font-semibold tracking-wider">
                    {"Details"}
                    <Input
                      labelStyle="text-sm font-bold label-color pb-1"
                      inputStyle="p-1 rounded-md font-light grey-input"
                      id="full-name-id"
                      label="Full Name"
                      type="text"
                      didsabled={true}
                      value={
                        ""
                      }
                      required
                    />
                    <Input
                      labelStyle="text-sm font-bold label-color pb-1"
                      inputStyle="p-1 rounded-md grey-input font-light"
                      id="company-id"
                      label="Company"
                      type="text"
                      value={userDetails["company-name"] || ""}
                      required
                    />
                    <Input
                      labelStyle="text-sm font-bold label-color pb-1"
                      inputStyle="p-1 rounded-md grey-input font-light"
                      id="email-id"
                      label="Email"
                      type="text"
                      value={userDetails.email}
                      required
                    />
                    <Input
                      labelStyle="text-sm font-bold label-color pb-1"
                      inputStyle="p-1 rounded-md grey-input font-light"
                      id="mobile-id"
                      label="Mobile"
                      type="text"
                      placeholder="039 123 4567"
                      value={userDetails["phone-number"] || ""}
                      required
                    />
                    {/* ABN need implement on back-end first */}
                    <Input
                      labelStyle="text-sm font-bold label-color pb-1"
                      inputStyle="p-1 rounded-md grey-input font-light"
                      id="abn-id"
                      label="ABN"
                      type="text"
                      disabled={true}
                    />
                    <Input
                      labelStyle="text-sm font-bold label-color pb-1"
                      inputStyle="p-1 rounded-md grey-input font-light"
                      id="wallet-id"
                      label="Blockchain Wallet"
                      type="text"
                      disabled={true}
                    />

                  </div>
                </div>
                <div className="flex flex-col main-container justify-center">
                  <div className="text-base font-semibold tracking-wider m-5 flex items-center flex-col">
                    <div className="h-60">
                      <img src={file} className="h-5/6 rounded-full"/>
                      <button
                        className="pl-2.5 ml-10 generate-keys text-sm"
                      >
                        {"Change Profile Picture"}
                      </button>
                      <input
                        type="file"
                        ref={hiddenFileInput}
                        style={{display: "none"}}
                      />
                    </div>
                    <div className="w-1/2">

                    </div>
                  </div>
                </div>
                <div className="flex flex-col main-container justify-center">
                  <div className="text-base font-semibold tracking-wider">
                    <span>{"Api Keys"}</span>
                    <Input
                      labelStyle="text-sm font-bold label-color pb-1"
                      inputStyle="p-1 rounded-md grey-input font-light"
                      id="mobile-id"
                      label="Api Key"
                      type="text"
                      disabled={true}
                    />
                    <Input
                      labelStyle="text-sm font-bold label-color pb-1"
                      inputStyle="p-1 rounded-md grey-input font-light"
                      id="abn-id"
                      label="Secret Key"
                      type="text"
                      disabled={true}
                    />
                    <Input
                      labelStyle="text-sm font-bold label-color pb-1"
                      inputStyle="p-1 rounded-md grey-input font-light"
                      id="wallet-id"
                      label="X-Api Key"
                      type="text"
                      disabled={true}
                    />
                    <div className="flex justify-center pb-5">
                        <span className="generate-keys text-sm">
                          {"Generate New:"}
                        </span>
                      <button
                        className="pl-2.5 text-sm"
                      >
                        {" "}
                        {"API Keys"}
                      </button>
                      <button
                        className="pl-2.5 text-sm"
                      >
                        {" "}
                        {"X-API Keys"}
                      </button>
                    </div>
                    <span>{"Security"}</span>
                    <div className="flex">
                      <div className="font-light text-sm">
                        {"2 Factor Authentication:"}
                      </div>
                      <button
                        className="pl-2.5 text-center generate-keys text-sm"
                      >
                        {"Connection"}
                      </button>
                    </div>
                    <Input
                      labelStyle="text-sm font-bold label-color pb-1"
                      inputStyle="p-1 rounded-md grey-input font-light"
                      id="login-id"
                      label="Login"
                      type="text"
                      value={userDetails.login}
                      required
                    />
                    <Input
                      labelStyle="text-sm font-bold label-color pb-1"
                      inputStyle="p-1 rounded-md grey-input font-light"
                      id="password-id"
                      label="Password"
                      type="password"
                      disabled={true}
                      value={"**************"}
                    />
                    <div className="flex justify-center">
                      <button
                        className="generate-keys text-sm"
                      >
                        {"Reset Password"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="merge-div w-full z-10 justify-center flex-row absolute -bottom-2 justify-center flex">
                <Button
                  name="Done"
                  color="blue"
                  type="submit"
                  buttonStyle="w-1/12 mr-8 h-8"
                />
              </div>
              <div
                className="merge-div w-full bg-white rounded-b-3xl flex-row absolute b-1 h-12 justify-center flex"></div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
