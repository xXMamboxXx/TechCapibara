import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import useMouseHaloEffect from './MouseTracker';

import './styles/App.css';

function App() {
  useMouseHaloEffect();
  const [user, setUser] = useState(null);

  return (
    <div className="screen-container">
      {!user ? <Login onLogin={setUser} /> : <Dashboard user={user} />}
    </div>
  );
}

export default App;
