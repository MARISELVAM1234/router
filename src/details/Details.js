import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [detailValue, setDetail] = useState([]);
  const [selectEle, setSelect] = useState([]);

  const param = useParams();
  // console.log(param);

  useEffect(() => {
    getDetailValue();
  }, [param]);

  const getDetailValue = () => {
    const data2 = JSON.parse(localStorage.getItem("cartItem"));
    setDetail(data2);
  };

  useEffect(() => {
    select();
  }, []);
  console.log(detailValue, "detai24455l");

  let a = param.id;

  const select = () => {
    // console.log("hai");
    console.log(detailValue, "detail");

    let b = detailValue.filter((ele) => {
      console.log(a, "a");

      console.log("ele", ele);

      return ele.id === a;
    });
    console.log(b, "b");

    setSelect([...b]);
  };
  console.log(selectEle);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MORE DETAILS FOR THE PARTICULAR ELEMENT</h1>
      {selectEle.map((data, index) => (
        <div key={index}>
          <img src={data.pic} alt=""></img>
          <p>{data.features}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
