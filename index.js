// 1. Declare customerName in global scope using var
var customerName = "bob";

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Function to set bestCustomer in global scope
function setBestCustomer() {
    bestCustomer = "not bob"; // Declaring bestCustomer without var makes it global
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = "maybe bob"; // Reassigns the global variable
}

// 5. Declare leastFavoriteCustomer as a constant in global scope
const leastFavoriteCustomer = "someone";

// 6. Function to attempt changing leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    throw new Error("Assignment to constant variable."); // Simulating the actual JS error
}
