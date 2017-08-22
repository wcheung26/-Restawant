import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }
  
  render() {
    return (
      <div>
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h3>Admin Login</h3>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default AdminLogin;