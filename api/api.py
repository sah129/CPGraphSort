import time
from flask import Flask, request
from generate_graph import test
app = Flask(__name__)

@app.route('/time')
def get_current_time():
    print('hi!')
    return {'time': time.time()}




@app.route('/graphresults', methods = ['POST'])
def graphresults():
    print('HERE')
    print(request.files['files[0]'])
    print(len(request.files))
    test(request.files.to_dict())
    return "json post suceeded"
