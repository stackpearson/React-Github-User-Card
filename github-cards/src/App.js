import React from 'react';
import './App.css';
import axios from 'axios';
import Followers from './Followers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/stackpearson')
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
        <div className="App">

          <p>{this.state.login} | {this.state.name}</p>
          <p>{this.state.location} | {this.state.public_repos} Repos</p>
          <p>{this.state.bio}</p>
          <p></p>

          <div className='follower-flex'>

            <div>
              <div className='follower-number-flex'>
                <p>Followers: {this.state.followers}</p>
                <p>Following: {this.state.following}</p>
              </div>

              <Followers />
            </div>

          </div>

        </div>
      );
    }
}

export default App;
