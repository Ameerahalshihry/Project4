import React, { Component } from 'react'
import axios from 'axios';
import {Input, Button} from 'reactstrap'
    import {ListGroup, ListGroupItem, ListGroupItemText} from 'reactstrap'
    import {
        BrowserRouter as Router,
        Route,
        Link
    } from 'react-router-dom';


export default class editpost extends Component {
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
    componentDidMount(){

        axios.get('/services/'+this.props.match.params.id)
        .then(response => {
        
        console.log(response)
            
            // let data = {...this.state}

            this.setState({
                name : response.data.service.name,
                description : response.data.service.description,
                duration : response.data.service.duration,
                cost : response.data.service.cost
            })

        })
        .catch()
    }

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
        
        axios.put('http://localhost:6006/services/'+this.props.match.params.id, obj )
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
            <h1>Edit Project: </h1>
            <form >
            <h3>Name:</h3>
            <Input name="name" onChange={this.onChangeName} value={this.state.name} />
            <h3>Description:</h3>
            <Input name="description" onChange={this.onChangeDescription} value={this.state.description} />
            <h3>Duration:</h3>
            <Input name="duration" onChange={this.onChangeDuration} value={this.state.duration} />
            <h3>Cost:</h3>
            <Input name="cost" onChange={this.onChangeCost} value={this.state.cost} />

            <Button onClick={this.submitHandler} block> Edit Project</Button>
            </form>
            </div>

      </div>
    )
  }
}
