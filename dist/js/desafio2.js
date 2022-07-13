"use strict";
// // Como podemos melhorar o esse código usando TS? 
var trabalho;
(function (trabalho) {
    trabalho["a"] = "atriz";
    trabalho["b"] = "pedreiro";
})(trabalho || (trabalho = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: trabalho.a
};
console.log(pessoa1);
let pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: trabalho.b
};
console.log(pessoa2);
let pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: trabalho.a
};
console.log(pessoa3);
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: trabalho.b
};
console.log(pessoa4);
