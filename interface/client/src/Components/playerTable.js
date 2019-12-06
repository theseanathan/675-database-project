import React, { Component } from "react";
import Table from "react-bootstrap/Table";


const playerTable = props => {
  let { dataFromDb } = props;
  console.log(props);
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <text>Team average score from Team Id</text>
      <Table striped bordered hover>
        <thead>
          <th>avg_score_for_team</th>
        </thead>
        <tbody className="input">
          {dataFromDb.map(x => {
            let { avg_score_for_team } = x;
            return (
              <tr>
                <td>{avg_score_for_team}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default playerTable;
