from flask import Flask, render_template
from datetime import datetime
app = Flask(__name__)

@app.route('/', methods = ['GET'])
def homepage():
    #questa rotta restiutuisce la homepage della nostra single page application
    return render_template('dati_reg.html')

@app.route('/elenco', methods = ['GET'])
def elenco():
    import pandas as pd
    df = pd.read_csv('/workspace/Flask/data/regioni.csv')
    info = df['nome_regione']
    return render_template('json.html', tabella = info.to_json())

@app.route('/info/<nome_regione>', methods = ['GET'])
def info(nome_regione):
    import pandas as pd
    df = pd.read_csv('/workspace/Flask/data/regioni.csv')
    info = df[df['nome_regione'] == nome_regione]
    return render_template('json.html', tabella = info.to_json())

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)