import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as flightsActions from '../FlightsData/flightsData.actions';
import {flightsDataReceived, searchFilter} from '../FlightsData/flightsData.actions';
import { flightsDataSelector} from '../FlightsData/flightsData.selectors';
import moment from 'moment';
import store from '../store';

const ServerData = ({arrivalSelected, flightsData, getFlightsData, text, filterData}) => {

  useEffect(() => {
    debugger;
    getFlightsData();
    // if (text!=='') filterData();
    // if (text!=='') store.dispatch(flightsDataReceived(searchFilter(text)));
    // console.log('store: ', searchFilter(text))
  }, [arrivalSelected]);

  debugger;
  // if (text!==''){
  //   store.dispatch(flightsDataReceived(searchFilter(text)));  // тут бесконечный цикл выходит обращения к поиску
  // }

  return (
    <table>
    <tbody>
      {flightsData.map((flight, index) => (
        <tr key={flight.ID} className={index % 2 === 0 
            ? 'tableRowEven' 
            : 'tableRowOdd'}>
          <td className="terminal">
            <div className="terminalSquare">{flight.term}</div>
          </td>
          <td className="localTime">
            {arrivalSelected
              ? moment(new Date(flight.timeArrShedule)).format('hh:mm') 
              :moment(new Date(flight.timeDepShedule)).format('hh:mm')}
            </td>
          <td className="destination">
            {arrivalSelected
              ? flight['airportFromID.name_en']
              : flight['airportToID.name_en']}
          </td>
          <td className="status">
            {flight.status === 'LN' 
              ? 'Landed' 
              : 'On air'}{' '}
            {flight.timeTakeofFact === undefined
              ? ''
              : moment(new Date(flight.timeTakeofFact)).format('hh:mm')}
          </td>
          <td className="airline">
            <img src={flight.airline.en.logoName}></img> {flight.airline.en.name}
          </td>
          <td className="flight">
            {flight['carrierID.IATA']}
            {flight.fltNo}
          </td>
          <td className="details"><a className='flightDetailsLink' href={flight.airline.en.logoName} target='_blank'>Flight details</a></td>
        </tr>
      ))}
    </tbody>
    </table>
  );
};

const mapState = state => {
  return {
    flightsData: flightsDataSelector(state),
  };
};

const mapDispatch = {
  getFlightsData: flightsActions.getFlightsData,
  // filterData: flightsActions.flightsDataReceived(flightsActions.searchFilter(text)),
};

export default connect(mapState, mapDispatch)(ServerData);
