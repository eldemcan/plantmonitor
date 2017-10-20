import { SENSOR_DATA_RECEIVED } from "../constants/dashboardActionTypes";

const initialState =
  {
    temperature: '12.4',
    lightState: false,
    humidity: '21'
  };


function dashboardReducer(state = initialState, action) {
  switch(action.type){
    case SENSOR_DATA_RECEIVED:
      let data = {
        temperature: String(action.temperature),
        humidity: String(action.humidity)
      };

      return Object.assign({}, state, data);
    default:
      return state;
  }
}

export default dashboardReducer;
