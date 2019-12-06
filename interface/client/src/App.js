import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import MatchTable from "./Components/matchTable";
import HeightTable from "./Components/heightTable";
import PlayerTable from "./Components/playerTable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      inputHeight: "",
      name: "",
      matchData: [],
      playerHeight: [],
      playerName: []
    };
  }

  /*season*/
  updateStartDate = e => {
    console.log(e.target.value);
    this.setState({
      startDate: e.target.value
    });
  };

  updateEndDate = e => {
    this.setState({
      endDate: e.target.value
    });
  };

  submitDates = async () => {
    let startDate = this.state.startDate;
    let endDate = this.state.endDate;
    let route = "/dates?startDate=" + startDate + "&endDate=" + endDate;
    let res = await axios.get(route);
    console.log(res);
    let { data } = res;
    this.setState({
      matchData: [...data]
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

  render() {
    let {
      updateStartDate,
      updateEndDate,
      submitDates,
      updateHeightInput,
      submitHeight,
      updatePlayerName,
      submitPlayerName
    } = this;
    return (
      <div className="App">
        <div>
          <text>max of the home team and the away team goals</text>
          <br></br>
          <text>Start Date</text>
          <input onChange={updateStartDate}></input>
          <text>End Date</text>
          <input onChange={updateEndDate}></input>
          <button onClick={submitDates}>Submit</button>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <div>
          <text>Players by minimum height</text>
          <br></br>
          <text>Enter Height</text>
          <input onChange={updateHeightInput}></input>
          <button onClick={submitHeight}>Submit</button>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <div>
          <text>Players by Name</text>
          <br></br>
          <text>Enter Player Name</text>
          <input onChange={updatePlayerName}></input>
          <button onClick={submitPlayerName}>Submit</button>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <div>
          <text>Players by with same height as input Player</text>
          <br></br>
          <text>Enter Player Name</text>
          <input onChange={updatePlayerName}></input>
          <button onClick={submitPlayerName}>Submit</button>
          <br></br>
        </div>

        {this.state.matchData.length > 0 && (
          <MatchTable dataFromDb={this.state.matchData} />
        )}

        {this.state.playerHeight.length > 0 && (
          <HeightTable dataFromDb={this.state.playerHeight} />
        )}

        {this.state.playerName.length > 0 && (
          <PlayerTable dataFromDb={this.state.playerName} />
        )}
      </div>
    );
  }
}

export default App;
