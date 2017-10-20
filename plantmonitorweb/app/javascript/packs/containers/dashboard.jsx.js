import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SensorDataDisplay from '../components/sensorDisplay/sensorDataDisplay'
import SocketControl from '../components/socketControl/socketControl'
import DashboardActions from '../actions/dashboard/dashboardActions';

class DashBoardContainer extends React.Component {

  constructor(props) {
    super(props);
    console.log('props data', props);
    this.pubSub = ActionCable.createConsumer();
  }

  componentDidMount() {
    this.setupSubscription()
  }

  setupSubscription() {
    this.pubSub.subscriptions.create('SensorDataChannel', {
        connected: this.connected,
        received: this.received.bind(this)
      }
    );
  }

  connected(){
    console.log('Connected');
  }

  received(data) {
    console.log('Data from server');
    console.log(data);
    console.log('got data', this.props);
    this.props.onDataReceived(data);
  }

  render() {
    const { temperature, humidity, lightState } = this.props;

   console.log('props', this.props);

    return (
      <div>
        <SocketControl labelName = 'Light' labelDetail = {lightState}/>
        <SensorDataDisplay headingLabel = 'Temperature' sensorData = { temperature }/>
        <SensorDataDisplay headingLabel = 'Humidity' sensorData = { humidity }/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('DashBoardContainer', state);
  return {
    temperature: state.dashboardReducer.temperature,
    humidity: state.dashboardReducer.humidity,
    lightState: state.dashboardReducer.lightState
  }
};

const mapDispatchToProps = dispatch => {
  console.log('map dispatch to props');

  return({
    onDataReceived: data => dispatch(DashboardActions.sensorDataReceived(data))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoardContainer)

