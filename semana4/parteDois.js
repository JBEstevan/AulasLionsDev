let listaPar = [];
let listaImpar = [];
let listas = [listaPar, listaImpar]
process.stdout.write("Por favor digite 15 números entre 0 a 100: ");
process.stdin.on("data", function (data) {
    let entradaUsuario = data.toString().trim();
        if (entradaUsuario % 2 == 0) {
            console.log("Esses são os números pares imprimidos por for:");
        for (let i = 0; listaPar.length > i; i++) {
            console.log(listaPar[i]);
        }
        if (entradaUsuario % 2 == 1) {
            console.log("Esses são os números impares imprimidos por for:");
        for (let i = 0; listaImpar.length > i; i++) {
            console.log(listaImpar[i]);
        }
        }
process.exit();
    } 
    else {
        listaPar.push(entradaUsuario);
        listaImpar.push(entradaUsuario);
        console.log("Insira mais um número: ");
    }
});