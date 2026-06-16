import { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./App.css";

export default function App(){

  const [task,setTask]=useState("");
  const [tasks,setTasks]=useState([]);

  const addTask=()=>{
    if(task==="") return;
    setTasks([...tasks,task]);
    setTask("");
  };

  const deleteTask=(index)=>{
    const updated=tasks.filter((_,i)=>i!==index);
    setTasks(updated);
  };

  return(

    <div className="container">

      <h1 className="title">Task Management System</h1>

      <div className="task-input">

        <TextField
          label="Enter Task"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={addTask}
          style={{marginLeft:"10px"}}
        >
          Add
        </Button>

      </div>

      {tasks.map((t,index)=>(
        <div className="task-item" key={index}>

          {t}

          <Button
            color="error"
            onClick={()=>deleteTask(index)}
          >
            Delete
          </Button>

        </div>
      ))}

    </div>
  );
}