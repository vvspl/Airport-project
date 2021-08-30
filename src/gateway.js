const baseUrl = 'https://api.iev.aero/api/flights/01-09-2021';

export const fetchFlightsData = () =>
  fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
