// Mobile Hub - phone comparison

// Display a welcome message in the browser console
console.log("Welcome to Mobile Hub!");

// Show a welcome alert when the page loads
window.onload = function () {
    alert("Welcome to Mobile Hub. Compare smartphones and find the best one for you!");
};

// Phone information
const phones = [
    {
        name: "Samsung Galaxy S25",
        camera: "50MP Triple Camera",
        battery: "5000mAh",
        use: "Gaming and Multitasking"
    },
    {
        name: "iPhone 16",
        camera: "48MP Dual Camera",
        battery: "3561mAh",
        use: "Video Recording and Daily Use"
    },
    {
        name: "Google Pixel 10",
        camera: "50MP AI Camera",
        battery: "5000mAh",
        use: "Photography and AI Features"
    }
];

// Function to display phone information
function showPhone(index) {
    alert(
        "Phone: " + phones[index].name +
        "\nCamera: " + phones[index].camera +
        "\nBattery: " + phones[index].battery +
        "\nBest Use: " + phones[index].use
    );
}
