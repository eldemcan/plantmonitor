import React from 'react'
import PropTypes from 'prop-types';
import { Label, Checkbox, Segment } from 'semantic-ui-react'
import  DashboardApiClient from '../../actions/dashboardApiClient'

export default class SocketControl extends React.Component {

  constructor(props) {
    super(props);
  }

  toggle(_, { checked }) {
    let action = checked === true ? 'on' : 'off';

    DashboardApiClient.controlSocket('1',  action);
  }

  render() {
    const { labelName, labelDetail } = this.props;

    return(
      <div>
        <Label as='a' color='green' image>
          { labelName }
          <Label.Detail>{ labelDetail ? 'On' : 'Off' }</Label.Detail>
        </Label>
        <Segment compact>
          <Checkbox toggle onChange={this.toggle}/>
        </Segment>
      </div>
    );
  }
}

SocketControl.propTypes = {
  labelName: PropTypes.string,
  labelDetail: PropTypes.bool
};
