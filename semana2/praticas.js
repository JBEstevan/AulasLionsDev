/* let cafe = 'Sim';

process.stdout.write('Você gosta de café?');
process.stdin.on("data", function (data)
    let cafe = parseInt(data.toString().trim());

if (cafe == 'Sim') {
    console.log('Que bom! Somos amigos!');
} else {
    console.log('Que pena! Não sabe o que está perdendo!');
}
process.exit();
)
 */
//let cafe = 'Sim'
/* process.stdout.write("Você gosta de café?");
process.stdin.once("data", function (data) {
let respostaCafe = data.toString().trim().toLowerCase();

if (respostaCafe == 'sim') {
console.log('Que bom! Somos amigos!');
} else if(respostaCafe != 'sim') {
    console.log('Que pena! Não sabe o que está perdendo!');
    process.exit();
}}) */


console.log("Digite um número");
process.stdin.once("data", function (data) {
let respostaNum = Number(data.toString().trim());

if (respostaNum % 2 == 0) {
console.log('Par');
process.exit();
} else {
    console.log('Ímpar');
    process.exit();
}})

