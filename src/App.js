  
import React from "react";
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";
function App() {
  return (
    <div className="container">
      <header className="App-header">
      <h1>ToDo List</h1>
       
        <ToDo/>
        <ToDoList/>
      </header>
    </div>
  );
}

export default App;