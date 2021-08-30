import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Table from './Table';

const App = () => {
  return (
    <Provider store={store}>
      <Table />
    </Provider>
  );
};

export default App;
