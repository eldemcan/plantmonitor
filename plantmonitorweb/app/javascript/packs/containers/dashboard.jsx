import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideControlMenu from '../components/sideMenu/sideControlMenu';
import SensorDisplayMain from '../components/sensorDisplay/sensorDisplayMain';
import LineChart from '../components/sensorDisplay/sensorDisplayGraph';
import DashboardActions from '../actions/dashboard/dashboardActions';
import apiClient from '../actions/dashboardApiClient';

import { Row, Grid, Col } from 'react-bootstrap';

class DashBoardContainer extends Component {

  constructor(props) {
    super(props);
    console.log('props data', props);
    this.pubSub = ActionCable.createConsumer();
  }

  componentDidMount() {
    this.setupSubscription();
    this.longPool();
    setInterval(this.longPool, 10000);
  }

  setupSubscription() {
    this.pubSub.subscriptions.create('SensorDataChannel', {
      connected: this.connected,
      received: this.received,
    });
  }

  longPool = () => {
    const { onHistoricalDataRecieved } = this.props;
    apiClient.getHistoricalData().then(data => onHistoricalDataRecieved(data));
  }

  connected = () =>  { console.log('Subscribed'); }

  received(sensorObject) {
    console.log('Raw object', sensorObject);

    this.props.onDataReceived(sensorObject);
  }

  render() {
    console.log('container props', this.props);
    const { sensorsData, lightState, onHistoricalDataRecieved, historicalData } = this.props;
    console.log('historical data', historicalData );
    return (
      <div>
        <Grid fluid >
          <Row>
            <Col md={2}> <SideControlMenu checked={lightState} />  </Col>
            <Col md={10}> <SensorDisplayMain sensorsData={sensorsData} /> </Col>
          </Row>
          <Row>
            <Col md={5} className="offset-2">
            <LineChart
                title="Temperature"
                width={600}
                height={400}
                data={historicalData}
                xkey="record_time"
                lineKey="temp"
                lineKey2="hum"
              />
            </Col>
            <Col md={5}>
              <LineChart
                title="Humidity"
                width={600}
                height={400}
                data={historicalData}
                xkey="record_time"
                lineKey="hum"
              />
            </Col>
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
    lightState: state.dashboardReducer.lightState,
    historicalData: state.dashboardReducer.historicalData,
  }
};

const mapDispatchToProps = dispatch => {
  console.log('map dispatch to props');

  return ({
    onDataReceived: data => dispatch(DashboardActions.sensorDataReceived(data)),
    onHistoricalDataRecieved: data => dispatch(DashboardActions.historicalDataReceived(data)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoardContainer);

