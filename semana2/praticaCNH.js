// PEDIR PARA USUÁRIO DIGITAR SEU NOME
process.stdout.write("Digite sua idade \n");

// LER O QUE O USUÁRIO DIGITOU
process.stdin.once("data", function (data) {
    const YEAR = 2024;

// LER A IDADE
    let idade = parseInt (data.toString().trim());
    let ano = YEAR - idade
    let cnh = ''
    process.stdout.write("Você nasceu no ano de " + ano + ".");

process.stdout.write("Você Possui CNH?");
process.stdin.once("data", function (data) {
    cnh = data.toString().trim()

    if (cnh == 'Sim') {
        console.log('Parabéns, você tem CNH!')
    } if (cnh == 'Não') {
        console.log('Você precisa de CNH!')
    }
// ENCERRAR O PROGRAMA    
    process.exit();
})});