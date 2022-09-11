import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItem1, setdisplay] = useState([]);

  useEffect(() => {
    getCartDisplay();
  }, []);


  const getCartDisplay = () => {

    const data1 = JSON.parse(localStorage.getItem("cartValue"));
    setdisplay(data1);
    console.log(data1, "data1");
  };




// to add qty 
const plusQty = (el) =>{
  const item = cartItem1.map((value) => {
   if (value.id === el.id) {
      return {
        ...value,
        qty: value.qty + 1,
      };
    } else {
      return value;
    } 
  });
  setdisplay([...item]);
}

// to decrease the qty 
const minusQty = (minus) => {
   if (minus.qty > 1) {
     const isExit = cartItem1.some((plusData) => minus.id === plusData.id);
    if (isExit === true) {
      const item = cartItem1.map((value) => {
        if (value.id === minus.id) {
          return {
            ...value,
            qty: value.qty - 1,
          };
        } else {
          return value;
        }
      });
      setdisplay([...item]);
    }
  }
  else {
    const eraseZero = cartItem1.filter((data) => {
      return data !== minus;
    });
    setdisplay([...eraseZero]);
  }
};

//  to remove the element
const removeCart = (removeC) => {
  const eraseEle = cartItem1.filter((data) => {
    return data !== removeC;
  });
  setdisplay([...eraseEle]);
};





  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TO ADD CART ITEM</h1>
      <div className="flex-container">
        {cartItem1?.map((ele, index) => (
          <div className="flex-item" key={index}>
            <img src={ele.pic} alt=""></img>
            <p>{ele.features}</p>
            <h3> qty : {ele.qty}</h3>
            <button  onClick={() => plusQty(ele)}>+</button>
            <button style={{marginBottom:"20px"}} onClick={() => removeCart(ele)}  >Remove Cart Item</button>
            <button  onClick={() => minusQty(ele)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
