/*eslint-disable */
import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
				console.log("logged in");
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//sucessfully creates a new user with email and password
				console.log(auth);
			})
			.catch((error) => alert(error.message));
	};

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

					<button className="login__signInButton" type="submit" onClick={signIn}>
						Sign In
					</button>
				</form>

				<p>
					Ny signing-in you agree to thr AMAZON FAKE CLONE Conditions of Use & Sale.
					Please see our Privacy Notice, our Cookies Notice and our Interest-based
					Ads Notice.
				</p>

				<button className="login__registerButton" onClick={register}>
					Create you Amazon Account
				</button>
			</div>
		</div>
	);
};

export default Login;
