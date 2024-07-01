console.log('Por favor, digite uma frase');
process.stdin.on('data', function(data) {
    let i = data.toString().trim();
if (i % 2 == 0) {
    console.log('Essa frase tem' + i.length + ' caracteres' + ' e é PAR!')
} else if (i % 2 != 0){
    console.log('Essa frase tem ' + i.length + ' caracteres' + ' e é IMPAR!')
}
process.exit();
}
)