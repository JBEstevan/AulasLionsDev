const prompt = require("prompt-sync")({sigint: true});

function calcular(numeros) {
    const algarismos = numeros.toString().split('');

    algarismos.sort((a, b) => b - a)

    const maior = algarismos.join('');

    return maior;
}

let numeros = prompt ('Por favor forneça um número: (ex: 1209)')

let maior = calcular(numeros)

console.log('O maior número possível é: ' + maior)