const departures = document.querySelector('.departures');
const arrivals = document.querySelector('.arrivals');

const changeTab = function (flag) {
  let colorA = '#ffffff';
  let colorB = '#53b5e9';
  let tempColor = colorA;
  if (flag) {
    colorA = colorB;
    colorB = tempColor;
  }
  departures.style.backgroundColor = colorA;
  arrivals.style.backgroundColor = colorB;
  document.querySelector('.departuresTxt').style.color = colorB;
  document.querySelector('.arrivalsTxt').style.color = colorA;
  document.querySelector('.fa-plane-departure').style.color = colorB;
  document.querySelector('.fa-plane-arrival').style.color = colorA;
};

const clickHandleDepartures = function () {
  departures.style.zIndex = '1';
  arrivals.style.zIndex = '0';
  changeTab(false);
};
const clickHandleArrivals = function () {
  departures.style.zIndex = '0';
  arrivals.style.zIndex = '1';
  changeTab(true);
};
departures.addEventListener('click', clickHandleDepartures);
arrivals.addEventListener('click', clickHandleArrivals);