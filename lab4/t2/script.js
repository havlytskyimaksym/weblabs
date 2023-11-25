let dictionary = {
    "go": "йти",
    "swim": "плавати",
    "run": "бігти",
};

function searchWord() {
    let wordInput = document.getElementById("wordInput").value.toLowerCase();

    if (!wordInput) {
        alert("Введіть слово.");
        return;
    }

    let translation = dictionary[wordInput];

    let resultDiv = document.getElementById("result");
    if (translation) {
        resultDiv.textContent = `Переклад: ${translation}`;
    } else {
        resultDiv.textContent = "Слово не знайдено";
    }

    document.getElementById("wordInput").value = "";
}
