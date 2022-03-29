import React from "react";
const Login = () => {
  return (

    <div className="container-form">
      <div className="card-signup">
        <div className="inner-box" id="card">
          <div className="card-front">
            <h2>LOGIN</h2>
            <form>
              <input type="email" className="input-box" placeholder="Your Email" required />
              <input type="password" className="input-box" placeholder="Password" required />
              <button type="submit" className="submit-btn">Submit</button>
              <input type="checkbox" /><span>Remember Me</span>
            </form>
            <button type="button" className="btn-input" onclick="openRegister()">I'm New Here</button>
            <a href>Forgot Password</a>
          </div>
          <div className="card-back">
            <h2>REGISTER</h2>
            <form>
              <input type="text" className="input-box" placeholder="Your Name" required />
              <input type="email" className="input-box" placeholder="Your Email" required />
              <input type="password" className="input-box" placeholder="Password" required />
              <button type="submit" className="submit-btn">Submit</button>
              <input type="checkbox" /><span>Remember Me</span>
            </form>
            <button type="button" className="btn-input" onclick="openLogin()">I Have an Account</button>
            <a href>Forgot Password</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
