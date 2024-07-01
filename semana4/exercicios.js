/* process.stdout.write('Por favor digite um número inteiro: ')
process.stdin.on("data", function (data) {
    let entradaUsuario = Number(data.toString().trim());
    let antecessor = entradaUsuario -1;
console.log('Você digitou o número: ' + entradaUsuario + '. E o antecessor dele é o número: '+ antecessor);
    
    if (entradaUsuario != Number) {
        console.log('Por favor digite um número')
    }
    let sucessor = antecessor + 2;
    console.log('E o sucessor dele é o número: ' + sucessor + '.');
    process.exit();
}); */

/* let nome = '';
let nota1 = 0;
let nota2 = 0;
let nota3 = 0;
let nota4 = 0;
let resultado = 0;
process.stdout.write('Insira seu nome: ')
process.stdin.once("data", function (data) {
    nome = data.toString().trim();
    process.stdout.write(nome + ', insira sua 1ª nota: ')
    process.stdin.once("data", function (data) {
        nota1 = Number(data.toString().trim());
            process.stdout.write(nome + ', insira sua 2ª nota: ')
            process.stdin.once("data", function (data) {
            nota2 = Number(data.toString().trim());
                process.stdout.write(nome + ', insira sua 3ª nota: ')
                process.stdin.once("data", function (data) {
                nota3 = Number(data.toString().trim());
                    process.stdout.write(nome + ', insira sua 4ª nota: ')
                    process.stdin.once("data", function (data) {
                    nota4 = Number(data.toString().trim());
                    let media = (nota1 + nota2 + nota3 + nota4) / 4;
                    
if (media >= 7) {
    console.log(nome + ', sua média é: ' + media + ', e você está aprovado.')
}
//process.exit();
else {
    console.log(nome + ', sua média é: ' + media + ', desculpe, sua média foi menor que 7, você está reprovado.' )
}
});
});
});
});
}); */




/* let valorA = '';
let valorB = '';
let valorC = '';
process.stdout.write('Insira um valor: ')

 */