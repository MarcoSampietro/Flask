function get_elenco(){
    fetch('https://3245-marcosampietro-flask-f3mb8qsfjka.ws-eu110.gitpod.io/elenco')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let regione in data) {
            document.getElementById('elenco').innerHTML += data[regione] + '<br />'
        }
    })
}