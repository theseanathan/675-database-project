import React, { Component } from "react";
import Table from "react-bootstrap/Table";


const heightTable = props => {
  let { dataFromDb } = props;
  console.log(props);
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <text>Heights</text>
      <Table striped bordered hover>
        <thead>
          <th>pid</th>
          <th>player_name</th>
        </thead>
        <tbody className="input">
          {dataFromDb.map(x => {
            let { pid, player_name, player_id, birthday } = x;
            return (
              <tr>
                <td>{pid}</td>
                <td>{player_name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default heightTable;
