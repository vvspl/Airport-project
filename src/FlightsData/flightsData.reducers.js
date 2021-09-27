import { FLIGHTS_DATA_RECEIVED, ARRIVAL_TAB_SELECTED, SEARCH_STRING } from './flightsData.actions';

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

const initialSearchData = '';

export const tabSelectionReducer = (state = initialTabData, action) => {
  switch (action.type) {
    case ARRIVAL_TAB_SELECTED: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const searchReducer = (state = initialSearchData, action) => {
  switch (action.type) {
    case SEARCH_STRING: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default flightsDataReducer;
