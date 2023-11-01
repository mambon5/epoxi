"""a demo Flask app to access an API
   the idea for this example came from:
   https://medium.com/free-code-camp/how-to-build-a-web-app-using-pythons-flask-and-google-app-engine-52b1bb82b221
"""

import requests
from flask import Flask, render_template
app = Flask(__name__)

# this is not a real key
API_KEY = '12345abcXYZ'

# get weather by U.S. zip code 
API_URL = ('http://api.openweathermap.org/data/2.5/weather?lat=41.448700&lon=2.18942&mode=json&units=imperial&appid=fd40e381c95c12756f8bf6a1cebebdee')

def query_api(zip):
    """submit the API query using variables for zip and API_KEY"""
    try:
        # print(API_URL.format(zip, API_KEY))
        data = requests.get(API_URL.format(zip, API_KEY)).json()
    except Exception as exc:
        print(exc)
        data = None
    return data

@app.route('/')
def hello(lang="cat"):
    return render_template('index_cat.html', lang=lang)

@app.route('/weather/<zip>')
def result(zip):
    # get the json file from the OpenWeather API
    resp = query_api(zip)
    # construct a string using the json data items for temp and
    # description
    try:
        text = resp["name"] + " temperature is " + str( round( (resp["main"]["temp"]-32)*5/9 , 2) ) + " degrees Celsius with " + resp["weather"][0]["description"] + "."
    except:
        text = "There was an error.<br>Did you include a valid U.S. zip code in the URL?"
    return text

if __name__ == '__main__':
    app.run(debug=True)