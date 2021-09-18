import React from 'react';
import './arrivals.scss'

const Arrivals = ({selectArrivalTab, arrivalSelected}) => {

  const showArrivalTab = () => {
    selectArrivalTab();
  };
  return (
    <div id='arrival' className={
      arrivalSelected ? 'arrivals' : 'arrivals arrivals__unselected'
    }
    onClick={showArrivalTab}>
      <i className={
      arrivalSelected ? "fas fa-plane-arrival": 'fas fa-plane-arrival fa-plane-arrival__unselected' }></i>
      <span className={
      arrivalSelected ? "arrivalsTxt": 'arrivalsTxt arrivalsTxt__unselected'}>arrivals</span>
    </div>
  );
};
export default Arrivals;
