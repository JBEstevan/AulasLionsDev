/* let carro = {
    fabricante: "Fiat";
    modelo: "Uno";
    peso: 900;
}
let pessoa = {
    nome: "João";
    idade: 25;
    cidade: "São Paulo";
} */

/* let curso = {};

curso = {
    nomeCurso: 'Javascript';
    local: 'Lions Startups';
    ano: 2024;
    professores: ['Edson', 'Eduardo', 'Jhonatan', 'João']
} */
let info = {};

info = {
    nome: '';
    idade: '';
    cnh: '';
}
    process.stdout.write("Digite seu nome:")

    process.stdin.once("data", function (data) {
        let nome = data.toString().trim().toLowerCase()
        info.push(nome);
    process.stdout.write("Você possui CNH? (Sim ou Não)")
        process.stdin.once("data", function (data) {
    usuario.cnh = data.toString().trim().toLowerCase();

    if (usuario.cnh == "sim") {
        process.stdout.write(
            "Parabéns, " + info.nome + "! Você pode dirigir! \n"        
        );
    } else {
        process.stdout(
            "Infelizmente, " +info.nome + ", você não pode dirigir."
        );
    }
    process.exit();
})
    });
        });
