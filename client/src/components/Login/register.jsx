import React from "react";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inner-box" id="card">
      <div className="card-front" ref={this.props.containerRef}>
          <h2>REGISTER</h2>
          <form>
            <input type="text" className="input-box" placeholder="Username" required />
            <input type="email" className="input-box" placeholder="Email" required />
            <input type="password" className="input-box" placeholder="Password" required />
            <button className="submit-btn" type="submit">Submit</button>
            <input type="checkbox" /><span>Remember Me</span>
          </form>
          <button className="btn-input" type="button">I Have an Account</button>
      </div>
      </div>
    );
  }
}

