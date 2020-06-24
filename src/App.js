import React from 'react';
import './App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Data from './Data'


function App() {

    function triggerDownload(){
        axios.get('/download'
  )
  .then(function (response) {
      console.log(response.data)
      var blob = new Blob([response.data], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "sample.txt");

  })

    }
  return (
    <div className="App">
      <header className="App-header">



        <Data />
        <div>
            <button onClick={triggerDownload}>
              Download
            </button>
        </div>
            </header>
    </div>

  );
}

export default App;
