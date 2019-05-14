import React, { Component } from 'react';

class Home extends Component {
    changeActivePage = activePage => {
        this.setState({ activePage });
      };
    render() {
        return (         
 <div className = "center-2">
        <div class="card-group">
        <div>
       <div class="card" style={{width: "18rem"}}>
         <img class="card-img-top" 
         src="http://www.preferredsd.com/files/2018/09/graphic-design-sioux-falls-sd-1.png" 
         onClick={() => { ("posts")  }}/>
          <h5 class="card-title">Graphic Design</h5>
          </div>
          </div>
      <div>
       <div class="card" style={{width: "18rem"}}>
          <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpneOAmx9IDTJ1OaagMLGma49QyoNbTWqQCE7ioHEQNLzfGfiK" />
          <a href="#">click</a>
           <h5 class="card-title">Interior Design</h5>
        </div>
        </div>

        <div>
        <div class="card" style={{width: "18rem"}}>
          <img class="card-img-top" src="https://cdn-images-1.medium.com/max/2600/0*HICLyAdNSIyT0ODU.jpg"/>
          <a href="#">click</a>
           <h5 class="card-title">web development</h5>
           </div>
        </div>
    </div>
    <div className = "">
       <div class="card" style={{width: "18rem"}}>
      <img class="card-img-top" src="https://img.freepik.com/free-vector/marketing-background-flat-style_23-2147792138.jpg?size=338&ext=jpg"/>
      <a href="#">click</a>
       <h5 class="card-title">Marketing</h5>
       
       </div>
    
     
       
      <div class="card" style={{width: "18rem"}}>
      <img class="card-img-top" src="https://outsourceworkers.com.au/wp-content/uploads/2018/10/2-1.jpg"/>
      <a href="#">click</a>
       <h5 class="card-title">Data Analysis</h5>
        
    </div>
    
    <div class="card" style={{width: "18rem"}}>
        <img class="card-img-top" src="http://www.thehive-llc.com/wp-content/uploads/2017/03/translaton.jpg"/>
         <h5 class="card-title">Translation</h5>
          
      </div>
    
     </div>
          
          </div>

        );
    }
}

export default Home;
