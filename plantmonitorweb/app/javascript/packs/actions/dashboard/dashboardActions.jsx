// import PropTypes from 'prop-types'
import { SENSOR_DATA_RECEIVED } from '../../constants/dashboardActionTypes';

class DashboardActions {

  sensorDataReceived(data){
    console.log('Sensor data received', data);

    return (
      {
        type: SENSOR_DATA_RECEIVED,
        sensorsData: Object.assign({}, data)
      }
    )
  }

}

export default new DashboardActions();

