var n = prompt("Введіть число:");

n = parseInt(n);

if (!isNaN(n)) {
    if (n % 2 === 0) {
        console.log(`${n} - парне число.`);
    } else {
        console.log(`${n} - непарне число.`);
    }
} else {
    console.log("Будь ласка, введіть коректне число.");
}
