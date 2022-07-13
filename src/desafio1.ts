// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// o type sao inseridos por inferencia entao o TypeScript ja entende que o code e um number e name e string
let employee = {
code: 10,
name: "John"
};
// employee.code = "20"
// employee.name = true  // ao desmarca você observara que ocorera um erro pois as variaveis tem tipo
console.log(employee);

// Resposta 2 por objeto literal onde primeiro eu declaro os typos e depois as variaveis
const funcionario2: {codigo: number, nome: string} = {
    codigo: 20,
    nome: 'pedro'
    //fristname:"pedro", observe que ao tentar adicionar uma variavel nao declarada ele nao aceita
}
//console.log(funcionario2.fristname) 
console.log(funcionario2)
console.log(funcionario2.nome)

// Respostas 3 e 4 por interface onde e declarado a interface com duas variaves onde posso chamalas em outras  objetos
interface Funcionario {
    codigo: number,
    nome: string
};
// type Funcionario1 = {
//     codigo:number,
//     nome:string
// }

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}
console.log(funcionarioObj2)

