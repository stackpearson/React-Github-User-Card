import React from 'react';
import './App.css';
import axios from 'axios';
import Followers from './Followers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/stackpearson')
      .then(res => res.json())
      .then(data => this.setState({userData: data}))
      .catch(err => console.log('error in user API call'));
  }

    render() {
      return (
        <div className="App">
          {console.log('this.state', this.state)}

          <p>{this.state.userData.login} | {this.state.userData.name}</p>
          <p>{this.state.userData.location} | {this.state.userData.public_repos} Repos</p>
          <p>{this.state.userData.bio}</p>

          <div className='follower-flex'>

            <div>
              <div className='follower-number-flex'>
                <p>Followers: {this.state.userData.followers}</p>
                <p>Following: {this.state.userData.following}</p>
              </div>

              <Followers />
            </div>

          </div>

        </div>
      );
    }
}

export default App;
