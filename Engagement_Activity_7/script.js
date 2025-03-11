function changeTextButton() {
    // Write your code here
    document.getElementById("paragraphElement").innerText = "Hello World";
}

function changeStyleButton() {
    // Write your code here
    document.getElementById("paragraphElement").style.color = "red";
}

function hideDisplayButton() {
    // Write your code here
    document.getElementById("paragraphElement").style.display = "none";
}

function showDisplayButton() {
    // Write your code here
    document.getElementById("paragraphElement").style.display = "block";
}
    

// Stretch activity: write your code here
function updateParagraphText() {    
    changeTextDiv();
}

// Stretch activity: write your code here
function updateParagraphTextOnEnterOnInput(event) {
    if (event.key == "Enter") {
        changeTextDiv();
    }    
}

/*
Function created to change texts in multiple events like the two above;
*/ 
function changeTextDiv() {
    let inputText = document.getElementById("userInput");    
    document.getElementById("paragraphElement").innerText = inputText.value;
    inputText.value = "";    
}
