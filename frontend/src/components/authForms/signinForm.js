import React, { Component } from "react";

class SigninForm extends Component {
  
  state = {
    formData: {
      email: null,
      password: null,
      password_confirmation: null
    },
    err: null
  };
  handleSubmit = e => {
    e.preventDefault();
    this.handleLoginRequest(this.state.formData);
  };

  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
  };

  render() {
    return (
      
          <div id="contact-form">
                 <div>
        <h1>Sign In </h1> 
      </div>
    
           <form method="post" action="/">
          <div>
              <label for="email"> Email: 
                <input type="email" id="email" name="email" value="" placeholder="Your Email" tabindex="2" required="required" />
              </label>  
          </div>
          <div>
               <label> Password: 
                <input name="password" type="password" placeholder="Your Password" tabindex="2" required="required"
                  onChange={this.handleChange}
                />
                </label>
                </div>
               
          <div>		           
              <button name="submit" type="submit" id="submit" >Sign in</button> 
          </div>
           </form>
    
      </div>
          

    );
  }
}        
export default SigninForm;
