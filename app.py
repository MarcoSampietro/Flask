from flask import Flask
app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return ('<h1>Hello, world!</h1>')

@app.route('/it', methods=['GET'])
def ciao_mondo():
    return ('<h1 style="color:red">Ciao, mondo!</h1>')

@app.route('/es', methods=['GET'])
def hola_mundo():
    return ('<h1 style="color:yellow">Hola, mundo!</h1>')

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)