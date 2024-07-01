/* let lista = []; 
let listaPar = [];
let listaImpar = [];
let maiorPar = 0;
let maiorImpar = 0;
process.stdout.write("Por favor digite 15 números entre 0 a 100: ");
process.stdin.on("data", function (data) {
    let entradaUsuario = data.toString().trim();
        if (lista.length > 14) {
            //SEPARANDO OS NÚMEROS PARES E IMPARES
        for (let i = 0; i < lista.length; i++) {
            if (lista) {
                
            }
        }
//USANDO forEach
console.log("Usando forEach: ");
        lista.forEach(function(elemento){
            console.log(elemento);
        });
process.exit();
    } else {
        lista.push(entradaUsuario);
        console.log("Insira mais um número: ");
    }
});


 */

/* let array = [2, 3 , 55, 6, 22, 15, 100, 8]
let contUm = 0;
let contDois = 0;
let result = 0;

for (let i = 0; i < array.length; i++) {
    result = array[i] % 2;

    if (result == 0) {
        contUm++;
    } else {
        contDois++;
    }

}

console.log(contUm, contDois); */

/* Tendo a lista de notas = [35, 50, 70, 85], descreva um script capaz de realizar a leitura
 do mesmo e realize a média do aluno, e assim retorna uma mensagem informando se o aluno 
 passou por média ou não, levando em consideração que a média é 7. */
let listaNotas = [35, 50, 70, 85];
let soma = 0;
for (let nota of listaNotas) {
    soma += nota;
};
/* for (let i = 0; i < listaNotas.length; i++) {
    soma = listaNotas[i];
    media = i / listaNotas.length; */

let media = soma / listaNotas.length;
console.log(media);