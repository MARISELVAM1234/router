import React ,{useEffect , useState} from 'react'

const Cart = () => {
  const [cartItem1 , setdisplay] = useState([])


  useEffect(()=>{
    getCartDisplay ()
   } ,[])
   
   const getCartDisplay = () =>{
     const data1=JSON.parse( localStorage.getItem("cartValue"))
   setdisplay([data1])
   console.log(data1, "data1");
   }

console.log(cartItem1);




  return (
    <div>
      <h1 style={{textAlign:"center"}}>TO ADD CART ITEM</h1>
      {cartItem1.map((ele,index)=>(
  <div key={index}>
<h1> {ele.head}</h1>

  </div>

))}
    </div>
  )
}

export default Cart