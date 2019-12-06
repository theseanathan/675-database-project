import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import AvgHomeGoals from "./Components/avgHomeGoals";
import HeightTable from "./Components/heightTable";
import PlayerTable from "./Components/playerTable";
import MostGoals from "./Components/mostGoals";
import Nohome from "./Components/nohome";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      inputHeight: "",
      name: "",
      avgHomeGoals: [],
      playerHeight: [],
      playerName: [],
      teamMostGoals: [],
      noHome: []
    };
  }

  /*season*/
  getAvgHomeGoals = async () => {
    // let startDate = this.state.startDate;
    // let endDate = this.state.endDate;
    // let route = "/dates?startDate=" + startDate + "&endDate=" + endDate;
    let route = "/avgHomeGoal";
    let res = await axios.get(route);
    console.log(res);
    let { data } = res;
    this.setState({
      avgHomeGoals: [...data]
    });
  };

  /* Players height */
  updateHeightInput = e => {
    this.setState({
      inputHeight: e.target.value
    });
  };

  submitHeight = async () => {
    let { inputHeight } = this.state;
    let route = "/heights?height=" + inputHeight;
    let res = await axios.get(route);
    let { data } = res;
    this.setState({
      playerHeight: [...data]
    });
    console.log(data);
  };

  /* Players Name */
  updatePlayerName = e => {
    this.setState({
      name: e.target.value
    });
  };

  submitPlayerName = async () => {
    let { name } = this.state;
    let route = "/playername?name=" + name;
    let res = await axios.get(route);
    let { data } = res;
    this.setState({
      playerName: [...data]
    });
    console.log(data);
  };

  /*teamWithMostGoals*/
  teamWithMostGoals = async () => {
    let route = "/mostgoals";
    let res = await axios.get(route);
    console.log(res);
    let { data } = res;
    this.setState({
      teamMostGoals: [...data]
    });
  };

  /*noHome*/
  noHome = async () => {
    let route = "/nohome";
    let res = await axios.get(route);
    console.log(res);
    let data = res.data;
    this.setState({
      noHome: [...data]
    })
  }

  render() {
    let {
      getAvgHomeGoals,
      noHome,
      updateHeightInput,
      submitHeight,
      updatePlayerName,
      submitPlayerName,
      teamWithMostGoals
    } = this;
    return (
      <div className="App">
        <div>
          <h4>Avg Home Goals</h4>
          <button onClick={getAvgHomeGoals}>Submit</button>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <div>
          <h4>Teams who have played a home game</h4>
          <button onClick={submitHeight}>Submit</button>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <div>
          <h4>Average Score based on Team ID</h4>
          <text>Enter Team ID</text>
          <input onChange={updatePlayerName}></input>
          <button onClick={submitPlayerName}>Submit</button>
          <br></br>
        </div>
        {/* <br></br>
        <br></br>
        <div>
          <h4>Players by with same height as input Player</h4>
          <text>Enter Player Name</text>
          <input onChange={updatePlayerName}></input>
          <button onClick={submitPlayerName}>Submit</button>
          <br></br>
        </div> */}
        <br></br>
        <br></br>
        <div>
          <h4>Team with Most Goals</h4>
          <button onClick={teamWithMostGoals}>Submit</button>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <div>
          <h4>Team with No Home Games</h4>
          <button onClick={noHome}>Submit</button>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {this.state.avgHomeGoals.length > 0 && (
          <AvgHomeGoals dataFromDb={this.state.avgHomeGoals} />
        )}

        {this.state.playerHeight.length > 0 && (
          <HeightTable dataFromDb={this.state.playerHeight} />
        )}

        {this.state.playerName.length > 0 && (
          <PlayerTable dataFromDb={this.state.playerName} />
        )}
        
        {this.state.teamMostGoals.length > 0 && (
          <MostGoals dataFromDb={this.state.teamMostGoals} />
        )}

        {this.state.noHome.length > 0 && (
          <Nohome dataFromDb={this.state.noHome} />
        )}
        
      </div>
    );
  }
}

export default App;
