function analyzeArray(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return "Переданий об'єкт не є масивом або масив порожній.";
    }

    let maxNumber = array[0];
    let minNumber = array[0];
    let sumPositive = 0;
    let productNegative = 1;
    let countPositive = 0;
    let countNegative = 0;

    for (let i = 0; i < array.length; i++) {
        // Пошук найбільшого числа
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }

        // Пошук найменшого числа
        if (array[i] < minNumber) {
            minNumber = array[i];
        }

        // Обчислення суми додатних чисел
        if (array[i] > 0) {
            sumPositive += array[i];
            countPositive++;
        }

        // Обчислення добутку від'ємних чисел
        if (array[i] < 0) {
            productNegative *= array[i];
            countNegative++;
        }
    }

    let result = {
        maxNumber: maxNumber,
        minNumber: minNumber,
        sumPositive: sumPositive,
        productNegative: (countNegative > 0) ? productNegative : 0,
        countPositive: countPositive,
        countNegative: countNegative
    };

    return result;
}

let myArray = [5, -2, 10, 7, -8, 3, 1, 0, -4, 6];
let analysisResult = analyzeArray(myArray);
console.log(analysisResult);
