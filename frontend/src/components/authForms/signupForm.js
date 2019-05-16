  import React, { Component } from "react";


  class SignupForm extends Component {

    // state = {
    //   formData: {
    //     email: null,
    //     password: null,
    //     password_confirmation: null
    //   },
    //   err: null
    // };
    // handleSubmit = e => {
    //   e.preventDefault();
    //   this.handleLoginRequest(this.state.formData);
    // };

    // handleChange = ({ currentTarget }) => {
    //   const formData = { ...this.state.formData };
    //   formData[currentTarget.name] = currentTarget.value;
    //   this.setState({ formData });
    // };

    render() {
      console.log(this.props)
      return (
        <div id="contact-form">
            <div>
      <h1>Sign Up </h1> 
    </div>

        <form method="post" action="/">
        

        <div>
            <label name="firstName">First Name: 
              <input onChange={this.props.change}  type="text"  name="firstName"  placeholder="Your firstName" required="required" />
            </label>  
        </div>
        <div>
            <label name="lastName">Last Name: 
              <input onChange={this.props.change} type="text"  name="lastName"  placeholder="Your lastName" required="required" />
            </label>  
        </div>
        
    <div>
            <label name="email"> Email: 
              <input onChange={this.props.change} type="email"  name="email"  placeholder="Your Email" required="required" />
            </label>  
        </div>
      
        <div>
            <label name="username"> user name: 
              <input onChange={this.props.change} type="text"  name="username"  placeholder="Your username" required="required" />
            </label>  
        </div>

        <div>
            <label > Password: 
              <input name="password" type="password" placeholder="Your Password" required="required"
                onChange={this.props.change}
              />
              </label>
              </div>
              <div>
            <label> Password Confirmation: 
              <input name="password_confirmation" type="password" placeholder="Confirm Your Password"  required="required"
                onChange={this.props.change}
              />
              </label>
              </div>

      
        <div>		           
            <button name="submit" type="submit" id="submit" onClick={this.props.register} >Sign up</button> 
        </div>
        </form>

    </div>
        

      );
    }
  }

  export default SignupForm;
