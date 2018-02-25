// import PropTypes from 'prop-types'
import * as types from '../../constants/dashboardActionTypes';

class DashboardActions {

  static sensorDataReceived(data) {
    console.log('Sensor data received', data);

    return (
      {
        type: types.SENSOR_DATA_RECEIVED,
        sensorsData: Object.assign({}, data),
      }
    );
  }

  static historicalDataReceived(data) {
    console.log('Historical data recevied', data);

    return (
      {
        type: types.HISTORICAL_DATA_RECEIVED,
        historicalData: data,
      }
    );
  }

}

export default DashboardActions;

