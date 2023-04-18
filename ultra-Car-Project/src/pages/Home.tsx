import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom'
import authenticator from '../utils/auth';
import AddNewService from '../components/AddNewService';


function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const userStorageData = localStorage.getItem('user_db');
    const tokenStorageData = localStorage.getItem('fake_token');
    const { status } = authenticator(userStorageData, tokenStorageData);
    if (status === 404) navigate('/login')
  }, []);
  return (
    <div>
      <Navbar />
      <AddNewService />
    </div>
  )
}

export default Home