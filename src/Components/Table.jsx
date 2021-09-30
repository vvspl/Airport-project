import React, { useState } from 'react';
import Departures from './Departures/Departures';
import Arrivals from './Arrivals/Arrivals';
import ServerData from './ServerData';
import store from '../store';
import { tabSelection } from '../FlightsData/flightsData.actions';

const Table = () => {
  let [arrivalSelected, setArrivalSelected] = useState(true);

  const text = store.getState().searchedString;

  const selectArrivalTab = () => {
    setArrivalSelected(true);
    store.dispatch(tabSelection(true));
  };
  const selectDepartureTab = () => {
    setArrivalSelected(false);
    store.dispatch(tabSelection(false));
  };

  return (
      <div className="container">
        <div className="tableHeader">
            <Departures
              selectDepartureTab={selectDepartureTab}
              departureSelected={!arrivalSelected}
            />
            <Arrivals selectArrivalTab={selectArrivalTab} arrivalSelected={arrivalSelected} />
        </div>
        <div className="partition"></div>
        <table className="table">
          <tbody>
            <tr className="tableRow">
              <td className="terminal">Terminal</td>
              <td className="localTime">Local Time</td>
              <td className="destination">Destination</td>
              <td className="status">Status</td>
              <td className="airline">Airline</td>
              <td className="flight">Flight</td>
              <td className="details"></td>
            </tr>
          </tbody>
        </table>
        <ServerData arrivalSelected={arrivalSelected} />
      </div>
  );
};
export default Table;
