//eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
 // eslint-disable-next-line
import AddTask from './components/AddTask'

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
 //Delete Task
 // eslint-disable-next-line
 const deleteTask=(id)=>{
   setTasks(tasks.filter((task)=> task.id!==id))
 }

 //ToggleReminder
 const toggleReminder=(id)=>{
   setTasks(tasks.map((task)=> task.id===id? {...task,reminder: !task.reminder} : task))
 }

  // eslint-disable-next-line 
  const name='Aryamaan'
  // eslint-disable-next-line
  const x=true
  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : ('No Tasks To Show') }
    </div>
    
  );
}

export default App;
