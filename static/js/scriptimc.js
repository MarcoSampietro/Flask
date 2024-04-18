function Click()    {
    const peso = parseFloat(document.getElementById('peso').value)
    const altezza=parseFloat(document.getElementById('altezza').value)
    const imc= (peso / (altezza * altezza)).toFixed(2)
    console.log(imc)
    console.log(peso)
    console.log(altezza)
    document.getElementById('dai').innerHTML = 'Il tuo IMC è '+ imc
    if (imc < 18.5) {
        document.getElementById('imc').innerHTML= 'Sottopeso'}
    else if (18.5 < imc < 25) {
        document.getElementById('imc').innerHTML= 'Normopeso'
    }
    else if (imc > 25) {
        document.getElementById('imc').innerHTML= 'Sovrappeso'
    }
}