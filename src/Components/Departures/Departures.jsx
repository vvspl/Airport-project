import React from 'react';
import './departures.scss';
import store from '../../store';
import { flightsDataReceived, searchFilter } from '../../FlightsData/flightsData.actions';

const Departures = ({ selectDepartureTab, departureSelected }) => {
  const showDepartureTab = () => {
    selectDepartureTab();
    const text = store.getState().searchedString;
    if (text !== '') {
      store.dispatch(flightsDataReceived(searchFilter(text)));
    }
  };

  return (
      <div
        id="departure"
        className={departureSelected ? 'departures' : 'departures departures__unselected'}
        onClick={showDepartureTab}
      >
        <i
          className={
            departureSelected
              ? 'fas fa-plane-departure'
              : 'fas fa-plane-departure fa-plane-departure__unselected'
          }
        ></i>
        <span
          className={
            departureSelected ? 'departuresTxt' : 'departuresTxt departuresTxt__unselected'
          }
        >
          departures
        </span>
      </div>
  );
};

export default Departures;
