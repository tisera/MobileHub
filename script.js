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
        camera: "50mp Triple Camera",
        battery: "5000mAh",
        use: "Gaming and Multitasking"
    },
    {
        name: "iPhone 17",
        camera: "47mp Dual Camera",
        battery: "3561mAh",
        use: "Video Recording and Daily Use"
    },
    {
        name: "Infinix 10",
        camera: "50MP AI Camera",
        battery: "5000mAh",
        use: "Photography and social media"
    }
    {
        name:"Tecno camon",
    camera:"50mp tripple camera",
    battery:"5000mAh",
    use:"processes data quickly",
    }
    {
        name:"vivo",
        camera:"50mp tripple camera",
        battery:"4600mAh",
        use:"Enough to download as many apps",
    }
    {
        name:"Nokia",
        camera:"50mp tripple camera",
        battery:"5200mAh",
        use:"best screen",
    }
    {
        name:"Itel",
        camera:"50mp leica camera",
        battery:"5240mAh",
        use:"Music purposes",
    }
    {
        name:"Redmi",
        camera:"50mp tripple camera",
        battery:"5000mAh",
        use:"affordable",

    }
    {
        name:"Huawei",
        camera:"50mp tripple camera",
        battery:"5200mAh",
        use:"Has unique taste in technology",
    }
    {
        name:"Google pixel",
        camera:"50mp tripple camera",
        battery:"5300mAh"
        use:"Has great zooming power"
    }
];

const comparison =
document.getElementById("compareBtn");

compareBtn.addEventListener("click" , function () {

    document.getElementById("resuit").innerHTML =
    "Comparison completed successfully!";

});
// Function to display phone information
function showPhone(index) {
    alert(
        "Phone: " + phones[index].name +
        "\nCamera: " + phones[index].camera +
        "\nBattery: " + phones[index].battery +
        "\nBest Use: " + phones[index].use
    );
}
