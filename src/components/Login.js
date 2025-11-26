import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // to do login logic
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <br />
        <br />
        <button type="button" onClick={() => { window.location.href = '/register'; }}>
          Register
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
