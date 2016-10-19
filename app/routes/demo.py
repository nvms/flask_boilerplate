from flask import render_template, jsonify, request
from app import app


@app.route('/demo')
def _route_demo():
    return render_template('demo.html', title='app, demo')
