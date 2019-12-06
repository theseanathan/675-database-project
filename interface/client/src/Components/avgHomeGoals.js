import React, { Component } from "react";
import Table from "react-bootstrap/Table";


const avgHomeGoals = props => {
  let { dataFromDb } = props;
  console.log(props);
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <text>Average Home Goals</text>
      <Table striped bordered hover>
        <thead>
          <th>team_id</th>
          <th>avg_score_for_team</th>
        </thead>
        <tbody className="input">
          {dataFromDb.map(x => {
            let {
              team_id,
              avg_score_at_home
            } = x;
            return (
              <tr>
                <td>{team_id}</td>
                <td>{avg_score_at_home}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default avgHomeGoals;
