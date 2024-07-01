let transformando = '';
let entradaUsuario = '';

console.log('Digite 10 números entre 0 e 100, separados por vírgula:')
process.stdin.on('data', function(data) {
    entradaUsuario = data.toString();
    transformando = entradaUsuario.split( ); 
});
console.log(transformando);