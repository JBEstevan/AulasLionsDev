/* let listaNum = [1,2,3,4,5,6,7,8,9,10];
console.log(listaNum);
listaNum.push(11);
console.log(listaNum);
listaNum.push('Isso não é um número');
console.log(listaNum);
listaNum.pop();
console.log(listaNum);
listaNum.unshift(0);
console.log(listaNum)
//INCLUDES VERIFICA SE UM ELEMENTO ESTÁ NO ARRAY
console.log(listaNum.includes(12));
//indexOf RETORNA O INDICE DO PRIMEIRO ELEMENTO ENCONTRADO
console.log(listaNum.indexOf(''));
//splice ALTERA O CONTEUDO DE UMA LISTA, ADICIONANDO NOVOS ELEMENTOS
let x = listaNum.splice(0, 9);
console.log(x);
console.log(listaNum)
length RETORNA O NÚMERO DE ELEMENTOS DO ARRAY
console.log(listaNum.length);
 */
/* let listaNum = [1,2,3,4,5,6,7,8,9,10];
console.log(listaNum);
/* for (let index = 0; listaNum.length > 1; index++) {
    console.log(index[listaNum]);
    break;
} */
/* let j = 0;
while (j < listaNum.length) {
    console.log(listaNum[j]);
    break
}
let j = 0;
while (j < listaNum.length) {
    console.log(listaNum[j])
    j++;
}
do {console.log(listaNum[j])
    j++;
    
} while (j <listaNum.length);

listaNum.forEach(elemento => {
    console.log(elemento)
}); */
/* escreva um algoritmo onde o usuario digite 15 números entre 0 a 100.
Armazene esse número em um Array. No final do programa imprima o Array
elemento por elemento, usando laço de repetição for, foreach, while e do while
e o tamanho do Array
 */

let lista = []; 
process.stdout.write("Por favor digite 15 números entre 0 a 100: ");
process.stdin.on("data", function (data) {
    let entradaUsuario = data.toString().trim();
        if (lista.length > 14) {
            console.log("Esses são os números imprimidos por for:");
        for (let i = 0; lista.length > i; i++) {
            console.log(lista[i]);
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