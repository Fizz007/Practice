import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addnum, changeName, subnum } from './Redux/action';
// import { CHANGE_USER } from './Redux/actionTypes';

const Red = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState('')

    const auth = useSelector(state=> state)
 
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Redux demo</h2>

      <p>{auth.number}</p>

      <p>{auth.name}</p>

    <input type="text" value={data} onChange={(e)=> setData(e.target.value)} />
      <button onClick={()=> dispatch(addnum())}>Increse</button>
      <button onClick={()=> dispatch(subnum())}>Decrease</button>
      <button onClick={()=> dispatch(changeName(data))}>Change</button>
     
    </div>
  )
}

export default Red
