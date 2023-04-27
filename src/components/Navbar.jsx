import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { usercont } from './Userauth'
// import { userr } from './Userauth'

const Navbar = () => {
    const auth = useContext(usercont)
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/info'>Info</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      
      {!auth.user ? <NavLink to='/login'>LogIn</NavLink> : null}
      
    </div>
  )
}

export default Navbar
