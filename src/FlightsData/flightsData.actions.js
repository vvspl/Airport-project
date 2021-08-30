export const FLIGHTS_DATA_RECEIVED = 'FLIGHTS_DATA_RECEIVED';
import { fetchFlightsData } from "../gateway";

export const flightsDataReceived = (flightsData) => {
    return {
      type: FLIGHTS_DATA_RECEIVED,
      payload: {
        flightsData,
      },
    };
  };

export const getFlightsData = () => {
    return function (dispatch) {
      fetchFlightsData().then(flightsData => {
        dispatch(flightsDataReceived(flightsData));
      });
    };
  };