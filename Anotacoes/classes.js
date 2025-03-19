class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const fernando = new Pessoa("Fernando",18);

const isadora = new Pessoa("Isadora",19);

console.log(fernando);
console.log(isadora);

fernando.descrever()
isadora.descrever()