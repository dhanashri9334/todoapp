import React from 'react';
//import Demo from './components/Demo';
import './App.css';
//import Demo1 from './components/Demo1';
import Todolist from './components/Todolist';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash,faPlus,faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash,faEdit,faPlus);
function App() {
  return (
    <div className="App">
      
      
      <Todolist></Todolist>
      
    </div>
  );
}

export default App;
