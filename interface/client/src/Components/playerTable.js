import React, { Component } from "react";
import Table from "react-bootstrap/Table";


const playerTable = props => {
  let { dataFromDb } = props;
  console.log(props);
  return (
    <div>
      <text>Players</text>
      <Table striped bordered hover>
        <thead>
          <th>pid</th>
          <th>player_name</th>
          <th>player_id</th>
          <th>birthday</th>
        </thead>
        <tbody className="input">
          {dataFromDb.map(x => {
            let { pid, player_name, player_id, birthday } = x;
            return (
              <tr>
                <td>{pid}</td>
                <td>{player_name}</td>
                <td>{player_id}</td>
                <td>{birthday}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default playerTable;
