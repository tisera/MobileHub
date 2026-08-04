const darkBtn =document.getElementById("darkBtn");
darkBtn.addEventListener("click"), ()=> {
    document.body.classlist.toggle("dark");
};
const changeBtn = document.getElementById("changePhoneBtn");
let isSmartphone =true;

changeBtn.addEventListener("click", () => {
    if(isSmartphone){
        document.getElementById("phoneName").InnerText = "Feature Phone";
        document.getElementById("phoneImg").scr= "image.jpg";
        document.getElementById("phone description").InnerText ="They are pocket-sized mobile devices that combine traditon  phone calling with advance computing power,  touchscreen,internet connectivity and app ecosystems."
        document.getElementById("Feature List").InnerHTML ="<li>Operating Sydtem and Apps<li/> <li>Hardware Performance<li/li> <li>Connectivity and sensors<li/> <li>Security and Power<li/> "
    }
    isSmartphone = !isSmartphone;

});
