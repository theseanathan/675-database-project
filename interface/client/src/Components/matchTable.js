import React, { Component } from "react";
import Table from "react-bootstrap/Table";


const matchTable = props => {
  let { dataFromDb } = props;
  console.log(props);
  return (
    <div>
      <text>Seasons</text>
      <Table striped bordered hover>
        <thead>
          <th>cid</th>
          <th>guest_team_goal</th>
          <th>guest_team_id</th>
          <th>home_team_goal</th>
          <th>home_team_id</th>
          <th>lid</th>
          <th>mid</th>
        </thead>
        <tbody className="input">
          {dataFromDb.map(x => {
            let {
              cid,
              guest_team_goal,
              guest_team_id,
              home_team_goal,
              home_team_id,
              lid,
              mid
            } = x;
            return (
              <tr>
                <td>{cid}</td>
                <td>{guest_team_goal}</td>
                <td>{guest_team_id}</td>
                <td>{home_team_goal}</td>
                <td>{home_team_id}</td>
                <td>{lid}</td>
                <td>{mid}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default matchTable;
