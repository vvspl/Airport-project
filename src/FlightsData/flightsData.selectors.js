export const flightsDataSelector = state => {
    return state.flightsData.flights;
  };

  export const tabSelector = state => {
    return state.arrivalTabSelected;
  };

  export const searchString = state =>{
    return state.searchedString;
  }