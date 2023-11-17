import React, { useRef, useState } from 'react';
import './App.css'; // Assuming you will put your CSS in App.css

function App() {
  // LoginForm component defined within App
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

  // handleSubmit function for the LoginForm
  const handleSubmit = (data) => {
    const json = JSON.stringify(data, null, 4);
    console.clear();
    console.log(json);
  };

  // Render method
  return (
    <div className="App">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
