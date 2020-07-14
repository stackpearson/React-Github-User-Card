import React from 'react';
import './App.css';
import axios from 'axios';
import Followers from './Followers';
import styled from 'styled-components';

const AppWrapper = styled.div`
 color: white;
;`

const UserHeader = styled.div`
 background-color: black;
 line-height: 5px;
 padding: 15px;
 font-size: 20px;
 text-transform: none
;`

const UserInfo = styled.div`
 background-color: #90a0a2;
 border-radius: 0px 0px 20px 20px;
 padding: 15px;
;`

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

      function showFollowers() {
        document.getElementById('followers').style.display='block';
      }
      return (
        <div className="App">
          <AppWrapper>

          
          {console.log('this.state', this.state)}

          <UserHeader>
            <p><a style={{textDecoration:'none'}} id='user-link' href={this.state.userData.html_url}>{this.state.userData.login}</a> | {this.state.userData.name}</p>
            <p>{this.state.userData.location} | {this.state.userData.public_repos} Repos</p>
          </UserHeader>

          
          <UserInfo>
            <p>{this.state.userData.bio}</p>

            <div className='follower-flex'>

              <div>
                <div className='follower-number-flex'>
                  <p>Following: {this.state.userData.following}</p>
                  <p>Followers: {this.state.userData.followers}</p>
                  <div id='show-followers' onClick={showFollowers}>Show Followers</div>
                </div>

                <Followers />
              </div>

            </div>
          </UserInfo>

          </AppWrapper>
        </div>
      );
    }
}

export default App;
