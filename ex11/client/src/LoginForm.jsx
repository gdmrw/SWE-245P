import React, { useRef, useState } from 'react';
import './LoginForm.css'; // Make sure you create this CSS file

const LoginForm = ({ onSubmit }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  };

  const handleUsernameChange = (event) => {
    setUsernameValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      username:
      <input
        ref={usernameRef}
        label="username"
        id="username"
        type="text"
        value={usernameValue}
        onChange={handleUsernameChange}
      />
      password:
      <input
        ref={passwordRef}
        label="password"
        id="password-input"
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
      />
      <button
        id="login-button"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default LoginForm;
