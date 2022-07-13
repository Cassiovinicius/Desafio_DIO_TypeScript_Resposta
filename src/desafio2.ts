// // Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

//respostas
// podemos simplificar este codigo por interface assim podemos chamar o objeto quantas vezes quiser
type cadastro = {
    nome:string,
    idade:number,
    profissao:trabalho   
};
enum trabalho  {
    a ='atriz',
    b = 'pedreiro'  
}
let pessoa1: cadastro = {
  nome: "maria",
  idade: 29,
  profissao:trabalho.a
};
console.log(pessoa1)
let pessoa2: cadastro = {
    nome: 'roberto',
    idade: 19,
    profissao: trabalho.b
};
console.log(pessoa2)
let pessoa3: cadastro = {
    nome: 'laura',
    idade: 32,
    profissao: trabalho.a
};
console.log(pessoa3)
let pessoa4: cadastro = {
    nome: "carlos",
    idade: 19,
    profissao: trabalho.b
}
console.log(pessoa4)