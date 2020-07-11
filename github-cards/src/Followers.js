import React from 'react';
import axios from 'axios';


class Followers extends React.Component {
    constructor() {
      super();
      this.state = {
        followerNames: []
      };
    }
  
    componentDidMount() {
        // console.log('component mounted')
        fetch('https://api.github.com/users/stackpearson/followers')
          .then(res => res.json())
          .then(names => this.setState({followerNames: names}))
          .catch(err => console.log('error in followers API call'));
      }
      render() {

        return (
            <div className="follow-lists">

                {/* <>{console.log('this.state', this.state )}</> */}

                <ul>
                    {this.state.followerNames.map(followers =>
                        <li key={followers.id}>{followers.login}</li>
                    )}
                </ul>

            </div>
        );
      }
  }
  
  export default Followers;