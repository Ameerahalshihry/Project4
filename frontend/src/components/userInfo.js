import React, { Component } from "react";

class UserInfo extends Component {
    state = {
        formData: {
            name: null,
            location: null,
            github: null,
            linkedin: null
        }
    }
    render() {
        return (
    <div className="pt-5 mt-5">
    <div id="contact-form">
                      <div>
              <h1>Update Profile</h1> 
              </div>
        <form method="post" action="/">
          
            <div className="form-group">
                    
                    <h3>Name:</h3>
                    <input class="form-control" type="text" name="name" />
                    <h3>Location:</h3>
                    <input class="form-control" type="text"  name="location" />
                    <h3>Github:</h3>
                    <input class="form-control" type="text"  name="github" />
                    
                    <h3>LinkedIn:</h3>
                    <input class="form-control" type="text"  name="linkedin" />
                    <br />
                    <button class="btn btn-primary" type='submit'>Save</button>
            </div>
        </form>
    </div>
    </div>

        );
        }
}

export default UserInfo;