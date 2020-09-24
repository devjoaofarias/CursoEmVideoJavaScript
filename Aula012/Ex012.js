//Pegar hora atual que o sistema roda!
var agora = new Date();
var horas = agora.getHours();

console.log(`Agora são exatamente ${horas} horas.`)

//Escolher qual saudação usar
if(horas < 12 && horas >= 5) {
    console.log(`Bom dia!`)
} else if (horas > 18) {
    console.log(`Boa noite`)
} else if (horas > 12 && horas <= 18) {
    console.log(`Boa tarde`)
} else {
    console.log(`Boa madrugada!`)
}