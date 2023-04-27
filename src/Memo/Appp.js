import React, { useCallback, useMemo, useState } from 'react'
import Cart from './Cart'

const Appp = () => {
    const [name,setname] = useState('faizz')
    const [counter, setCounter] = useState(0);
    console.log("app comp render")

    const memoizecart = useMemo(()=> {
        return <Cart counter={counter}/>
    },[])

    // const changecounterfromChild = useCallback(()=>{
    //     setCounter(counter + 1)
    // },[counter])
  return (
    <div >
        <h3>{counter}</h3>
      <input type="text" value={name} onChange={(e)=> setname(e.target.value)} />
      <button onClick={()=> setCounter(counter +1)}>Increase</button>
     {memoizecart}
     {/* <Cart counter={counter} changecounter={changecounterfromChild}/> */}
     {/* <Cart counter={counter}/> */}
    </div>
  )
}

export default Appp
