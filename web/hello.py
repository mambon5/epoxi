"""test Flask with this"""

from flask import Flask
app = Flask(__name__)

@app.route('/foobar')
def foobar():
    return '<h1>Hi there, foobar!</h1>'