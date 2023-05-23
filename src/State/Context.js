import React, { createContext, useState } from 'react'


export const userCont = createContext({})
const Context = (props) => {
    const [data, setData] = useState([])
    const [newdata, setNewdata] = useState([])

    function api(dt){
     setData(dt)
    }

    function updateapi(dt){
        setNewdata(dt)
    }
  return (
    <userCont.Provider value={{data,newdata, api, updateapi}}>
      {props.children}
    </userCont.Provider>
  )
}

export default Context
