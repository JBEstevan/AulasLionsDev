/* 2. crie um código que declare uma variável booleana
para verificar se um número é par e mostre o resultado 
no console */
/* let entrada = 0;
let variavel;

    if (entrada % 2 !== 0) {
        console.log(variavel = false);
    } else {
        console.log(variavel = true);
    } */
//3. Considere o seguinte trecho de código:
/* let idade = 18
let mensagem
if (idade >= 18) {
    mensagem = "Você é maior de idade."
} else {
    mensagem = "Você é menor de idade."
}
console.log(mensagem)
Modifique o código para que a mensagem seja "Você pode votar"
se a idade for maior de 16 ou mais e "Você não pode votar" caso
contrário. Em seguida, explique qual parte desse código será
executada, e qual mensagem será impressa. */ 
/* let idade = 18
let mensagem
if (idade >= 16) {
    mensagem = "Você pode votar."
} else {
    mensagem = "Você não pode votar."
}
console.log(mensagem) */
/* 4. Considere o trecho de código abaixo.
let idade = 21;
let mensagem
if (idade >= 18) {
    mensagem = "Você é maior de idade."
} else {
    mensagem = "Você é menor de idade."
}
console.log(mensagem)
Modifique o código para que a mensagem seja "Você pode dirigir"
se a idade for maior de 18 ou mais e "Você não pode dirigir" caso
contrário. Em seguida, explique qual parte desse código será
executada, e qual mensagem será impressa. */
/* let idade = 21;
let mensagem
if (idade >= 18) {
    mensagem = "Você pode dirigir."
} else {
    mensagem = "Você não pode dirigir."
}
console.log(mensagem) */
//5. Considere o trecho de código abaixo.
/* let numeros = [1, 2, 3, 4, 5]
let soma = 0
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 != 0) {
        soma += numeros[i]
    }
}
console.log(soma) */
/* Explique com sua palavras o que o código está fazendo. Fale sobre
qual é o valor que será impresso no console, e explique por que. */
/* 06. Considere a seguinte situação:
Você está desenvolvendo um sistema simples para calcular notas
de alunos em uma escola. O sistema precisa armazenar as notas
dos alunos e realizar certas operações básicas. As notas
são representadas por um array de números.
Parte 1: Aqui está o código inicial que cria uma lista de notas
e imprime algumas informações básicas:
//Lista de notas dos alunos
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
//Imprime todas as notas
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}
Parte 2: Basesado no código inicial, responda às seguintes questões
e realize as seguintes tarefas:
A) Imprimir a Média das Notas: Adicione um código que calcule
e imprima a média das notas. */
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
let media = 0;
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
media = soma / notas.length;
console.log("Média", media)
/* B) Nota Máxima e Nota Mínima: Adicione um código que encontre
e imprima a nota mais alta e a nota mais baixa.
C) Notas Acima da Média: Adicione um código que conte e imprima
quantas notas estão acima da média.
D) Adicionar Nova Nota: Escreva */