import React, { Component } from 'react';
import axios from 'axios'
import TeamForTeamsPage from './TeamForTeamsPage';
import CreateTeam from './CreateTeam';


class Teams extends Component {
  constructor(){
    super();
    this.state = {
      teams: [],
      tourney: String
    }
  }

  getTeams() {
    axios.get(`/${this.props.params.tourney}`)
    .then(res => {
      if(res.data === "Log In First") {
        window.location.replace("http://localhost")
      }
      const teams = res.data;
      this.setState({ teams });
    })
  }

  componentWillMount() {
    this.setState({tourney: this.props.params.tourney})
    this.getTeams()
  }

  render() {
    let teams;
    if(this.state.teams){
      teams = this.state.teams.map(team => {
        return (
          <TeamForTeamsPage key={team._id} params={this.props.params} team={team} />
        );
      });
    }

    return (
      <div className="Teams">
        <h1>tourney.link/{this.state.tourney}</h1>
        <CreateTeam tourney={this.state.tourney} />
        <h2>Teams</h2>
          <ul>
            {teams}
          </ul>
          <hr id="Teams"/>
          <h1>Info</h1>
          <h4>Saturday September 27th</h4>
          <p>8pm est. 5pm pst. 6pm mst.</p>
          <h4>Single-Elimination(One Life)</h4>
          <p>Semi-Finals: Best of 3</p>
          <p>Finals: Best of 5</p>
      </div>
    );
  }
}

export default Teams;
