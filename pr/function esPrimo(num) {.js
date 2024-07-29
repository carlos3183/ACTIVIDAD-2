function esPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true; 
   
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const inicio = 300;
const fin = 1000;

let primos = [];

for (let i = inicio; i <= fin; i++) {
    if (esPrimo(i)) {
        primos.push(i);
    }
}

console.log("Números primos entre", inicio, "y", fin, "son:", primos);