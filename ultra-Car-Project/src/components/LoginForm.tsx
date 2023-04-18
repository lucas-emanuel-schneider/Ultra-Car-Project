import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logoNova from '../images/logoNova.png'

const FAKE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'


function LoginForm() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageData = localStorage.getItem('user_db');
    if (localStorageData) {
      navigate('/home')
    }
  }, []);

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLFormElement>) {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  }

  useEffect(() => {
    const validateEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/gi;
    const minPassword = 6;
    if (validateEmail.test(form.email) && form.password.length >= minPassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [form.email, form.password, form]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      const { email } = form;
      localStorage.setItem('user_db', JSON.stringify({email}));
      localStorage.setItem('fake_token', JSON.stringify({token: FAKE_TOKEN}));
      navigate('/home');
  };

  return (
    <div>
      <div>
        <img src={ logoNova } alt="UltraCar" />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Faça seu login</h3>
          <label htmlFor="email">
            <input
              data-testid="common_login__input-email"
              type="email"
              name="email"
              placeholder="email"
              value={ form.email }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder="password"
              value={ form.password }
              onChange={ handleChange }
            />
          </label>
          <button
            type="submit"
            disabled={ isDisabled }
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm