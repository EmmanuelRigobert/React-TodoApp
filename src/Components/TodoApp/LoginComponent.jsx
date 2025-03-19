import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function LoginComponent() {
  const [username, setUsername] = useState('Emmanuel');
  const [password, setPassword] = useState('dummy');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function hadleSubmit() {
    if (username === 'Emmanuel' && password === 'dummy') {
      console.log('Login Successful');
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      navigate(`/welcome/${username}`);
    } else {
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      console.log(showFailureMessage);
      console.log(showSuccessMessage);
    }
  }

  function ShowSuccessComponent() {
    if (showSuccessMessage) {
      return <div className='successMessage'>Authentification Successfull</div>;
    }
    return null;
  }

  return (
    <div className='LoginComponent'>
      <h1>Login Component</h1>

      <ShowSuccessComponent />
      {showFailureMessage && <div className='failureMessage'>Authentification Failed</div>}
      <div className='LoginForm'>
        <div>
          <label>User Name</label>
          <input type='text' name='username' onChange={handleUsernameChange} value={username} />
        </div>
        <div>
          <label>Password</label>
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