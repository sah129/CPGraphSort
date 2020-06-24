import time
from flask import Flask, request, send_file
from generate_graph import test
app = Flask(__name__)



@app.route('/graphresults', methods = ['POST'])
def graphresults():

    test(request.files.to_dict())
    return "json post suceeded"


@app.route('/download', methods=['GET'])
def download():
    return send_file('sample_downloads/sample.txt',
                     mimetype='text/plain',
                     attachment_filename='sampletodownload.txt',
                     as_attachment=True)
