import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate : "",
      endDate : ""
    };
  }

  updateStartDate = (e) => {
    console.log(e.target.value);
    this.setState({
      startDate : e.target.value
    });

  }

  updateEndDate = (e) => {
    this.setState({
      endDate : e.target.value
    });
  }

  submitDates = () => {
    console.log(this.state);
    let {startDate, endDate} = this.state;

    let route = '/dates?startDate='+startDate+'&endDate='+endDate;
    console.log(route);
    axios.get(route)
      .then(function(response) {
        console.log(response);
      }).catch(function(err) {
        console.log('Here');
        console.log(err);
      });
  }

  render() {
    let {updateStartDate, updateEndDate, submitDates} = this;
    return (
      <div className="App">
        <div>
          <text>max of the home team and the away team goals</text>
          <br></br>
          <text>Start Date</text><input onChange={updateStartDate}></input>
          <text>End Date</text><input onChange={updateEndDate}></input>
          <button onClick={submitDates}>Submit</button>
          <br></br>          
        </div>
        <br></br>
        <br></br>
        
      </div>
    );
  }
}

export default App;
