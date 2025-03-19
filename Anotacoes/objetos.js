const fernando = {
    nome: "Fernando Barreto Silva",
    idade: 18,
    namorada: "Isadora",
    nivel: 3,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const atributo = 'idade' // acessar de forma dinamica 

console.log(fernando['nome'])