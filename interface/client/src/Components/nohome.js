import React, { Component } from "react";
import Table from "react-bootstrap/Table";

const nohome = props => {
  let { dataFromDb } = props;
  console.log(props);
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <text>Teams with no home games</text>
      <Table striped bordered hover>
        <thead>
          <th>team_name</th>
        </thead>
        <tbody className="input">
          {dataFromDb.map(x => {
            let { team_name } = x;
            return (
              <tr>
                <td>{team_name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default nohome;
