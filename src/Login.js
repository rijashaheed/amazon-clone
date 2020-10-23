/*eslint-disable */
import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signIn = () => {
    e.preventDefault();

  }

  const register = () => {
    e.preventDefault();

  }

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="logo"
				/>
			</Link>

			<div className="login__container">
				<h1>Sign-In</h1>

				<form>
					<h5>Email</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
				</form>

				<p>
					Ny signing-in you agree to thr AMAZON FAKE CLONE Conditions of Use & Sale.
					Please see our Privacy Notice, our Cookies Notice and our Interest-based
					Ads Notice.
				</p>

				<button className="login__registerButton">
					Create you Amazon Account
				</button>
			</div>
		</div>
	);
};

export default Login;
