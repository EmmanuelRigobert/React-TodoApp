import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from './Security/AuthContext';

function LoginComponent() {
  const [username, setUsername] = useState('Emmanuel');
  const [password, setPassword] = useState('password');

  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const navigate = useNavigate();

  const authContext = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function hadleSubmit() {
    if (authContext.login(username, password)) {
      // authContext.setIsAuthenticated(true);
      console.log('Login Successful');
      navigate(`/welcome/${username}`);
    } else {
      // authContext.setIsAuthenticated(false);
      // setShowSuccessMessage(false);
      setShowFailureMessage(true);
      console.log(showFailureMessage);
      // console.log(showSuccessMessage);
    }
  }

  return (
    <div className='LoginComponent'>
      <h1>Login-Komponente</h1>
      {showFailureMessage && <div className='failureMessage'>Authentification Failed</div>}
      <div className='LoginForm'>
        <div>
          <label>Benutzername</label>
          <input type='text' name='username' onChange={handleUsernameChange} value={username} />
        </div>
        <div>
          <label>Passwort</label>
          <input type='password' name='password' onChange={handlePasswordChange} value={password} />
        </div>
        <button name='login' className='loginButton' onClick={hadleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginComponent;