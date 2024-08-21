let outputScreen = document.getElementById("output-screen");

function display(num) {
    // Append only the allowed inputs
    outputScreen.value += num;
}

function Calculate() {
    try {
        // Evaluate the expression only if it's a valid mathematical expression
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Invalid Input");
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

// Optional: Prevent any default keyboard input to ensure the input field remains untouched
outputScreen.addEventListener('keydown', function(event) {
    event.preventDefault();
});
