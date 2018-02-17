import { SENSOR_DATA_RECEIVED } from "../constants/dashboardActionTypes";

const initialState =
  {
    sensorsData: Object.assign({}, {temperature: '12,4',  humidity: '21', moisture: '31'}),
    lightState: false
  };


function dashboardReducer(state = initialState, action) {
  switch(action.type){
    case SENSOR_DATA_RECEIVED:
    let combined = Object.assign({}, state, { sensorsData: action.sensorsData });
      return combined;
    default:
      return state;
  }
}

export default dashboardReducer;
