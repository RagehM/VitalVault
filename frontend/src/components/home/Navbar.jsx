import React from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const signOut = () => {
    navigate('/');
  }
  return (
    <nav class="navbar navbar-expand">
      <a href="/home">VitalVault</a>
      <button type="button" class="btn btn-primary" onClick={signOut}>SignOut</button>
    </nav>
  )
}

export default Navbar;