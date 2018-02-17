import React from 'react';
import PropTypes from 'prop-types';
import DashboardApiClient from '../../actions/dashboardApiClient';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

export default class SocketControl extends React.Component {

  constructor(props) {
    super(props);
    this.checked = false;
    DashboardApiClient.getSocketState('1').then(socketState => this.setChecked(socketState));
  }

  setChecked(socketState) {
    this.checked = socketState.state;
    this.forceUpdate();
  }

  toggle(event) {
    let { checked } = event.target;

    DashboardApiClient.controlSocket('1', checked);
  }

  render() {
    const { labelName } = this.props;
    const spanStyle = {
      verticalAlign: 'super',
    };

    return (
      <span>
        <label>
          <Toggle
            checked={this.checked}
            onChange={this.toggle} />
          <span style={spanStyle}> {labelName} </span>
        </label>
      </span>
    );
  }
}

SocketControl.propTypes = {
  labelName: PropTypes.string
};
