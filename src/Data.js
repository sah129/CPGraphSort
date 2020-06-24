
import axios from 'axios';

import React,{Component} from 'react';
import { saveAs } from 'file-saver';


class Data extends Component {

    state = {

      // Initially, no file is selected
      selectedFile: null
    };

    // On file select (from the pop up)
    onFileChange = event => {

      // Update the state
      this.setState({ selectedFile: event.target.files });

    };

    // On file upload (click the upload button)
    onFileUpload = () => {

      // Create an object of formData
      const formData = new FormData();

      // Update the formData object
      for( var i = 0; i < this.state.selectedFile.length; i++ )
      {
           let file = this.state.selectedFile[i];

           formData.append('files[' + i + ']', file);
         }
      // Details of the uploaded file
      //console.log(this.state.selectedFile);

      // Request made to the backend api
      // Send formData object
      axios.post("/graphresults", formData,
      {responseType: 'arraybuffer'}
).then(function (response) {
            console.log(response.data)
            var blob = new Blob([response.data], {type: "application/zip;charset=utf-8"});
            saveAs(blob, "results.zip");

        })

    };

    // File content to be displayed after
    // file upload is complete
    getNames = () => {
        var s = "";
        for(var i = 0; i < this.state.selectedFile.length; i++)
        {
            s += this.state.selectedFile[i].name + <br />
        }
        console.log(s)
        return(<p>{s}</p>);
    };

    fileData = () => {

      if (this.state.selectedFile) {

        return (
          <div>
            <h2>File Details:</h2>
            {this.getNames()}
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };

    render() {

      return (
        <div>


            <div>
                <input type="file" multiple onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
        </div>
      );
    }
  }

  export default Data;
