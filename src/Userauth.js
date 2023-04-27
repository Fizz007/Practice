import React, { createContext, useState } from 'react'

export const UserCont = createContext({});
 
function Userauth(props) {

    const [user, setUser]= useState(null);
   
    const login = (per)=> {
        setUser(per)
    }
    const logout = ()=> {
        setUser(null)
    }
  return (
    <UserCont.Provider value={{user,login,logout}}>
      {props.children}
    </UserCont.Provider>
  )
}

export default Userauth

