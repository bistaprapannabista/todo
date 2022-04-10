import "./App.css";
import { TextField, Button, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

function App() {
  const [input,setInput]=useState();
  const [tasks,setTasks] = useState([]);
  const addTask = () =>{
    if(input!=="")
      setTasks([...tasks,input]);
    setInput("");
  }
  return (
    <div className="App">
      <h1>Pragati Todo List</h1>
      <TextField fullWidth id="filled-basic" label="New Task Here" variant="filled" value={input} onChange={(e)=>setInput(e.target.value)} />
      <br></br>
      <br></br>
      <Button variant="outlined" onClick={addTask} >Add New</Button>

      {
        tasks.map((task)=>
        <ListItemButton component="a">
          <ListItemText primary={task} />
        </ListItemButton>
        )
      }

    </div>
  );
}

export default App;
