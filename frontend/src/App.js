  import React, { Component } from "react";
  import axios from 'axios';

  import './App.css';
  import { getToken, setToken, logout} from './components/services/authServ'
  import SigninForm from "./components/authForms/signinForm";
  import SignupForm from "./components/authForms/signupForm";
  import Home from "./components/Home";
  import Post from "./components/addpost";
  import Posts from "./components/posts";
  import Landing from "./components/landing";
  import {Container, Row, Button, Col, Alert} from 'reactstrap';
  import {Redirect,BrowserRouter as Router,Route,Link} from 'react-router-dom';
  import Nav from './components/nav';
import Contactus from "./components/contactus"
  // import { getUser, Signout } from "./components/services/authServ";
  // import ChangePassword from "./components/authForms/chanagePassword";
  import Profile from "./components/profile";
  // import UserInfo from "./components/userInfo";


  /*------
  Since JWT requires token to be passed in header
  Save an object for header so I dont have to repeat this code
----*/
let header = {
  headers :{
    "Content-Type" : "application/json",
    "Authorization" : `Bearer ${getToken()}`
  }
}

    class App extends Component {
      state = {
          // firstName:'',
          // lastName:'',
          // email: '',
          // username:'',
          // password: '',
          // password_confirmation: '',
          skills : [],
          posts : [],
          client : "",
          errorMsg : '',
          isAuthenticated : false,
          hasError : false,
          isRegistered: false
      }
  //---------------------------------------------------
  changeHandler = (e) => {
    //Log every key value and save to state from form
    let data = {...this.state}

    console.log("target"+e.target.name);
    console.log("target"+e.target.value);

    
    
    data[e.target.name] = e.target.value
    console.log("state in change: "+ data);

    this.setState(data)
  }


  //--------------handleChange--------------------------

      handleChange = ({ currentTarget }) => {
        const formData = { ...this.state};
        console.log("onchange",currentTarget.value);
        
        formData[currentTarget.name] = currentTarget.value;
        this.setState({ formData });
      };
//---------------------Get all Providers----------------------------------  
//---------------------Get all Posts (services)---------------------------  
// getPosts = () =>{
  //get data from JWT locked route
  // Passed header variable with token in headers


//---------------------New post---------------------------  

// submitHandler = (e) => {   
//   axios.post('http://localhost:6006/services',
//   { name : this.state.postname, description : this.state.postdescription, duration : this.state.postduration, cost : this.state.postcost  }
//   , header)
//     .then( response => {
      
//         let data = {...this.state}
//         data.posts.push(response.data.service)

//         this.setState(data)
//         window.location.href = "http://localhost:6006/posts"
//     })
//     .catch()
// }
  //---------------------loginHandler----------------------------------
  loginHandler = (e) => {
    axios.post('http://localhost:6006/auth/login',{ email: this.state.email, password: this.state.password})
    .then( response => {
      console.log(response.data)
      if(response.data.token){
        setToken(response.data.token)

        let data = {...this.state}
        data.client = response.data.client
        data.isAuthenticated = true
        data.hasError = false

        this.setState(data)

        // this.getPosts()
      }
      
    })
    .catch(err =>{
      let data = {...this.state}
        data.hasError = true
        this.setState(data)

    })
  }
//-------------------logout------------------------------------
  logout = () =>{
    logout()
    let data = {...this.state}
    //reset everything on logout
    data.isAuthenticated = false
    data.client = ""
    data.email = ""
    data.password = ""
    data.posts = []

    this.setState(data)
  }
     
  
      //------ register method----------------------------------
    // registerHandler = (e) => {
    //   console.log("onsubmit")
    //   e.preventDefault()
    //   console.log(this.state);
    //   // debugger

    //   axios.post("http://localhost:6006/auth/register", {
    //     firstName: this.state.firstName,
    //     lastName: this.state.lastName,
    //     email: this.state.email,
    //     username: this.state.username,
    //     password: this.state.password
    //   })
    //     .then(response => {
    //       console.log(response)
    //       console.log("masseg submit works")
    //       let data= {...this.state}
    //       data.user= response.data.user
    //       data.isAuthenticated =true
    //       data.isRegistered= true
    //       data.hasError=false
    //       this.setState(data)
    //       window.location.href="http://localhost:3000/profile"
    //     })
    //     .catch(err => (console.log("yaa not working" + err)))
    // }

    registerHandler = (e) => {
      console.log("onsubmit")
      e.preventDefault()
      console.log(this.state);
      // debugger
    
      let client = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      }

      axios.post("http://localhost:6006/auth/register", client)
        .then(response => {
          console.log(response)
          console.log("masseg submit works")
          window.location ='/profile'
        })
        .catch(err => (console.log("yaa not working" + err)))
    }
 //---------------------displayPosts----------------------------------------------
//  displayPosts = ()=>{
    
  // return this.state.posts.map(post => 
  //   <li key={post._id} id={post._id}>{post.name}</li>
  //   )
// }

      render() {
        console.log("current state: ",this.state)
    //if not logged in show login page
    // const showLogin = (!this.state.isAuthenticated) ? <SigninForm change={this.changeHandler} login={this.loginHandler} /> : null
      // show logout button
    const Logout = (this.state.isAuthenticated) ? <Button onClick={this.logout}>Logout</Button> : null
     //show posts when logged in
    const PostsView = (this.state.isAuthenticated) ? 
    <Row>
      <Col md={6}>
        <Posts posts={this.state.posts} />
        </Col>

    <Col md={6}>
      <Post add={this.submitHandler} change={this.changeHandler} />
    </Col>
                                                      
      
      </Row> : null

    // console.log(this.state)

    //     console.log(this.state)

        let links;
        if (this.state.isAuthenticated) {
          links = <Button onClick={this.logout}>Logout</Button>

        } else {
          links =


          <span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <Link to="/SignupForm" className="nav-link">Sign Up!</Link>
          <Link to="/SigninForm" className="nav-link">Sign In!</Link>
          </div>

          </span>
        }
        return(

  <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
         <Link to="/home" className="nav-link" >Skills </Link>{' '}
         </li>
      <li className="nav-item">
          <Link to="/posts" className="nav-link" >Projects</Link>{' '}
          </li>
          <li className="nav-item">

          <Link to="/Contactus" className="nav-link" >Contact Us</Link>{' '}
</li>
<li className="nav-item">
<Link to="/Profile" className="nav-link">Profile</Link>

</li>
          </ul>
          </div>

          {links}

        </nav>
        <Route exact path="/" component={Landing} />
        <Route  path="/home" component={Home} />
        <Route path="/posts" component={Posts} />
        {/* !this.state.isAuthenticated || */}
        <Route path="/SignupForm" render={props => (!this.state.isAuthenticated ) ? <SignupForm register={this.registerHandler} change={this.changeHandler} {...props} /> :<Redirect to="/profile" />} />
        <Route path="/SigninForm" render={(props=> (!this.state.isAuthenticated ) ? <SigninForm change={this.changeHandler} login={this.loginHandler}{...props} /> :<Redirect to="/posts" /> )} />
        {/* <Route path="/editpost/:id" component={Posts} /> this.handleChange*/}
        <Route path="/Profile" component= {Profile} />

        <Alert color="danger" isOpen={this.state.hasError} toggle={this.onDismiss} fade={false}>{this.state.errorMsg}</Alert>
        
  {/* Username: {this.state.client.username} */}
  {/* {Logout} */}

  {/* {showLogin} */}
  {PostsView}
      </div>
    </Router> 

  // {/* <SignupForm register={this.registerHandler} change={this.handleChange}/> */}
  


        )
      }

    }


  export default App;































  // class App extends Component {
    // state = {
    //   activePage: "Home"
    // };
    // changeActivePage = activePage => {
    //   this.setState({ activePage });
    // };
    // onSignin = () => {
    //   this.setState({ user: getUser() });
    //   this.changeActivePage("profile");
    // };
    // onSignout = () => {
    //   this.setState({ user: null });
    //   Signout();
    // };
    // render() {
    //   const { activePage } = this.state;
    //   return (
    //     <div>
    //       <Nav
    //         changeActivePage={this.changeActivePage}
    //         onSignout={this.onSignout}
    //       />
    //        <div >
    //         {activePage === "home" ? <Home /> : ""}
    //         {/* <Home /> */}
    //         {activePage === "sign-in" ? (
    //           <SigninForm onSignin={this.onSignin} />
    //         ) : (
    //             ""
    //           )}
    //         {activePage === "sign-up" ? (
    //           <SignupForm onSignin={this.onSignin} />
    //         ) : (
    //             ""
    //           )}
    //         {activePage === "change-password" ? (
    //           <ChangePassword changeActivePage={this.changeActivePage} />
    //         ) : (
    //             ""
    //           )}
    //         {activePage === "UserInfo" ? <UserInfo changeActivePage={this.changeActivePage} /> : ""}
    //         {activePage === "profile" ? <Profile /> : ""}
    //         {activePage === "posts" ? <Post /> : ""}
    //       </div>
    //   </div> 
  
    //    ) }
    //         }
    //__________________________________________________
  //   class App extends Component {
  //     state = {
  //       skills : [],
  //       name : ''
        
  //     }

  //     getSkills= () => {
      
  //       axios.get("/api/skills") 
  //       .then(data => {
  //         console.log("from my api", data.data)
  //         let temp = {...this.state} // copy
  //         temp.skills = data.data.skill // set to api response
  //         this.setState(temp) //set the state
  //       })
  //       .catch(err => console.log(err))
  //     }
  //     componentDidMount(){
  //       this.getSkills() // load axios data on component mount
  //     }
  // render() {
  //   return(
  //     <Router>
  //     <div>
  //       <nav>
  //         <Link to="/">Go to Home Page</Link>{' '}
  //         <Link to="/projects">See Our Projects</Link>{' '}
  //         <Link to="/Profile">Sign In!</Link>
  //       </nav>
  //       <Container>
  //       <Route exact path="/" component={Home} />
  //       <Route path="/projects" component={Post} />
  //       <Route path="/projects" render={(props=> <Post add={this.add}/> {...props})} />
  //       <Route path="/Profile" component={Profile} />
  //       {this.state.skills}
  //       </Container>
  //     </div>
  //   </Router>  )
  // }
  // }


