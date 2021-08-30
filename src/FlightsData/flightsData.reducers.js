import { FLIGHTS_DATA_RECEIVED } from './flightsData.actions';

const initialData = {
  flights: {},
};

const flightsDataReducer = (state = initialData, action) => {
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

export default flightsDataReducer;