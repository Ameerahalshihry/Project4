import React, { Component } from "react";


class ChangePasswordForm extends Component {
  
  render() {
    return (
      <div className="pt-5 mt-5">
       <div id="contact-form">
                 <div>
        <h1>Change Password</h1> 
      </div>
    
           <form method="post" action="/">
          
          <div className="form-group">
            <label>Old Password</label>
            <input
              name="old"
              className="form-control"
              type="password"
              onChange={this.handleChange}
            />
              <label> New Password </label>
            <input
              name="new"
              type="password"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>       
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
</div>
</div>

    );
  }
}

export default ChangePasswordForm;