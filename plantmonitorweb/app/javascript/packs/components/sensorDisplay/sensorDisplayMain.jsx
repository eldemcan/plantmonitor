import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Grid, Col, Table } from 'react-bootstrap';

export default class SensorDisplayMain extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    //TODO : pass sensor data
    return (
      <Table>
        <thead>
          <tr>
          <th> Temperature </th>
          <th> Humidity </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 12 </td>
            <td> 24 </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

