import axios from 'axios';

import React,{Component} from 'react';
import { saveAs } from 'file-saver';

class Data extends Component
{
    state =
    {
      selectedFiles: null
    };
    onFileChange = event =>
    {
      this.setState({ selectedFiles: event.target.files });
    };
    onFileUpload = () => {
      const formData = new FormData();
      for( var i = 0; i < this.state.selectedFiles.length; i++ )
      {
           let file = this.state.selectedFiles[i];
           formData.append('files[' + i + ']', file);
      }
      axios.post("api/graphresults", formData,
      {
          responseType: 'arraybuffer'}).then(function (response)
          {
            console.log(response.data)
            var blob = new Blob([response.data], {type: "text/csv;charset=utf-8"});
            saveAs(blob, "Results.csv");
          })
    };

    getNames = () =>
    {
        var s = "";
        for(var i = 0; i < this.state.selectedFiles.length; i++)
        {
            s += this.state.selectedFiles[i].name + <br />
        }
        console.log(s)
        return(<p>{s}</p>);
    };

    fileData = () =>
    {

      if (this.state.selectedFiles)
      {
        return (
          <div>
            <h2>File Details:</h2>
            {this.getNames()}
          </div>
        );
      }
      else
      {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };

    render() 
    {
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
