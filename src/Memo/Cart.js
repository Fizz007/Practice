import React, {  useState } from 'react'
import Demo from './Demo';

const Cart = ({counter,changecounter}) => {
    const[name ,setName] = useState("faisal ")
    console.log("cart comp render")
    let res = 0;
    for(let i=0; i<5000000; i++){
        res++
    }
  return (
    <div>
        <h4>{counter}</h4>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}  />
        <button onClick={changecounter}>Increase counter</button>
      <Demo/>
    </div>
  )
}

export default Cart
