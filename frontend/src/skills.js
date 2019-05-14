import React, { Component } from 'react'
//  import swal from 'sweetalert';

import './style.css';

export default class skills extends Component {
  render() {
    return (
        
    <div className="border form-group" > 
    <form>
            <p className="h4 text-center mb-4">Write to us</p>
         
           
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name:
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <br />
            

            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email:
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <br />
            


            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Project Name:
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
            <br />
            


            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Description:
          </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"></textarea>
              <br />
              <br />
              
            
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                <span class="input-group-text">$</span>
              Cost:
            </label>
            <input
              type="Cost"
              id="defaultFormContactEmailEx"
              className="form-control"
  />
 
  <br />
 
    <div class="form-group">
      <label for="exampleFormControlFile1">upload file</label>
    </div>
      <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  
    <br />
    <br />
    <button class="btn btn-primary" type="submit">Send</button>
    {/* swal({
  title: "Sweet!"

}); */}

  </form>
</div>
)
}
}