    import React, {Component} from 'react'
    import {Input, Button} from 'reactstrap'
    import axios from 'axios';
    import {ListGroup, ListGroupItem, ListGroupItemText} from 'reactstrap'
    import {
        BrowserRouter as Router,
        Route,
        Link
    } from 'react-router-dom';


    export default class addpost extends Component {
        constructor(props){
            super(props);
            this.onChangeName= this.onChangeName.bind(this);
            this.onChangeDescription= this.onChangeDescription.bind(this);
            this.onChangeDuration= this.onChangeDuration.bind(this);
            this.onChangeCost= this.onChangeCost.bind(this);

            this.state = {
                name: '',
                description: '',
                duration:'',
                cost:''

            }
        }
        // handleChange = ({ currentTarget }) => {
        //     const formData = { ...this.state};
        //     console.log("onchange",currentTarget.value);
            
        //     formData[currentTarget.name] = currentTarget.value;
        //     this.setState({ formData });
        // };
        onChangeName(e) {
            this.setState({
                name: e.target.value
            });
        }
        onChangeDescription(e) {
            this.setState({
                description: e.target.value
            });
        }
        onChangeDuration(e) {
            this.setState({
                duration: e.target.value
            });
        }
        onChangeCost(e) {
            this.setState({
                cost: e.target.value
            });
        }
        submitHandler = (e) => {  
            e.preventDefault();
            let obj = {
                name: this.state.name,
                description: this.state.description,
                duration: this.state.duration,
                cost:this.state.cost
            }
            console.log(obj);
            
            axios.post('http://localhost:6006/services', obj )
            .then( response => {
                
                // let data = {...this.state}
                // data.posts.push(response.data.service)
        
                // this.setState(data)
                console.log(response.data);
                
                // window.location.href = "http://localhost:6006/posts"
            })
        }
    
    render() {
        return (
        <div>
            <div className="col-sm-3 postform" >
            <h1>New Project: </h1>
            <form >
            <h3>Name:</h3>
            <Input name="name" onChange={this.onChangeName} />
            <h3>Description:</h3>
            <Input name="description" onChange={this.onChangeDescription} />
            <h3>Duration:</h3>
            <Input name="duration" onChange={this.onChangeDuration} />
            <h3>Cost:</h3>
            <Input name="cost" onChange={this.onChangeCost} />

            <Button onClick={this.submitHandler} block>Add Project</Button>
            </form>
            </div>
            
        </div>
        )
    }
    }

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // import React, { Component } from 'react';
        // import swal from 'sweetalert';
        // class Post extends Component {
        //     state = {
        //         skills: [],
        //         posts: [],
        //         formData: {
        //             name: null,
        //             cost:null,
        //             Description: null,
        //             skill: null,
        //             contact: null
        //         }
        //     }

        //         submitHandler = e => {
        //           e.preventDefault()
        //           swal("Submitted , Thank you!")
        //         }

        //     render() {
                
        //         return (
        //             <div className="col-sm-3 postform" >
        //                 <h1>New Project: </h1>
        //                 <form >
        //                     <h3>Name:</h3>
        //                     <input class="form-control" type="text"  name="name" />
        //                     <h3>Cost:</h3>
        //                     <input class="form-control" type="salary"  name="name" />

        //                     <h3>Description:</h3>
        //                     <textarea class="form-control" rows="5" name="Description" id="comment"></textarea>
        //                     <br />

        //                     <select style={{ width: "100% !important" }}  name="skill" className="form-control post">
        //                     </select>

        //                     <h3>Contact Us:</h3>
        //                     <input class="form-control" type="text"  name="contact" />
        //                     <br />
        //                     <button class="btn btn-primary" type='submit' onClick={this.submitHandler} >Submit</button>
        //                 </form>
        //             </div>
                
        //         );
        //     }
        // }

        // export default Post;








        // const AddPost = (props) => {
        // return (
        //     <div className="col-sm-3 postform" >
        //     <h1>New Project: </h1>
        //     <form >
        //     <h3>Name:</h3>
        //     <Input name="postname" onChange={props.change} />
        //     <h3>Description:</h3>
        //     <Input name="postdescription" onChange={props.change} />
        //     <h3>Duration:</h3>
        //     <Input name="postduration" onChange={props.change} />
        //     <h3>Cost:</h3>
        //     <Input name="postcost" onChange={props.change} />

        //     <Button onClick={props.add} block>Add Project</Button>
        //     </form>
        //     </div>
        // )
        // }
        // export default AddPost