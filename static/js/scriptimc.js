let peso = parseFloat(prompt('Inserisci il tuo peso'));
let altezza = parseFloat(prompt('Inserisci la tua altezza'));
const imc = (peso / (altezza * altezza)).toFixed(2);

let classificazioneIMC;
    if (imc < 18.5) {
        classificazioneIMC = "sottopeso";
    } else if (imc >= 18.5 && imc < 25) {
        classificazioneIMC = "normopeso";
    } else if (imc >= 25 && imc < 30) {
        classificazioneIMC = "sovrappeso";
    } else {
        classificazioneIMC = "obeso";
    }

console.log('Il tuo IMC è ' + imc + ', classificabile come soggetto ' + classificazioneIMC);
alert('Il tuo IMC è ' + imc + ', classificabile come soggetto ' + classificazioneIMC);