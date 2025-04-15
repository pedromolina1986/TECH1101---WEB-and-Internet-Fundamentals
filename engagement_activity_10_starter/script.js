// Array to hold the available cars
const carInventory = [];

// Event listener for the Add Car form
// It will execute the addCar() function when submitted
document.getElementById('carForm').addEventListener('submit', addCar);

// Event listener for the Display Inventory button
// It will execute the refreshInventory() function when clicked
document.getElementById('refreshInventoryButton').addEventListener('click', refreshInventory);

// Function to add a car to the array
function addCar(event) {

    // Prevent the default action
    event.preventDefault();

    // WRITE YOUR CODE HERE
    // 1. Get the values in the form fields
    // 2. Create a new 'car' object and add it to the carInventory array
    // 3. Reset the form fields for the next entry

    let make = document.getElementById("make").value;
    let model = document.getElementById("model").value;
    let year = document.getElementById("year").value;
    let price = document.getElementById("price").value;

    carInventory.push({
        make: make,
        model: model,
        year: year,
        price: price ? parseFloat(price) : 0
    });
}

// Function to display all existing cars on the page
function refreshInventory() {

    // WRITE YOUR CODE HERE
    // 1. Get the carList element
    // 2. Clear the current list
    // 3. Loop through the carInventory array, create a <li> element for each car, and display each car's information on the page.
    // Display format: "[year] [make] [model]: [price]"
    
    let inventoryList = document.getElementById("carList");
    inventoryList.innerHTML = '';
    carInventory.map(car => {
        let newInventoryItem = document.createElement("li");
        newInventoryItem.textContent = car.year + " " + car.make + " " + car.model + ": " + car.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          });
        inventoryList.appendChild(newInventoryItem);
    })
}
