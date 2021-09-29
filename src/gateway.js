import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights/'+ moment(new Date()).format('DD-MM-YYYY');

export const fetchFlightsData = () =>
  fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
