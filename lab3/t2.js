let radius = prompt("Введіть радіус кола:");

radius = parseFloat(radius);

if (!isNaN(radius) && radius > 0) {
    let perimeter = 2 * Math.PI * radius;
    let area = Math.PI * Math.pow(radius, 2);
    console.log("Периметр кола:", perimeter.toFixed(2));
    console.log("Площа кола:", area.toFixed(2));
} else {
    console.log("Будь ласка, введіть коректне значення для радіусу.");
}
