import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as flightsActions from './FlightsData/flightsData.actions';
import { flightsDataSelector } from './FlightsData/flightsData.selectors';

const Table = ({ flightsData, getFlightsData }) => {
  useEffect(() => {
    getFlightsData();
  }, []);

  console.log('flightsData: ', flightsData.body.arrival);
 
  return (
    <tbody>
      {/* {array.map(flight => ( */}
        <tr className="tableRow">
          <td className="terminal">flight.fltNo</td>
          <td className="localTime">Local_Time</td>
          <td className="destination">Destination</td>
          <td className="status">Status</td>
          <td className="airline">Airline</td>
          <td className="flight">Flight</td>
          <td className="details"></td>
        </tr>
       {/* ))}  */}
    </tbody>
  );
};

const mapState = state => {
  return {
    flightsData: flightsDataSelector(state),
  };
};

const mapDispatch = {
  getFlightsData: flightsActions.getFlightsData,
};

export default connect(mapState, mapDispatch)(Table);
