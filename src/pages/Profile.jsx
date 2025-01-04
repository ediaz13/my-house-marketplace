import React from 'react'
import { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'

function Profile() {
  const auth = getAuth()

  const [formaData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()
    navigate('/')
  }

  return (
    <div className='profile'>
      <header className='profileHeader'>
        <p className="pageHeader">My Profile</p>
        <button type='button' className="logOut" onClick={onLogout}> 
          LogOut
        </button>
      </header>
    </div>
  )
}

export default Profile