//LAÇO WHILE
/* let horas = 0;

while (horas < 12) {
    horas++;
    console.log('Bom dia');
} */

/* let i = 0;
while (i < 12) {
    console.log(i);
    i++;
} */

//LAÇO DO WHILE
/* let i = 12;
do {
    i ++;
    console.log('Bom dia');
} while (i < 12); */

//LAÇO FOR

/* for(let i = 0; i <= 12; i++) {
    console.log(i);
} */

/* for (let i = 100; i <= 200; i++) {
    let resultado = i % 2;
    if (resultado != 0) {
        console.log(i);
    }
} */

/* for (let i = 100; i <= 200; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
} */

/* process.stdout.write("Escolha uma tabuada:");
    process.stdin.once("data", function (data) {
    let tabuada = Number(data.toString().trim());

    for (let i = 1; i <= 10; i++) {
        let resultado = i * tabuada;
        console.log(i + ' vezes ' + tabuada + ' = ' + resultado + '.');
    }
    process.exit();
}) */

let somaPar = 0;
let somaImpar = 0;

let totalPar = 0;
let totalImpar = 0;

for (let i = 0; i <= 999; i++) {
    if (i % 2 === 1) {
        somaPar += i
        totalPar ++ i;
    } else {
        somaImpar += i
        totalImpar ++ i;
    }
    }
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
    }
    
    /* for (let i = 0; i <= 999; i++) {
        if (i % 2 === 1) {somaImparPar.push(i)    
        }
        } 
    for (let i = 0; i < 999; i++) {
        if (i % 3 === 0) {
            
        }
        
    }