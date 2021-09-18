import React, { useState, useDispatch } from 'react';
import './departures.scss';
// import {tapArrivalTab} from '../../FlightsData/flightsData.reducers';

// import { connect } from 'react-redux';
// import * as flightsActions from '../FlightsData/flightsData.actions';
// import { tabSelector } from '../FlightsData/flightsData.selectors';

// const Departures = (arrivalTabSelected, departureTabSelected) => {
const Departures = ({selectDepartureTab, departureSelected}) => {
  // const dispatch = useDispatch();

  // let [departureSelected, setDepartureSelected] = useState(false);

  const showDepartureTab = () => {
    // setDepartureSelected(true);
    // dispatch(tapArrivalTab(false));
    selectDepartureTab();
  };

  return (
    <div id='departure'
      className={
        departureSelected ? 'departures' : 'departures departures__unselected'
      }
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
          departureSelected
            ? 'departuresTxt'
            : 'departuresTxt departuresTxt__unselected'
        }
      >
        departures
      </span>
    </div>
  );
};

// const mapState = state => {
//   return {
//     arrivalTabSelected: tabSelector(state),
//   };
// };

// const mapDispatch = {
//   departureTabSelected: flightsActions.tabSelection(!departureSelected),
// };

// export default connect(mapState, mapDispatch)(Departures);

export default Departures;
