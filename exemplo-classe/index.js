class InformeRendimento{ //idealização de algo do mundo real para um software (objeto de classe)
    #nome; //atributos privados que não pode ser acessados diretamente pelo usuário
    #idade; //atributos privados que não pode ser acessados diretamente pelo usuário
    #gastosAno; //atributos privados que não pode ser acessados diretamente pelo usuário
    constructor(nome, idade, gastosAno){ //parâmetros passados pelo usuário o construct interpreta e gerencia o que é inserido na classe
        this.#nome = nome; //fazendo com que a classe receba e interprete o que o usuário digitou para ser inserido na classe
        this.#idade = idade;
        this.#gastosAno = gastosAno;
    }
    //os atributos antecedidos do simbolo # são privados então só é possível que os usuários o acessem através de uma função pública que os retorna
    impostoRenda(nome, idade, gastosAno){ //função no qual irá acessar os atributos privados e retornará para o cliente
        if(this.#nome !== null && this.#idade!==null && this.#gastosAno !==null){ //verifica se foi feito a declaração e retorna o único dado que o usuário precisa visualizar
            console.log("declaração feita com sucesso!"); //o dado que o usuário pode visualizar é somente aquele que ele precisa ver
            console.log(this.#nome + " volte sempre"); //retorno dados privados mais o usuário não pode manipular
        }
    }
}

let pessoaInforme = new InformeRendimento("João","24",2309);
pessoaInforme.impostoRenda();