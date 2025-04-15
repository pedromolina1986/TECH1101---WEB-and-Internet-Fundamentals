function generateCountdown() {

    // Get the value the user entered
    const input = document.getElementById('numberInput').value;
    
    // Convert that value from a string to a number
    let number = Number(input);

    // Get the HTML element where the list should be displayed
    const output = document.getElementById('output');

    // Clear any previous results
    output.innerHTML = '';
    

    // WRITE YOUR CODE HERE
    // - Create a loop that counts down from "number" to 0
    // - During each loop, create a new <li> element with the current "number" and append it to the "output"
    // - Exit the loop when "number" is less than 0
    // 
    // Stretch activity:
    // - If "number" is less than 0, display an error message and don't do the loop

    if (number < 0 ) {
        output.innerHTML = "Please enter a positive number!";
    } else {
        let count = 0;
        let element;
        do {
            element = document.createElement("li");
            element.textContent = count;
            output.appendChild(element);
            count++;
        } while (number >= count )
    }

}