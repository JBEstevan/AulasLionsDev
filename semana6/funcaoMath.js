let resultado;
//resultado = Math.pow(2, 2);
//Ptencia 2 elevado a 2 = 4

//raiz quadrada
//resultado = Math.sqrt(25, 5);
//console.log(resultado)
//resultado = 99.8

//arredondar para cima
//resultado = Math.ceil(resultado);
//console.log(resultado)

//arredondar para baixo
//resultado = Math.floor(resultado)
//console.log(resultado);

//arredondar para mais pŕoximo
//resultado = Math.round(resultado);
//console.log(resultado);

//resultado = Math.PI;
//console.log(resultado.toFixed(0));

//resultado = Math.random().toFixed(4);
//console.log(resultado);

//resultado = Math.random() * (max - min) + min
//resultado = Math.round(Math.random() * 6 - 0 + 0);
//console.log(resultado);

//Selecionar um item aleatório de um array:
/* const nomes = ['Luiz', 'Maria', 'Helena', 'Felipe', 'João'];
console.log(nomes.length);
const indiceArray = Math.floor(Math.random() * nomes.length);
const randomElement = nomes[indiceArray];
console.log(randomElement); */


/* let r1 = 9;
let r2 = 2;
let r3 = 3;
let r4 = [38, 16, 71, 44, 17, ]
//bizu para espalhar array é reticencias
resultado = Math.max(...r4);
console.log(resultado) */

let r1 = 4;
let r2 = 2;
let r3 = 3;
let r4 = [38, 16, 71, 44, 17, ]
//bizu para espalhar array é reticencias
resultado = Math.min(r1, r2, r3, ...r4);
console.log(resultado)