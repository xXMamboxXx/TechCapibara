import React, { useState } from 'react';
import './styles/Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      onLogin(username);
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  return (
    <form className="login-box" onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>

      <label htmlFor="username">Usuario</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Login;
