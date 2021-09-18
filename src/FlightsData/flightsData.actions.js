export const FLIGHTS_DATA_RECEIVED = 'FLIGHTS_DATA_RECEIVED';
export const ARRIVAL_TAB_SELECTED = 'ARRIVAL_TAB_SELECTED';
import { fetchFlightsData } from "../gateway";
import store from '../store';


export const flightsDataReceived = (flightsData) => {
    return {
      type: FLIGHTS_DATA_RECEIVED,
      payload: {
        flightsData,
      },
    };
  };

  export const tabSelection = (bool) => {
    return {
      type: ARRIVAL_TAB_SELECTED,
      payload: bool,
    };
  };

export const getFlightsData = () => {
    return dispatch => {
      fetchFlightsData().then(flightsData => {
        console.log(store.getState().arrivalTabSelected);
        if (store.getState().arrivalTabSelected) return dispatch(flightsDataReceived(flightsData.body.arrival));
        return dispatch(flightsDataReceived(flightsData.body.departure));
      }
      );
    };
  };