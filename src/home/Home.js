import React from "react";
import "./home.css";

const obj = [
  {
    head: "laptop brand",
    pic: require("../assets/1.webp"),
    features:
      " A computer works with much higher speed and accuracy compared to humans while performing mathematical calculations.",
  },
  {
    head: "laptop brand",
    pic: require("../assets/2.jpg"),
    features:
      " A computer works with much higher speed and accuracy compared to humans while performing mathematical calculations.",
  },
  {
    head: "laptop brand",
    pic: require("../assets/3.jpg"),
    features:
      " A computer works with much higher speed and accuracy compared to humans while performing mathematical calculations.",
  },
  {
    head: "laptop brand",
    pic: require("../assets/4.jpg"),
    features:
      " A computer works with much higher speed and accuracy compared to humans while performing mathematical calculations.",
  },
];

const Home = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>LAPTOP BRAND</h1>
      <div className="flex-container">
        {obj.map((ele, index) => (
          <div className="flex-item" key ={index}>
            {/* <h1>{ele.head}</h1>  */}
            <img src={ele.pic} alt=""></img>
            <p>{ele.features}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
