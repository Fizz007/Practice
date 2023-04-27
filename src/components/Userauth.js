import React, { createContext, useState } from 'react'

export const usercont = createContext(null);
 
function Userauth(props) {

    const [user, setUser]= useState(null);
   
    const login = (per)=> {
        setUser(per)
    }
    const logout = ()=> {
        setUser(null)
    }
  return (
    <usercont.Provider value={{user, login , logout}}>
      {props.children}
    </usercont.Provider>
  )
}

export default Userauth

