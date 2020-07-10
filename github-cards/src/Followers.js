import React from 'react';
import axios from 'axios';




class Followers extends React.Component {
    constructor() {
      super();
      this.state = {}
    }
  
    componentDidMount() {
        axios.get('https://api.github.com/users/stackpearson/followers')
      .then(response => {
        console.log(response.data)
        this.setState(response.data);
      })
      .catch(error => {
        console.log('error in api request')
      })
    }
  
    
  
      render() {
        return (
          <div className="follow-lists">
              <ul>

              
            {this.state.map(followers => 
                render(
                    <li>{followers.login}</li>
                )
                
            )}
            </ul>
  
            </div>
        );
      }
  }
  
  export default Followers;