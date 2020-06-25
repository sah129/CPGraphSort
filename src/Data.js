
import axios from 'axios';

import React,{Component} from 'react';
import { saveAs } from 'file-saver';


class Data extends Component {
    state = {
      selectedFile: null
    };
    onFileChange = event => {
      this.setState({ selectedFile: event.target.files });
    };
    onFileUpload = () => {
      const formData = new FormData();
      for( var i = 0; i < this.state.selectedFile.length; i++ )
      {
           let file = this.state.selectedFile[i];

           formData.append('files[' + i + ']', file);
         }
      axios.post("/graphresults", formData,{
          responseType: 'arraybuffer'}
).then(function (response) {
            console.log(response.data)
            var blob = new Blob([response.data], {type: "application/zip;charset=utf-8"});
            saveAs(blob, "results.zip");
        })
    };

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
