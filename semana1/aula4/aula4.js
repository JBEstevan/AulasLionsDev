let nome = '';
let idade = '';
console.log('Qual é o seu nome?');
process.stdin.once('data', function (data) {
    nome = data.toString();
    console.log('Quantos anos você tem?');
    process.stdin.once('data', function (data) {
    idade = data.toString();
    console.log('Bem vindo ' + nome + 'Você tem ' + idade + 'anos');
    process.exit();
})});