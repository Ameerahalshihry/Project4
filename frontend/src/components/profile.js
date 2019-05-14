import React, { Component } from 'react';

class Profile extends Component {

    render() {

        return (

    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="profile">
      <img id="hanouf"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiasajo6RFSTR2RkHQrezDFvJ9QY85uHTkci7cpPof5hZSvuiq7g" />   
     <h1>alhanouff</h1>
        <h4>Location</h4>

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
                <h2 style={{ cursor: "pointer" }} >+</h2>
                    <h2>New skill</h2>
                    <div className="skillContainer slidecontainer row " >
                    <select name="id" className="form-control col-md-2 col-sm-1" >
                    </select>

                     <input type="range" min="1" max="100" name="level" className="slider col-md-6 col-sm-1" />
                    <button class="btn btn-default col-md-1 col-sm-1" >Add</button>
                    </div>
                        <br />
                        <h1>Projects</h1>
            </div>            
       </div>
    </div>


                );
                    }
                }
                
export default Profile;