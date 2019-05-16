import React, { Component } from 'react';
import axios from 'axios';
import Project from './project';
class Profile extends Component {
    state = {
        skills: [],
        formData: {
            id: 1,
            level: 30
        }
    }
   
    // skillvalue = (event) => {
    //     const newData = event.target.value;
    //     this.setState({ skillvalue: newData });


    // };
    handleChange = ({ currentTarget }) => {
        const formData = { ...this.state.formData };
        formData[currentTarget.name] = currentTarget.value;
        this.setState({ formData });
        console.log(this.state.formData)
    };
    // handleSubmit = e => {
    //     this.handleAddSkillRequest(this.state.formData);
    // };
    //  
    getAllSkills = () => {

        axios.get("http://localhost:6006/Skills")
            .then(data => {
                console.log("", data)
                // if (data.data.books.length > 0) {
                //     this.setState({
                //         books: data.data.books
                //     }) //set the state
                // }
            })
            .catch(err => console.log(err))
    }
    AddNewSkill = () => {
        axios.post("http://localhost:6006/Skills", {
            //publishedBy:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },        
            "name": this.state.name,
            "level": this.state.level,
           
        })
            .then(data => {
                console.log("New Skill Added", data)
               
                this.handleClose()
                this.getAllSkills()
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.getAllSkills() // load axios data
    }
    render() {
        const projectslist =  <Project  />
        return (

    <div>
        
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="profile">
      <img id="hanouf"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiasajo6RFSTR2RkHQrezDFvJ9QY85uHTkci7cpPof5hZSvuiq7g" />   
     <h1>{this.state.name}</h1>

        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptates mollitia totam quia quos velit rem libero porro incidunt deleniti,
        nobis exercitationem facilis minima beatae, assumenda impedit blanditiis. Laborum, corrupti debitis.
        </p>

            <div className="contact profile">
            <a href="#"><i className="fa fa-linkedin"></i></a>

            <a href="#"><i className="fa fa-github"></i></a>
            </div>
        </div>

       <div className="info">
            <div className="container">

                <h1>Skills</h1>
                  
              <div className="skillContainer row" >
                 <h5 className="col-md-2 col-sm-1">
                 Web developnment
                 </h5>
                  <div className="bar col-md-7 col-sm-1">
                        <div className="skills" id="level" style={{ width: 90 + "%", backgroundColor: "green" }}>{"90%"}</div>
                    </div>
                    
                    <p className="col-md-2 col-sm-1" style={{ width: "10%", color: "red", display: "inline", cursor: "pointer", 
                    marginTop: "18px" }} onClick={this.handleDeleteSkillRequest}>Delete</p>

                </div>
                <div className="skillContainer row" >
                 <h5 className="col-md-2 col-sm-1">
                 Data analysis
                 </h5>
                 
                  <div className="bar col-md-7 col-sm-1">
                        <div className="skills" id="level" style={{ width: 50 + "%", backgroundColor: "#edbe33" }}>{"50%"}</div>
                    </div>
                    <p className="col-md-2 col-sm-1" style={{ width: "10%", color: "red", display: "inline", cursor: "pointer", 
                    marginTop: "18px" }}>Delete</p>
                    </div>

             
                
               
               
              <div className=" skillContainer row" >
                 <h5 className="col-md-2 col-sm-1">
                 Graphic design
                 </h5>
                  <div className="bar col-md-7 col-sm-1">
                        <div className="skills" id="level" style={{ width: 20 + "%", backgroundColor: "red" }}>{"20%"}</div>
                    </div>
                    <p className="col-md-2 col-sm-1" style={{ width: "10%", color: "red", display: "inline", cursor: "pointer", 
                    marginTop: "18px" }} onClick={this.handleDeleteSkillRequest}>Delete</p>
                    </div>
                
              

    
                                <div id={this.state.addSkill}>
                    <h2>New skill</h2>
                    <div className="skillContainer slidecontainer row " >
                   
                                <select name="id" id="mySelect" className="form-control col-md-2 col-sm-1"onChange={this.handleChange}>
                                    <option selected="">Please Select your Skill</option>
                                    <option value="1"> Web developnment</option>
                                    <option value="2"> Graphic design </option>
                                    <option value="3">Interior design</option>
                                    <option value="4">Marketing</option>
                                    <option value="5">Data analysis</option>
                                    <option value="6" >Translation</option>
                                 
                                </select>
                     <input type="range" min="1" max="100" name="level"  value={this.state.formData.level}
                     
                     className="slider col-md-6 col-sm-1" onChange={this.handleChange} />
                    <p style={{ marginTop: "20px !important" }} className="col-md-1 col-sm-1" >{this.state.formData.level <= 50 ? "Beginner" : this.state.formData.level <= 75 ? "Intermediate" : "Advanced"}</p>

                    <button class="btn btn-default col-md-1 col-sm-1" onclick={this.displayResult} >Add</button>
                              
                    </div>

                            <p>Value:{this.state.formData.level}</p>
                        </div>

                                
                           
                        <br />
                        <h1>Projects</h1>
                        {projectslist}

            </div>            
       </div>
    </div>


                );
                    }
                }
                
export default Profile;