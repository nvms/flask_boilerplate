from flask import render_template
from app import app


@app.route('/')
@app.route('/index')
def _route_index():
    return render_template('index.html', title='app, index')
