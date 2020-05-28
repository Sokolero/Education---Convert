import React from 'react';
import './App.css';
import Rates from '../containers/Rates';
import Header from './Header';

function App() {
  return (
    <div className="App container-fluid">
        <Header />
        <Rates />
    </div>
  );
}

export default App;
