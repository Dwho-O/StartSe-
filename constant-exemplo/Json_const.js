const Pessoas ={
    nome: 'João',
    sobrenome: 'Paulo',
    endereco :{
        rua: 'Marfim',
        bairro: 'Pedro Alvares Cabral',
        cidade: 'São Paulo'
    },
    nomeCompleto: function(){ //é possível criar função desta forma, o "nomeCompleto" é o nome da função que está dentro de pessoas
        return this.nome + ' ' + this.sobrenome; //this = objeto Pessoas
    }
};

console.log(Pessoas.nome);
console.log(Pessoas.sobrenome);
console.log(Pessoas.endereco.rua);
console.log(Pessoas.endereco.bairro);
console.log(Pessoas.endereco.cidade);

//console.log('Nome completo: '+ Pessoas.nomeCompleto()); //function nomeCompleto
console.log('Nome completo : ${Pessoas.nomeCompleto()}'); //instanciar variável dentro das aspas ${} 
// alert('Olá, '+ Pessoas.nome);

function BemVindo(nome){
    return alert("Bem-vindo(a) "+ nome);
}

BemVindo(Pessoas.nome);