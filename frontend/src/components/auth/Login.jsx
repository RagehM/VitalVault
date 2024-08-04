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
    }, 2000);
  }
  return (
    <div className='card'>
      <div className='image'>
        <img src={img01} alt="img" />
      </div>
      <div className="inputs">
        <p>Login</p>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={userName} onChange={handleUserChange} />
          <label for="floatingInput">@UserName</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <label for="floatingPassword">Password</label>
        </div>
        <button type="button" className="btn btn-primary btn-lg" onClick={buttonClicked}>Login</button>
        {showSpinner && <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span></div>}
      </div>
    </div >
  )
}

export default Login;