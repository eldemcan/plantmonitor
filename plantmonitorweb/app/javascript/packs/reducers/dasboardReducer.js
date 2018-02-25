import * as types from "../constants/dashboardActionTypes";

const initialState =
  {
    sensorsData: Object.assign({}, { temperature: '12,4', humidity: '21', moisture: '31' }),
    historicalData: {},
    lightState: false,
  };

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case types.SENSOR_DATA_RECEIVED:
      return Object.assign({}, state, { sensorsData: action.sensorsData });
    case types.HISTORICAL_DATA_RECEIVED:
      return Object.assign({}, state, { historicalData: action.historicalData });
    default:
      return state;
  }
}

export default dashboardReducer;
