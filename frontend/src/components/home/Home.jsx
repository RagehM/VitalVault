import React from 'react'
import './home.css'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  )
};

export default Home;