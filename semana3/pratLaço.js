// Cria um array vazio para armazenar os hobbies
let vazio = '';
let hobbies = [];

process.stdout.write("Quais são seus hobbies?" + "Ou digite sair para terminar");
// Quando o usuário insere dados, este evento é acionado
process.stdin.on("data", function (data) {
let vazio = data.toString().trim().toLowerCase();
if (vazio === 'sair') {
    // Se o usuário digitar 'sair', exibe a lista de hobbies e encerra o programa
    array.forEach(function(vazio, index){
        console.log(index + " ." + vazio)
    })
    process.exit();
}
else{
    // Se o usuário inserir qualquer outra coisa, adiciona a lista de hobbies
    hobbies.push(vazio);
    console.log('Adicionado');
}
})
