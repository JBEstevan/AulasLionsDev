let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let entradaUsuario = 0;
console.log('Por favor, digite um número de 1 a 10:');
process.stdin.on('data', function(data) {
    entradaUsuario = Number(data.toString().trim());
    numeros.forEach(function(numero, index) {
        if (entradaUsuario == numero) {
            console.log('está aqui ' + entradaUsuario);
            process.exit();
        }
    });
    console.log('Não está aqui ' + entradaUsuario);
/*     process.exit();
 *//*  for (let i = 0; i < numeros.length; i++) {
        if (entradaUsuario == numeros[i]) {
        console.log('ta aqui ' + entradaUsuario)
        }
        process.exit();
    } */
})
    /* console.log('não ta aqui' + entradaUsuario); */
    //console.log(numeros.includes(entradaUsuario));
/* if (numeros.includes(entradaUsuario) == true){
    console.log('ta aqui ' + entradaUsuario)
} else {
    console.log('não ta aqui ' + entradaUsuario)
}
}) */
/* let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let entradaUsuario = 0;

console.log('Por favor, digite um número de 1 a 10:');
    process.stdin.on('data', function(data) {
        let entradaUsuario =  Number(data.toString().trim());
        if (entradaUsuario == lista) {
            console.log('Você acertou!')
        } else {
            console.log('Você errou!')
        }
        process.exit();
    }) */

/*     let listas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let entradaUsuario = 0;
    
    console.log('Por favor, digite um número de 1 a 10:');
        process.stdin.on('data', function(data) {
            let entradaUsuario =  Number(data.toString().trim());
            let estaLista = false;
            for (let i = 0; i < listas.length; i++) {
                if (listas[i] == entradaUsuario) {
                    estaLista = true;
                    break;
                };
                if (estaLista) {
                    console.log('O número ' + entradaUsuario + ' está na lista!')
                } 
            }
            process.exit();
        })
 */
/*     Number(data.toString().trim()) */