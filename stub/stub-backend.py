import flask, json

app = flask.Flask(__name__)
userAuth = { 'authenticate' : True }
jiraId = { 'id' : 'PS-1234'}
status = { 'id' : 'PS-1234', 'url' : 'http://jira.hodac.phz:8080/PS-1234', 'state' : 'open'}

@app.route('/auth', methods=['POST'])
def doAuthReq():
    return json.dumps(userAuth)

@app.route('/reset', methods=['POST'])
def doReset():
    return json.dumps(jiraId)

@app.route('/status', methods=['GET'])
def doStatus():
    return json.dumps(status)
