import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';


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

  return (
    <div className="container-form">
      <div className="card-signup">
        <div className="inner-box" id="card">
          <div className="card-front">
            <h2>LOGIN</h2>
            <form>
              <input type="text" className="input-box" placeholder="Email or Username" required />
              <input type="password" className="input-box" placeholder="Password" required />
              <button className="submit-btn" type="submit">Submit</button>
            </form>
            <button className="btn-input" type="Submit" onClick={openLog}>I'm New Here</button>
            {/* <a href="#">Forgot Password?</a> */}
          </div>
          <div className="card-back">
            <h2>REGISTER</h2>
            <form>
              <input type="text" className="input-box" placeholder="Username" required />
              <input type="email" className="input-box" placeholder="Email" required />
              <input type="password" className="input-box" placeholder="Password" required />
              <button className="submit-btn" type="submit">Submit</button>
            </form>
            <button className="btn-input" type="button" onClick={openReg} >I Have an Account</button>
          </div>
        </div >
      </div >
    </div >
  );
};

export default Login;