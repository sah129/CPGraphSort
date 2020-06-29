import React from 'react';
import './App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Data from './Data'
import { flexbox } from '@material-ui/system';


function App() {
  return (
    <div className="App">
    <Box display="flex">
        <h1>CellProfiler Graph and Sort</h1>
        </Box>
            <Data />
        <div className = "App-instructions">
        Instructions: jdks;fjdsfsd
        </div>


    </div>

  );
}

export default App;
