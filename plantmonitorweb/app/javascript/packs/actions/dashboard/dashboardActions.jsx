// import PropTypes from 'prop-types'
import { SENSOR_DATA_RECEIVED } from '../../constants/dashboardActionTypes'

class DashboardActions {

  sensorDataReceived(data){
    return (
      {
        type: SENSOR_DATA_RECEIVED,
        temperature: data.temperature,
        humidity: data.humidity
      }
    )
  }

}

export default new DashboardActions();

