import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Search from './Components/Search';
import Table from './Components/Table';


const App = () => {

  const passData =(Data)=>{
    alert(Data);
    return Data;
  }

  return (
    <Provider store={store}>
      <h1>Search flight</h1>
      <Search dat={passData}/>
      <Table data={passData}/>
    </Provider>
  );
};

export default App;
