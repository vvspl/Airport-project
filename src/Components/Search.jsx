import React from 'react';
import store from '../store';

const Search = () => {
  const search = event => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    let searchResult = store
      .getState()
      .flightsData.flights.filter(
        searchData =>
          searchData['carrierID.IATA'] === formData.input.slice(0, 2) &&
          searchData.fltNo === formData.input.slice(2),
      );
  };

  return (
    <form className="searchForm" onSubmit={search}>
      <div className="square">
        <i className="fas fa-search"></i>
      </div>
      <input
        className="input"
        name="input"
        type="text"
        defaultValue=""
        placeholder="Airline, destination or flight"
      />
      <button className="search_btn">
        <span className="btn-text">search</span>
      </button>
    </form>
  );
};

export default Search;
