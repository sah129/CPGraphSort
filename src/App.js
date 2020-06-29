import React from 'react';
import './App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Data from './Data'


function App() {
  return (
    <div className="App">
        <h1>CellProfiler Graph and Sort</h1>
            <Data />
        <div className = "App-instructions">
        Instructions: jdks;fjdsfsd
        </div>


    </div>

  );
}

export default App;
