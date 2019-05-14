import React, { Component } from "react";


class SignupForm extends Component {
 
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
		<h1>Sign Up </h1> 
	</div>

		   <form method="post" action="/">
			
			<div>
		      <label for="email"> Email: 
		      	<input type="email" id="email" name="email" value="" placeholder="Your Email" tabindex="2" required="required" />
		      </label>  
			</div>
     
      <div>
           <label > Password: 
            <input name="password" type="password" id="email" value="" placeholder="Your Password" tabindex="2" required="required"
              onChange={this.handleChange}
            />
            </label>
            </div>
            <div>
           <label> Password Confirmation: 
            <input name="password_confirmation" type="password" placeholder="Confirm Your Password" tabindex="1" required="required"
              onChange={this.handleChange}
            />
            </label>
            </div>

		
			<div>		           
		      <button name="submit" type="submit" id="submit" >Sign up</button> 
			</div>
		   </form>

	</div>
      

    );
  }
}

export default SignupForm;
