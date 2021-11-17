import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import React,{useState} from 'react';
import AddTask from './components/AddTask';

function App() {
  const[showAddTask,setShowAddTask]=useState(false)
  const[tasks,setTasks]=useState([
    {
        id:1,
        text:'doctors appointment',
        day:'oct 12 at 1:00pm',
        reminder:true,
    },
    {
        id:2,
        text:'meeting',
        day:'oct 10 at 2:00pm',
        reminder:true,
    },
    {
        id:3,
        text:'shopping',
        day:'oct 11 at 3:00pm',
        reminder:false,
    },

])

//delete Task
 
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id)) 
}
// toggle reminder

const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
}
// Add Task
const addTask=(task)=>{
  const id=Math.floor(Math.random()*1000)+1
  const newTask={id,...task}
  setTasks([...tasks,newTask])
}
  return (
    <div className="container">
  <Header onAdd={()=>setShowAddTask(!showAddTask)}showAdd={showAddTask} />
  {showAddTask && <AddTask onAdd={addTask}/>}
   {tasks.length> 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):('No tasks To show')}
    </div>
  );
}

export default App;
