import React, { useEffect, useState } from 'react';
import './styles/Login.css';

const USERS = [
  { username: 'admin', password: 'admin123' },
  { username: 'fabio', password: 'capibara' },
  { username: 'dan', password: 'croissant' },
];

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Cambia el título de la pestaña al cargar el componente
    document.title = 'Iniciar sesión | Tech Capibara';

    // Cambiar favicon si se desea (opcional)
    const updateFavicon = (iconURL) => {
      const link = document.querySelector("link[rel~='icon']");
      if (link) {
        link.href = iconURL;
      } else {
        const newLink = document.createElement('link');
        newLink.rel = 'icon';
        newLink.href = iconURL;
        document.head.appendChild(newLink);
      }
    };

    updateFavicon('/favicon-login.ico'); // Cambia esto por el favicon que desees
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userFound = USERS.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      setErrorMessage('');
      onLogin(userFound.username);
    } else {
      setErrorMessage('⚠️ Usuario o contraseña incorrectos.');
    }
  };

  return (
    <form className="login-box" onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>

      <label htmlFor="username">Usuario</label>
      <input
        id="username"
        type="text"
        placeholder="Ingresa tu usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        type="password"
        placeholder="Ingresa tu contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Ingresar</button>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
  );
}

export default Login;
