function diga_meu_nome(name){
    console.log("Seu nome é: " + name);
}

diga_meu_nome("Fernando");
diga_meu_nome("Isadora")

///////////////////////////////////////////////////

function quadrado(valor){
    return valor * valor;
}

const resultado = quadrado(10);
console.log(resultado);

///////////////////////////////////////////////////

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));

