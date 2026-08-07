const darkBtn =document.getElementById("darkBtn");
darkBtn.addEventListener("click", ()=> {
    document.body.classList.toggle("dark");
});

    


const changeBtn = document.getElementById("changePhoneBtn");
let isSmartphone =true;
}


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
    },
    {
        name:"Tecno camon",
    camera:"50mp tripple camera",
    battery:"5000mAh",
    use:"processes data quickly",
    },
    {
        name:"vivo",
        camera:"50mp tripple camera",
        battery:"4600mAh",
        use:"Enough to download as many apps",
    },
    {
        name:"Nokia",
        camera:"50mp tripple camera",
        battery:"5200mAh",
        use:"best screen",
    },
    {
        name:"Itel",
        camera:"50mp leica camera",
        battery:"5240mAh",
        use:"Music purposes",
    },
    {
        name:"Redmi",
        camera:"50mp tripple camera",
        battery:"5000mAh",
        use:"affordable",

    },
    {
        name:"Huawei",
        camera:"50mp tripple camera",
        battery:"5200mAh",
        use:"Has unique taste in technology",
    },
    {
        name:"Google pixel",
        camera:"50mp tripple camera",
        battery:"5300mAh",
        use:"Has unique taste in technology",
    },
]
changeBtn.addEventListener("click", function () {
    if(isSmartphone){
    
        document.getElementById("phoneName").InnerText = "Feature Phone";
        document.getElementById("Feature List").InnerHTML ="<li>Operating Sydtem and Apps<li/> <li>Hardware Performance<li/> <li>Connectivity and sensors<li/> <li>Security and Power<li/> "
        console.log("switch to feature phone");

        }else {
            
            document.getElementById("phoneName").InnerText="Smartphone";
            document.getElementById("phoneImg").scr = "images.jpg";
            document.getElementById("phone description").InnerText ="   They are pocket-sized mobile devices that combine traditon <br> phone calling with advance computing power, <br> touchscreen,internet connectivity and app ecosystems.";
            document.getElementById("Feature list").InnerText="<li>Operating Sydtem and Apps<li/> <li>Hardware Performance<li/> <li>Connectivity and sensors<li/> <li>Security and Power<li/>"
            console.log("swicthed to Smartphone");
             
    }
   
isSmartphone = !isSmartphone;
});

const compareBtn =
document.getElementById("compareBtn");

comparison.addEventListener("click" , function () {


// Function to display phone information
function showPhone(index)  {
    alert(
        "Phone: " + phones[index].name +
        "\nCamera: " + phones[index].camera +
        "\nBattery: " + phones[index].battery +
        "\nBest Use: " + phones[index].use 

    );
} 
