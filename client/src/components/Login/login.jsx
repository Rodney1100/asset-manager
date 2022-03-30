import React from "react";

export class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="inner-box" id="card">
			<div className="card-front" ref={this.props.containerRef}>
				<h2>LOGIN</h2>
				<form>
					<input type="email" className="input-box" placeholder="Email or Username" required />
					<input type="password" className="input-box" placeholder="Password" required />
					<button className="submit-btn" type="submit">Submit</button>
					<input type="checkbox" /><span>Remember Me</span>
				</form>
				{/* <button className="btn-input" type="button" >I'm New Here</button> */}
				<a href="#">Forgot Password?</a>

			</div>
			</div>
		);
	}
}