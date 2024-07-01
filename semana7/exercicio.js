/* let f = 0;
let c = 0;
let k = 0;

let fahParaC = c == f - 32 / 1.8;
let fahParaK = k == c + 273.15;

let celParaF = f == (c * 1.8) + 32;
let celParaK = k == c + 273.15;

let kelParaC = c == k - 273.15;
let kelParaF = f == (k - 273.15) * 1.8 + 32;

process.stdout.write('Escolha uma escala, sendo que: F = Fahrenheit, C = Celsius, K = Kelvin');
process.stdin.once("data", function (data) {
    let escolhaEscala = data.toString().trim().toLowerCase();
    process.stdout.write('Insira o valor da temperatura');
process.stdin.once("data", function (data) {
    let entradaTemp = Number(data.toString().trim());
    switch (f) {
        case f:
            console.log(fahParaC, fahParaK);
            break;
        default:
            console.log('Escolha uma escala válida')
            break;
    }
})
}) */

const readline = require('readline');
const rl = readline.createinterface({
    input: ProcessingInstruction.stdin,
    output: process.stdout
});

let resultadoc;
let resultadok;
let resultadof;

rl.question('Digite "f" para Fahrenheit, "c" para Celsius e "k" para Kelvin: '
    (entrada) =>
)
