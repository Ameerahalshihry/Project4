import React, { Component } from 'react';

class Post extends Component {
    state = {
        skills: [],
        posts: [],
        formData: {
            name: null,
            cost:null,
            Description: null,
            skill: null,
            contact: null
        }
    }
    render() {
           
        return (
            <div className="col-sm-3 postform" >
                <h1>New Project </h1>
                <form >
                    <h3>Name</h3>
                    <input class="form-control" type="text"  name="name" />
                    <h3>Cost</h3>
                    <input class="form-control" type="salary"  name="name" />

                    <h3>Description</h3>
                    <textarea class="form-control" rows="5" name="Description" id="comment"></textarea>
                    <br />

                    <select style={{ width: "100% !important" }}  name="skill" className="form-control post">
                    </select>

                    <h3>Contact</h3>
                    <input class="form-control" type="text"  name="contact" />
                    <br />
                    <button class="btn btn-primary" type='submit'>Submit</button>
                </form>
            </div>
           
        );
    }
}

export default Post;