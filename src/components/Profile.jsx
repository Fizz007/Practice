import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { usercont } from './Userauth'

const Profile = () => {
    const auth = useContext(usercont)
    const navv = useNavigate();
  
    function handlelogout(){
        auth.logout();
       navv('/')
    }
  return (
    <div>
      <h2>{auth.user} Profile</h2>

   {auth.user && <button onClick={handlelogout}>Logout</button>}
    </div>
  )
}

export default Profile
