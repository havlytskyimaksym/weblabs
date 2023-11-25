function sumOfSeries(n) {
    if (n <= 0) {
        return "Невірне значення 'n'. 'n' повинно бути додатнім цілим числом.";
    }

    let sum = 0;
    let term = 1;

    for (let i = 1; i <= n; i++) {
        sum += term;
        term = term * 10 + 1;
    }

    return sum;
}

let n = 4;
let result = sumOfSeries(n);

console.log(`Сума ряду 1 + 11 + 111 + 1111 + ... до ${n} доданків: ${result}`);
