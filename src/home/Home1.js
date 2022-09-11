import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home1 = () => {
  const [cartItem, setCArt] = useState([]);
  const navigate = useNavigate();


  // ro get the element
  useEffect(() => {
    getCartItems();
  }, []);

  const [cartValue, setCartValue] = useState([]);


  const getCartItems = () => {
    const data = JSON.parse(localStorage.getItem("cartItem"));
    setCArt(data);
  };

  // to send data to another cartItem

  const sendItem = (val) => {
    console.log(val, "val");
    const isExit = cartValue.some((plusData) => val.id === plusData.id);
    // console.log(isExit)
    if (isExit === true) {
      return val;
    } else {
      return setCartValue([...cartValue, {...val ,qty:1 }, ]);
    }
  };
  localStorage.setItem("cartValue", JSON.stringify(cartValue));



  // console.log(cartValue, "cart");

  const navi = () => {
    navigate("/cart");
  };

  // to set more info of the particular element

  const getMoreDetails = (more) => {
    navigate(`/detail/${more.id}`);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>LAPTOP BRAND</h1>

      <div className="flex-container">
        {cartItem?.map((ele, index) => (
          <div className="flex-item" key={index}>
            <img src={ele.pic} alt=""></img>
            <p>{ele.features}</p>
            <button
              style={{ marginBottom: "20px", marginRight: "20px" }}
              onClick={() => {
                sendItem(ele);
              }}
            >
              ADD TO CART
            </button>
            <button
              onClick={() => getMoreDetails(ele)}
              style={{
                marginBottom: "20px",
                marginRight: "20px",
                marginLeft: "20px",
              }}
            >
              VIEW MORE INFO
            </button>
          </div>
        ))}
      </div>
      <div className="nav-btn">
        <button
          onClick={() => {
            navi();
          }}
        >
          VIEW CART
        </button>
      </div>
    </div>
  );
};

export default Home1;
