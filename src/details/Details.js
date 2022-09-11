import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
const [detailValue , setDetail] = useState([])
const [selectEle , setSelect] = useState([])
 
    const param = useParams();
    // console.log(param);

useEffect (()=>{
    getDetailValue ()
} ,[param])

const getDetailValue = () =>{
  const data2 = JSON.parse(localStorage.getItem("cartItem"));
  setDetail(data2)

    // fetch(`https://jsonplaceholder.typicode.com/todos/${param.id }`)
    // .then(response => response.json())
    // .then(json => console.log(json))
    
    // console.log(detailValue);


// console.log(a,"a");
    
}

useEffect(()=>{
  select()
  },[])

console.log(detailValue , "detail") ;


const select  =()=>{
  
//  let b = detailValue.filter((ele ) =>  return ele.id === a   )
let b = detailValue.filter((ele) =>{
  console.log("ele" , ele);
  let a = parseInt(param.id)
  console.log(a , "a"); 
   return ele.id === a
}

)
console.log(b , "b");
  
  //   console.log(ele , "ele");
// console.log( ele.id , "id");
 
  
    // console.log(b ,"b");
    setSelect([...b])
  
  }
  console.log(selectEle);




  return (
    <div style={{textAlign:"center"}}>
      <h1>MORE DETAILS FOR THE PARTICULAR ELEMENT</h1>
      {selectEle.map((data, index)=>(
        <div key = {index}>
          <img src={data.pic} alt=""></img>
            <p>{data.features}</p>

        </div>
      ))}
    </div>
  )
}

export default Details