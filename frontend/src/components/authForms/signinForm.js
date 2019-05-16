    import React, { Component } from "react";
    import { Input, Col, FormGroup, Label, Button} from 'reactstrap'

    const SigninForm = (props) => {
      return (
        
        <Col sm={3} md={4} className="mx-auto">
        <FormGroup>
              <Label for="exampleEmail" sm={2}>Email</Label>
            <Input name="email" placeholder="Example@mail.com" onChange={props.change} />
        </FormGroup>
        <FormGroup>
              <Label for="exampleEmail" sm={2}>Password</Label>
              <Input name="password" type="password" placeholder="Password" onChange={props.change} />
          </FormGroup>
          <Button onClick={props.login} color="primary" size="lg" block> Login </Button>
        </Col>
        
      )
    }
    export default SigninForm;




    // class SigninForm extends Component {
      
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

      // render() {
      //   return (
  
          
          //     <div id="contact-form">
          //           <div>
          //   <h1>Sign In </h1> 
          // </div>
        
          //     <form method="post" action="/">
          //     <div>
          //         <label for="email"> Email: 
          //           <input type="email" id="email" name="email"  placeholder="Your Email" required="required" />
          //         </label>  
          //     </div>
          //     <div>
          //         <label> Password: 
          //           <input name="password" type="password" placeholder="Your Password" required="required"
          //             onChange={this.handleChange}
          //           />
          //           </label>
          //           </div>
                  
          //     <div>		           
          //         <button name="submit" type="submit" id="submit" >Sign in</button> 
          //     </div>
          //     </form>
        
          // </div>
              

    //     );
    //   }
    // }        
