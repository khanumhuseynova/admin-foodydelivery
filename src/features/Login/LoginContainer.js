import React, { useRef, useState, useEffect } from 'react';
import './LoginContainer.css';
import loginIMG from '../../image/icon/login.svg';

const LoginContainer = () => {
	const adminRef = useRef();
	const errRef = useRef();

	const [admin, setAdmin] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		adminRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [admin, pwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(admin, pwd);
		setAdmin('');
		setPwd('');
		setSuccess(true);
	};

	return (
		<>
			{success ? (
				<a href="/"></a>
			) : (
				<section className="login">
					<div className="login_left">
						<p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
							{errMsg}
						</p>
						<h1 className="login_title">Welcome Admin</h1>
						<form className="loginForm" onSubmit={handleSubmit}>
							<input
								className="login__input login__inputName"
								placeholder="Username"
								type="text"
								id="adminName"
								ref={adminRef}
								autoComplete="off"
								onChange={(e) => setAdmin(e.target.value)}
								value={admin}
								required
							/>
							<input className="login__input login__inputPwd" placeholder="Password" type="password" id="password" autoComplete="off" onChange={(e) => setPwd(e.target.value)} value={pwd} required />
							<button className="singIn__btn">sign in</button>
						</form>
					</div>
					<div className="login_right">
						<img src={loginIMG} alt="" />
					</div>
				</section>
			)}
		</>
	);
};

export default LoginContainer;
