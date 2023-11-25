document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitOrder");
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const topping = document.querySelector('input[name="topping"]:checked').value;
        const sauce = document.getElementById("sauce").value;
        const extras = Array.from(document.querySelectorAll('input[name="extras[]"]:checked')).map(checkbox => checkbox.value);
        const instructions = document.getElementById("instructions").value;

        // Create a new row in the order table with the user's input
        const orderTable = document.getElementById("orderTable");
        const newRow = orderTable.insertRow(1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);

        cell1.innerHTML = name;
        cell2.innerHTML = topping;
        cell3.innerHTML = sauce;
        cell4.innerHTML = extras.join(", ");
        cell5.innerHTML = instructions;
    });
});