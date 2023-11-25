function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

let yearToCheck = 2024;
console.log(`Чи ${yearToCheck} є високосним роком? ${isLeap(yearToCheck)}`);
