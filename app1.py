from flask import Flask, render_template
from datetime import datetime
app = Flask(__name__)

@app.route('/')
@app.route('/en')
def hello_world():
  ora = datetime.now()
  return render_template("index1.html", Titolo='Welcome', Testo='Hello, world!', Ora = ora)

@app.route('/it')
def ciao_mondo():
  ora = datetime.now()
  return render_template("index1.html", Titolo='Benvenuti', Testo='Ciao, mondo!', Ora = ora)

@app.route('/es')
def hola_mundo():
  ora = datetime.now()
  return render_template("index1.html", Titolo='Bienvenido', Testo='Hola, mundo!', Ora = ora)

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)