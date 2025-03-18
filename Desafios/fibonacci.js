function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

let numero = Number(prompt("Digite o número: "));

if (!isNaN(numero) && numero >= 0) {
    console.log(`O ${numero}º número da sequência de Fibonacci é: ${fibonacci(numero)}`);
} else {
    console.log("Por favor, insira um número válido.");
}
