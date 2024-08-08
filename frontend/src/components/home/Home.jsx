import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './home.css'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import HospitalsContent from './HospitalsContent';
import MainContent from './MainContent';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='' element={<MainContent />} />
        <Route path='/hospitals' element={<HospitalsContent />} />
      </Routes>
    </div>
  )
};

export default Home;