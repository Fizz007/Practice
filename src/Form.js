import React, { useState } from 'react'

const Form = () => {
    const [inputvalue, setInputvalue] = useState("")
    const [data, SetData] = useState([])

    function show(){
        SetData([...data,inputvalue])
        setInputvalue("")
    }
  return (
    <div>
      <input type="text" onChange={(e)=> setInputvalue(e.target.value)} />

        <button onClick={show}>add</button>
        <ul>
            {data && data.map((value, i)=> {
                return <li key={i}>{value}</li>
            })}
        </ul>
        
    </div>
  )
}

export default Form
