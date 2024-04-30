function get_elenco(){
    fetch('https://3245-marcosampietro-flask-vdd5iypimlj.ws-eu110.gitpod.io/elenco')
    .then(response => response.json())
    .then(data => {
        let elenco = '';
        for (let regione in data) {
            elenco += '<a href="/info/' + data[regione] + '">' + data[regione] + '</a><br />';
        }
        document.getElementById('elenco').innerHTML = elenco;
    })
}