import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login'
import Home from './components/auth/Home';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='home' element={<Home />}></Route>
      </Routes>
    </Router >
  )
}

export default App