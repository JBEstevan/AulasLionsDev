let somaPar = 0;
let somaImpar = 0;

let totalPar = 0;
let totalImpar = 0;

for (let i = 0; i <= 999; i++) {
    if (i % 2 === 0) {
        somaPar += i;
        totalPar ++ i;
    } else {
        somaImpar += i;
        totalImpar ++ i;
    }}

    let mediaPar = somaPar / totalPar;
    let mediaImpar = somaImpar / totalImpar;
    
    console.log("Soma dos ímpares:", somaImpar);
    console.log("Soma dos pares:", somaPar);
    console.log("Total de ímpares:", totalImpar);
    console.log("Total de pares:", totalPar);
    console.log("Média dos ímpares:", mediaImpar.toFixed(2)); // Arredonda para duas casas decimais
    console.log("Média dos pares:", mediaPar.toFixed(2));
    
    // Verificar qual teve o maior total
    if (somaImpar > somaPar) {
    console.log("Maior total: ímpares");
    } else if (somaImpar < somaPar) {
    console.log("Maior total: pares");
    } else {
    console.log("Total de ímpares e pares iguais");
    };

    /* console.log('Por favor, digite uma frase');
    process.stdin.on('data', function(data) {
        let frase = data.toString().trim();
        console.log(frase)
        let resultado = frase.length;
    if (resultado % 2 == 0) {
        console.log('Essa frase tem' + resultado + 'e é PAR!')
    } else {
        console.log('Essa frase tem' + resultado + ' e é IMPAR!')
    }
    process.exit();
    }
    ) */