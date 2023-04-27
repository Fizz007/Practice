import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usercont } from './Userauth'

const Login = () => {
    const [name,setName] = useState('')
    const auth = useContext(usercont)
    const navv = useNavigate()
    
    function handlelogin(){
        auth.login(name)
        // navv('/')
    }
  return (
    <div>
      Name:
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
      <button onClick={handlelogin}>LogIn</button>
    </div>
  )
}

export default Login
