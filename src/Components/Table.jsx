import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Departures from './Departures/Departures';
import Arrivals from './Arrivals/Arrivals';
import ServerData from './ServerData';
import EmptySearch from './EmptySearch';
import store from '../store';
import {
  tabSelection,
  flightsDataReceived,
  searchFilter,
} from '../FlightsData/flightsData.actions';

const Table = (data) => {    /// data

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
    <BrowserRouter>
      <div className="container">
        <div className="tableHeader">
          <Route exact path="/departures">
            <Departures
              selectDepartureTab={selectDepartureTab}
              departureSelected={!arrivalSelected}
            />
            <Arrivals selectArrivalTab={selectArrivalTab} arrivalSelected={arrivalSelected} />
          </Route>
          <Route exact path={['/', '/arrivals']}>
            <Departures
              selectDepartureTab={selectDepartureTab}
              departureSelected={!arrivalSelected}
            />
            <Arrivals selectArrivalTab={selectArrivalTab} arrivalSelected={arrivalSelected} />
          </Route>
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
    </BrowserRouter>
  );
};
export default Table;
