from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
@app.route('/it')
def regioni():
    import pandas as pd
    df = pd.read_csv('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-statistici-riferimento/popolazione-istat-regione-range.csv')
    lista1 = sorted(list(set(regioni['denominazione_regione'])))    
    return render_template("indexregioni_ita.html", lista = lista1)

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=3245, debug=True)