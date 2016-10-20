from app import app

app.jinja_env.auto_reload = True
app.run(debug=True, host='127.0.0.1', port=5000, threaded=True)
