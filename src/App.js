import React from 'react';
import logo from './logo.svg';
import './App.css';

//import react files here
import MemeMaker from './Components/MemeMaker';
import Header from './Components/Header';

function App() {
  return (
    <div className = "container">
      <Header />
      <MemeMaker />
    </div>
  );
}

export default App;
