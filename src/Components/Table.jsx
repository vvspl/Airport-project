import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Departures from './Departures/Departures';
import Arrivals from './Arrivals/Arrivals';
import ServerData from './ServerData';
import EmptySearch from './EmptySearch';
import store from '../store';
import { tabSelection, flightsDataReceived, searchFilter } from '../FlightsData/flightsData.actions';

const Table = () => {
  let [arrivalSelected, setArrivalSelected] = useState(true);

  const text = store.getState().searchedString;

  const selectArrivalTab = () => {
    setArrivalSelected(true);
    store.dispatch(tabSelection(true));
    // if (text!==''){
    //   store.dispatch(flightsDataReceived(searchFilter(text)));
    // }
  };
  const selectDepartureTab = () => {
    setArrivalSelected(false);
    store.dispatch(tabSelection(false));
    // if (text!==''){
    //   store.dispatch(flightsDataReceived(searchFilter(text)));
    // }
  };

  return (
    <div className="container">
      <div className="tableHeader">
        <Departures selectDepartureTab={selectDepartureTab} departureSelected={!arrivalSelected} />
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
        <ServerData arrivalSelected={arrivalSelected} text={text}/>
          {/* <EmptySearch /> */}
    </div>
  );
};
export default Table;
