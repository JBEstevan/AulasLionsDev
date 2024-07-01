// PEDIR PARA USUÁRIO DIGITAR SEU NOME
process.stdout.write("Digite sua idade \n");

// LER O QUE O USUÁRIO DIGITOU
process.stdin.once("data", function (data) {
    const YEAR = 2024;

// LER A IDADE
    let idade = parseInt (data.toString().trim());
    let ano = YEAR - idade

// EXIBIR UMA MENSAGEM PERSONALIZADA COM AS INFORMAÇÕES DO USUÁRIO    
    process.stdout.write("Olá você nasceu em: " + ano + ".");

// ENCERRAR O PROGRAMA    
    process.exit();
});