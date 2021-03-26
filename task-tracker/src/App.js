//eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
// eslint-disable-next-line
import {useState} from 'react'

const App=() => {
  // eslint-disable-next-line
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2.30pm',
        reminder:true,
    },
    {
        id:2,
        text:'Meeting at School',
        day:'Feb 6th at 1.30pm',
        reminder:true,
    },
    {
        id:3,
        text:'Food Shopping',
        day:'Feb 5th at 2.30pm',
        reminder:false,
    }
]
)

  // eslint-disable-next-line 
  const name='Aryamaan'
  // eslint-disable-next-line
  const x=true
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
    
  );
}

export default App;
