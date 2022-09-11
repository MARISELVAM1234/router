import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [userName] = useState(["MARISELVAM"]);
  const [password] = useState(["123456"]);
  const [getName, setGetName] = useState([]);
  const [getPass, setGetpass] = useState([]);
  const navigate = useNavigate();



  const loginFun = (event) => {
    if (event.target.name === "Name") {
      setGetName([event.target.value]);
    }
    if (event.target.name === "pass") {
      setGetpass([event.target.value]);
    }
  };

  const include = () => {
    if (userName[0] === getName[0] && password[0] === getPass[0]) {
      navigate("/home1");
    } else {
      alert("INVALID USERNAME AND PASSWORD");
    }

    // const addcart = () => {
      localStorage.setItem(
        "cartItem",
        JSON.stringify([
          {
            id:1,
            head: "laptop brand",
            pic: require("../assets/1.webp"),
            features:
              " A computer works with much higher speed and accuracy compared to humans while performing mathematical calculations.",
          },
          {
            id:2,
            head: "laptop brand",
            pic: require("../assets/2.jpg"),
            features:
              " A computer works with much higher speed and accuracy compared to humans while performing mathematical calculations.",
          },
          {
            id:3,
            head: "laptop brand",
            pic: require("../assets/3.jpg"),
            features:
              " A computer works with much higher speed and accuracy compared to humans while performing mathematical calculations.",
          },
          {
            id:4,
            head: "laptop brand",
            pic: require("../assets/4.jpg"),
            features:
              " A computer works with much higher speed and accuracy compared to humans while performing mathematical calculations.",
          },
        ])
      );
    // };
  };

  return (
    <React.Fragment>
      <div className="input-ele">
        <h1>ENTER YOUR LOGIN DETAILS </h1>
        <label style={{ fontWeight: "bold" }}> USERNAME : </label>
        <input
          name="Name"
          placeholder="Enter the product name"
          onChange={loginFun}
        ></input>
        <br></br>
        <br></br>
        <label style={{ fontWeight: "bold" }}> PASSWORD : </label>
        <input
          name="pass"
          type="password"
          placeholder="Enter the password"
          onChange={loginFun}
        ></input>

        <br></br>

        <button id="btn-part" onClick={() => include()}>Login</button>
      </div>
    </React.Fragment>
  );
};

export default Login;
