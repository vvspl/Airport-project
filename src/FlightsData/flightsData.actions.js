export const FLIGHTS_DATA_RECEIVED = 'FLIGHTS_DATA_RECEIVED';
export const ARRIVAL_TAB_SELECTED = 'ARRIVAL_TAB_SELECTED';
export const SEARCH_STRING = 'SEARCH_STRING';
import { fetchFlightsData } from '../gateway';
import store from '../store';

export const flightsDataReceived = flightsData => {
  return {
    type: FLIGHTS_DATA_RECEIVED,
    payload: {
      flightsData,
    },
  };
};

export const tabSelection = bool => {
  return {
    type: ARRIVAL_TAB_SELECTED,
    payload: bool,
  };
};

export const searchString = text => {
  return {
    type: SEARCH_STRING,
    payload: text,
  };
};

export const getFlightsData = () => {
  return dispatch => {
    fetchFlightsData().then(flightsData => {
      if (store.getState().arrivalTabSelected)
        return dispatch(flightsDataReceived(flightsData.body.arrival));
      return dispatch(flightsDataReceived(flightsData.body.departure));
    });
  };
};

export const searchFilter = text => {
  let searchResult = store
    .getState()
    .flightsData.flights.filter(
      searchData =>
        searchData['carrierID.IATA'] === text.slice(0, 2) && searchData.fltNo === text.slice(2),
    );
  return searchResult;
};
