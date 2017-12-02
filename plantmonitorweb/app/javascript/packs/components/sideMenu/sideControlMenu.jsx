import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Grid, Col } from 'react-bootstrap';

import SocketControl from '../socketControl/socketControl'

export default class SideControlMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  //TODO: pass labelDetail from upper component
  render() {
    return (
      <Grid>
        <Row>
          <SocketControl labelName='Light' labelDetail={true} />
        </Row>
      </Grid>
    );
  }
}

