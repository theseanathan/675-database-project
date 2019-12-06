import React, { Component } from "react";
import Table from "react-bootstrap/Table";

const homeMatchTeams = props => {
  let { dataFromDb } = props;
  console.log(props);
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <text>Home Game Teams</text>
      <Table striped bordered hover>
        <thead>
          <th>team_id</th>
          <th>team_name</th>
        </thead>
        <tbody className="input">
          {dataFromDb.map(x => {
            let { team_id, team_name} = x;
            return (
              <tr>
                <td>{team_id}</td>
                <td>{team_name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default homeMatchTeams;
