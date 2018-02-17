import React from 'react'
import PropTypes from 'prop-types'
import { Row, Grid } from 'react-bootstrap';

import SocketControl from '../socketControl/socketControl'

export default class SideControlMenu extends React.Component {

  //TODO: pass labelDetail from upper component
  render() {
    const checked = this.props;

    return (
      <Grid>
        <Row>
          <SocketControl labelName="Light" checked={checked} />
        </Row>
      </Grid>
    );
  }
}

