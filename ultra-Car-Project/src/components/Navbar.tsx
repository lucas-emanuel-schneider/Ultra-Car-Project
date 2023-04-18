import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import logo from '../images/cabecalho.png'


function Navbar() {
  const [currentUser, setCurrentUser] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const userStorageData = localStorage.getItem('user_db');
    if (userStorageData) setCurrentUser(JSON.parse(userStorageData).email)
  }, []);

  const handleClickOnLogo = () => navigate('/home');
  const logout = () => {
    localStorage.removeItem('fake_token');
    localStorage.removeItem('user_db');
    localStorage.removeItem('new_jobs');
    navigate('/login')
  }
  return (
    <nav>
      <div>
        <img src={ logo } alt="UltraCar" onClick={handleClickOnLogo} />
      </div>
    <div id="hamburger-icon">
    <span></span>
    <span></span>
    <span></span>
    </div>
      <ul>
          <li>
            {currentUser}
          </li>
        <NavLink to="/home">
          <li>
            Home
          </li>
        </NavLink>
        <NavLink to="/services">
          <li>
            Serviços
          </li>
        </NavLink>
        <NavLink to="/stock">
          <li>
            Estoque
          </li>
        </NavLink>
        <NavLink to="/clients">
          <li>
            Clientes
          </li>
        </NavLink>
      </ul>
      <button onClick={logout}>Logout</button>
    </nav>
  )
}

export default Navbar