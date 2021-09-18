import { FLIGHTS_DATA_RECEIVED, ARRIVAL_TAB_SELECTED } from './flightsData.actions';

const initialFlightData = {
  flights: [],
};

const initialTabData = true;

const flightsDataReducer = (state = initialFlightData, action) => {

  switch (action.type) {

    case FLIGHTS_DATA_RECEIVED: {
      return {
        ...state,
        flights: action.payload.flightsData,
      };
    }

    default:
      return state;
  }
};

export const tabSelectionReducer = (state = initialTabData, action) => {

  switch (action.type) {

    case ARRIVAL_TAB_SELECTED: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default flightsDataReducer;