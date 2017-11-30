import flask, json

app = flask.Flask(__name__)

# Basic dictionary objects, turned into json for HTTP responses to the frontend. 
userAuth = { 'authenticate' : True }
userDeauth = { 'authenticate' : False }
jiraId = { 'id' : 'PS-1234'}
status = { 'id' : 'PS-1234', 'url' : 'http://jira.hodac.phz:8080/PS-1234', 'state' : 'open'}

# Begin routing defs
@app.route('/auth', methods=['POST'])
def doAuthReq():
    return json.dumps(userAuth)

@app.route('/auth', methods=['DELETE'])
def doAuthLogout():
    return json.dumps(userDeauth)

@app.route('/reset', methods=['POST'])
def doReset():
    return json.dumps(jiraId)

@app.route('/status', methods=['GET'])
def doStatus():
    return json.dumps(status)
