import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"

const Home1 = () => {
const [cartItem , setCArt] = useState([])
const navigate = useNavigate()
// const [cartValue , setCartValue] = useState([])


useEffect(()=>{
 getCartItems ()
} ,[])

const getCartItems = () =>{
  const data =JSON.parse( localStorage.getItem("cartItem"))
setCArt(data)
}
// console.log(cartItem);


const send = (val) =>{
  console.log(val);
  navigate("/cart")
  localStorage.setItem("cartValue",JSON.stringify(val) )
}




  return (
    <div>
              <h1 style={{textAlign:"center"}}>LAPTOP BRAND</h1>
      <div className="flex-container">
        {cartItem.map((ele, index) => (
          <div className="flex-item" key ={index}>
            {/* <h1>{ele.head}</h1>  */}
            <img src={ele.pic} alt=""></img>
            <p>{ele.features}</p>
            <button style={{marginBottom:"20px" , marginRight:"20px"}} >ADD TO CART</button>
            <button onClick= {() => {send(ele)}}>VIEW CART</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home1