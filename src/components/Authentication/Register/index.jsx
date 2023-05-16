import axios from "axios";
import React, { useState } from "react";

export default function Index() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8008/api/v1/employee/save", {
        userName: userName,
        email: email,
        password: password
      });
      alert("Employee Registation Successfully");

    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div className="container mt-4">
        <div className="card">
          <h1>Student Registration</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Employee name</label>
              <input type="text" className="form-control"
                id="employeename" placeholder="Enter Name" name="name"
                value={ userName }
                onChange={ (event) => {
                  setUserName(event.target.value);
                } }/>
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input type="email" className="form-control"
                id="email" placeholder="Enter Email"
                value={ email }
                onChange={ (event) => {
                  setEmail(event.target.value);
                } }/>
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input type="password" className="form-control"
                id="password" placeholder="Enter password"
                value={ password }
                onChange={ (event) => {
                  setPassword(event.target.value);
                } }/>
            </div>
            <button type="submit" className="btn btn-primary mt-4" onClick={ save }>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

