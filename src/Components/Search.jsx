import React from 'react';
import store from '../store';
import { getFlightsData, flightsDataReceived, searchString, searchFilter } from '../FlightsData/flightsData.actions';

const Search = () => {

  const handleSearch = event => {
    event.preventDefault();
    const text = store.getState().searchedString;
    if (text !== '') {
      store.dispatch(flightsDataReceived(searchFilter(text)));
    };
  };

  const putSearchTxtToState = (event)=>{
    if (event.target.value==='') store.dispatch(getFlightsData());
    store.dispatch(searchString(String(event.target.value)));
  }

  return (
    <form className="searchForm" onSubmit={handleSearch}>
      <div className="square">
        <i className="fas fa-search"></i>
      </div>
      <input
        className="input"
        name="input"
        type="text"
        defaultValue=""
        placeholder="Airline, destination or flight"
        onChange={putSearchTxtToState}
      />
      <button className="search_btn">
        <span className="btn-text">search</span>
      </button>
    </form>
  );
};

export default Search;
