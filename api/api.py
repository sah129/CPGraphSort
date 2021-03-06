import time
from flask import Flask, request, send_file
from generate_graph import generate_results

app = Flask(__name__, static_folder='../build', static_url_path='')

@app.route('/')
def index():
    return app.send_static_file('index.html')

    
if __name__ == "__api__":
    app.run()

    
@app.route('/api/graphresults', methods = ['POST'])
def graphresults():

    return(send_file(generate_results(request.files.to_dict()),
     mimetype='text/csv',
     attachment_filename='Results.csv',
     as_attachment=True))

@app.route('/download', methods=['GET'])
def download():
    return send_file('sample_downloads/sample.txt',
                     mimetype='text/plain',
                     attachment_filename='sampletodownload.txt',
                     as_attachment=True)
