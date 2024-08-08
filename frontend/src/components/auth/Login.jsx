import React, { useState } from 'react'
import './login.css';
import img01 from '../../icons/img-01.png'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();
  const handleUserChange = (e) => {
    setUserName(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const buttonClicked = () => {
    setShowSpinner(true);
    setTimeout(() => {
      if (userName === 'Admin' && password === 'Admin') {
        navigate('home');
      }
      else {
        setShowSpinner(false);
      }
    }, 1500);
  }
  return (
    <div class="form-signin">
      <img src={img01} alt="" />
      <div class="form-label-group">
        <input type="text" class="form-control" placeholder="@userName" onChange={handleUserChange} />
      </div>
      <div class="form-label-group">
        <input type="password" class="form-control" placeholder="password" onChange={handlePasswordChange} />
      </div>
      <button class="btn btn-lg btn-primary" onClick={buttonClicked}>Login</button>
      {showSpinner && <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>}
      <p class="mt-5 mb-3 text-muted text-center">©2024</p>
    </div>
  )
}

export default Login;