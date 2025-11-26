import React, { useState } from "react";

function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		// to do registration logic
	};

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit}>
				<h2>Register</h2>
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
				<button type="submit">Register</button>
				<br />
				<br />
				<button type="button" onClick={() => { window.location.href = '/login'; }}>
					Login
				</button>
				{error && <p>{error}</p>}
			</form>
		</div>
	);
}

export default Register;
