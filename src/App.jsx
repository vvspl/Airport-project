import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Search from './Components/Search';
import Table from './Components/Table';


const App = () => {
  return (
    <Provider store={store}>
      <h1>Search flight</h1>
      <Search/>
      <Table />
    </Provider>
  );
};

export default App;
