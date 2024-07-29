let suma = 0;
for (let i = 0; i <= 1000; i++) {
  if (i % 2 !== 0) {
    suma += i;
  }
}
console.log("La suma de todos los números es:", suma);