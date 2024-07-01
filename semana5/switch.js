/* let codigo = '';
console.log('Digite um número: ')

switch (key) {
    case 'value1':
        
        break;
    case 'value2'

        break;
    default:
        break;
} */
/* let entradaUsuario = '';
let alimentoNao = 1;
let alimentoPere = 2;
let vestuario = 3;
let limpeza = 4;

process.stdout.write('Digite um número entre 1 e 4 para saber a classificação do produto: ')
process.stdin.on("data", function (data) {
    entradaUsuario = Number(data.toString().trim());
    switch (entradaUsuario) {
        case 1:
            console.log('Alimento não-perecível')
            break;
        case 2:
            console.log('Alimento perecível')
            break;
        case 3:
            console.log('Vestuário')
            break;
        case 4:
            console.log('Limpeza')
            break;
        default: console.log('Digite um número entre 1 e 4')
            break;
    }
    process.exit(); 
}); */
/* let verao = "verão";
let outono = "outono";
let inverno = "inverno";
let primavera = "primavera";
process.stdout.write('Digite uma estação do ano: (com acentuação)')
process.stdin.on("data", function (data) {
    entradaUsuario = data.toString().trim().toLowerCase();
    switch (entradaUsuario) {
        case verao:
            console.log('janeiro a fevereiro')
            break;
        case outono:
            console.log('março a junho')
            break;
        case inverno:
            console.log('julho a setembro')
            break;
        case primavera:
            console.log('outubro a dezembro')
            break;
        default: console.log('----------- Inválido -----------')
            break;
    }
    process.exit(); 
}); */

/* let dias28 = "fevereiro";
let dias30 = "abril" || "junho" || "setembro" || "novembro";
let dias31 = "janeiro" || "março" || "maio" || "outubro" || "dezembro";

process.stdout.write('Digite um mês para saber a quantidade de dias: ')
process.stdin.on("data", function (data) {
    entradaUsuario = data.toString().trim();
    switch (passagem) {
        case "fevereiro":
            console.log('28 dias')
            break;
                case "abril":
                case "junho":
                case "setembro":
                case "novembro":
                    console.log('30 dias')
                    break;
                        case "janeiro":
                        case "março":
                        case "maio":
                        case "julho":
                        case "agosto":
                        case "outubro":
                        case "dezembro":
                            console.log('30 dias')
                            break;
                                default: console.log('Mês inválido (procure um calendário)')
                                break;
}
    process.exit(); 
}) */


/* process.stdout.write('Digite um mês para saber a quantidade de dias: ')
process.stdin.on("data", function (data) {
    let entradaUsuario = data.toString().trim().toLowerCase();
    switch (entradaUsuario) {
        case "fevereiro":
            console.log('28 dias')
            break;
        case 'abril':
        case 'junho':
        case "setembro":
        case 'novembro':
        console.log('30 dias')
            break;
            case "janeiro":
            case 'março':
            case 'maio':
            case 'julho':
            case 'agosto':
            case 'outubro':
            case 'dezembro':
            console.log('31 dias')
            break;
        default: console.log('----------- Inválido -----------')
            break;
    }
    process.exit(); 
}); */
let tentativas = 0;
let numeroCerto = Math.floor(Math.random() * 6 - 0 + 1);
console.log(numeroCerto)
process.stdout.write('Bem vindo ao jogo da adivinhação, digite um número de 1 a 6:')
process.stdin.on("data", function (data) {
    let entradaUsuario = Number(data.toString().trim());
    tentativas++;
    if (entradaUsuario == numeroCerto) {
        console.log('Você acertou');
        process.exit();}
        else if (tentativas < 3) {
            console.log('Você tem mais 2 tentativas') 
            }
                    else { 
                    console.log('Desculpe, você perdeu =(')
                    process.exit();
                    }

/* process.stdout.write('Tente mais uma vez:')
process.stdin.once("data", function (data) {
    let entradaUsuario = Number(data.toString().trim());
    if (entradaUsuario == numeroCerto) {
        console.log('Você acertou') 
        process.exit();
    } else { 
        console.log('Você falhou, desculpe!')
        process.exit();
    }
}) */
})
