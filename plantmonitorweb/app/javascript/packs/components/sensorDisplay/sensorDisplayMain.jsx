import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Grid, Col, Table } from 'react-bootstrap';

export default class SensorDisplayMain extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { sensorsData } = this.props;

    return (
      <Table responsive bordered condensed>
        <thead>
          <tr>
          <th> Temperature </th>
          <th> Humidity </th>
          <th> Soil Moisture </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> { sensorsData.temperature } </td>
            <td> { sensorsData.humidity } </td>
            <td> { sensorsData.soilMoisture } </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

