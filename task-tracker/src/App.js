//eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  // eslint-disable-next-line 
  const name='Aryamaan'
  // eslint-disable-next-line
  const x=true
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
    
  );
}

export default App;
