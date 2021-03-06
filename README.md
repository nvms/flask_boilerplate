# Requirements
- python 3.5
- flask (tested on 0.11.1)
- nodejs (tested on 4.6.1)
- gulp (tested on 3.9.1)

# Quickstart
- Clone the repository
- Install the dependencies: ```npm install```
- Start the server: ```python run.py```
- Visit http://127.0.0.1:5000

You might notice slow response request times, even when running locally, if you are visiting localhost. See [this link](https://stackoverflow.com/a/11150849) for an explanation.

# Notes
When using ```gulp sass:watch```, changes made to ```/sass/**/*.scss``` files are noticed and compiled into css at ```/app/static/css/app.css```.
