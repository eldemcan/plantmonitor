import React from 'react';
import { connect } from 'react-redux';
import SideControlMenu from '../components/sideMenu/sideControlMenu';
import SensorDisplayMain from '../components/sensorDisplay/sensorDisplayMain';
import DashboardActions from '../actions/dashboard/dashboardActions';
import { Row, Grid, Col } from 'react-bootstrap';

class DashBoardContainer extends React.Component {

  constructor(props) {
    super(props);
    console.log('props data', props);
    this.pubSub = ActionCable.createConsumer();
  }

  componentDidMount() {
    this.setupSubscription();
  }

  setupSubscription() {
    this.pubSub.subscriptions.create('SensorDataChannel', {
      connected: this.connected,
      received: this.received.bind(this),
    });
  }

  connected() {
    console.log('Subscribed');
  }

  received(sensorObject) {
    console.log('Raw object', sensorObject);

    this.props.onDataReceived(sensorObject);
  }


  render() {
    const { sensorsData, lightState } = this.props;
    console.log('props', this.props);

    console.log('can', sensorsData);

    return (
      <div>
        <Grid fluid={true} >
          <Row>
            <Col sm={2}> <SideControlMenu checked={lightState} />  </Col>
            <Col sm={10}> <SensorDisplayMain sensorsData={sensorsData} /> </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log('DashBoardContainer', state);
  return {
    sensorsData: state.dashboardReducer.sensorsData,
    lightState: state.dashboardReducer.lightState
  }
};

const mapDispatchToProps = dispatch => {
  console.log('map dispatch to props');

  return ({
    onDataReceived: data => dispatch(DashboardActions.sensorDataReceived(data))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoardContainer)

