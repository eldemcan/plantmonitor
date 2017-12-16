import React from 'react';
import PropTypes from 'prop-types';
import DashboardApiClient from '../../actions/dashboardApiClient';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { Container, Row, Grid, Col } from 'react-bootstrap';

export default class SocketControl extends React.Component {

  constructor(props) {
    super(props);
  }

  toggle(event) {
    let { checked } = event.target
    let action = checked === true ? 'on' : 'off';

    DashboardApiClient.controlSocket('1', action);
  }

  render() {
    const { labelName } = this.props;
    const spanStyle = {
      verticalAlign: 'super'
    }

    return (
      <span>
        <label>
          <Toggle
            defaultChecked={true}
            onChange={this.toggle} />
          <span style = {spanStyle}> {labelName} </span>
        </label>
      </span>
    );
  }
}

SocketControl.propTypes = {
  labelName: PropTypes.string
};
