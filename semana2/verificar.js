// PEDIR PARA USUÁRIO DIGITAR SEU NOME
process.stdout.write("Preencha sua idade para saber se já tem idade para dirigir \n");

// LER O QUE O USUÁRIO DIGITOU
process.stdin.once("data", function (data) {
    const YEAR = 2024;

// LER A IDADE
    let idade = parseInt (data.toString().trim());
    let ano = YEAR - idade
    let cnh = ''

    cnh = data.toString().trim()

    if (idade >= 18) {
        console.log('Você já é velhinho')
    } if (idade < 18) {
        console.log('Você precisa ficar mais velho')
    }
// ENCERRAR O PROGRAMA    
    process.exit();
});