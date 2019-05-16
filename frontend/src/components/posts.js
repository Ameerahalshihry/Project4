            import React, { Component } from 'react';
            import axios from 'axios';
            import "bootstrap/dist/css/bootstrap.css";

            import {ListGroup, ListGroupItem, ListGroupItemText} from 'reactstrap'
            import {
                BrowserRouter as Router,
                Route,
                Link
            } from 'react-router-dom'; 
            import Addpost from "./addpost"
            import editpost from './editpost'
            
        export default class posts extends Component {

        constructor(props){
            super(props);
            this.state = {
                posts: []
            }
        }
            componentDidMount(){

        
                axios.get('/services')
                .then(response => {
                
                console.log(response)
                    
                    // let data = {...this.state}

                    this.setState({posts : response.data.services})
        
                })
                .catch()
            }
        
            render() {
                let allprojects =  this.state.posts.map(post => 
                    <li key={post._id} id={post._id}>
                    <p><h4>Project Name:</h4>{post.name}</p>
                    <p><h5>Project Description:</h5>{post.description}</p>
                    <p><h5>Project Duration:</h5>{post.duration}</p>
                    <p><h5>Project Cost:</h5>{post.cost}</p>
                    <Link to={"/editpost/"+post._id}>Edit Project</Link> | <Link to={"/deletepost/"+post._id}>Delete Project</Link>  
                    </li> 
               )
            return (
         
            <Router>
                
    {allprojects}

    <Link to={"/addpost"}>Add Project</Link> 
    <Route  path="/addpost" component={Addpost} />
    <Route  path={`/editpost/:id`} component={editpost} />
    {/* <Route  path="/deletepost/:id" component={deletepost} /> */}
            </Router>
          
            )
        }
        }






            // const Posts = (props) => {

            //         return (
            //     <div>
            //         <ListGroup>
            //     { props.posts.map(post => 
            //     <ListGroupItem key={post._id} id={post._id}>
            //         <ListGroupItemText>
            //         {post.name}
            //         </ListGroupItemText>
            //     </ListGroupItem>
            //     )}
                
            // </ListGroup>
                
            //     </div>

            //         );
            //     }


            // export default Posts;