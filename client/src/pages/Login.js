
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';



const Login = (props) => {
  const openLog = () => {
    if (
      document.getElementById("card")
    ) {
      document.getElementById("card").style.transform = "rotateY(-180deg)";
    }
  };
  const openReg = () => {
    if (
      document.getElementById("card")
    ) {
      document.getElementById("card").style.transform = "rotateY(0deg)";
    }
  };

  // login starts +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  // Login ends+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // signup Start ///////////////////////////////////////////////////////////////////////////////////
  const [formStateR, setFormStateR] = useState({
    usernameR: '',
    emailR: '',
    passwordR: '',
  });
  const [addUser] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChangeR = (event) => {
    const { name, value } = event.target;

    setFormStateR({
      ...formStateR,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmitR = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formStateR },
      });

      login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // signup ends/////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="container-form">
      <div className="card-signup">
        <div className="inner-box" id="card">
          <div className="card-front">
            <h2>LOGIN</h2>
            <form onSubmit={handleFormSubmit}>
              <input type="email" id='email' name='email' className="input-box" placeholder="Email" value={formState.email} onChange={handleChange} required />
              <input type="password" name='password' id='password' className="input-box" placeholder="Password" value={formState.password} onChange={handleChange} required />
              <button className="submit-btn" type="submit">Submit</button>
            </form>
            {error && <div>Login failed</div>}
            <button className="btn-input" type="Submit" onClick={openLog}>I'm New Here</button>
            {/* <a href="#">Forgot Password?</a> */}
          </div>
          <div className="card-back">
            <h2>REGISTER</h2>
            <form onSubmit={handleFormSubmitR}>
              <input type="text" name='usernameR' className="input-box" placeholder="Username" onChange={handleChangeR} required />
              <input type="email" name='emailR' className="input-box" placeholder="Email" onChange={handleChangeR} required />
              <input type="password" name='passwordR' className="input-box" placeholder="Password" onChange={handleChangeR} required />
              <button className="submit-btn" type="submit">Submit</button>
            </form>
            {error && <div>Sign up failed</div>}
            <button className="btn-input" type="button" onClick={openReg} >I Have an Account</button>
          </div>
        </div >
      </div >
    </div >
  );
};

export default Login;