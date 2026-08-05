const darkBtn =document.getElementById("darkBtn");
darkBtn.addEventListener("click", ()=> {
    document.body.classlist.toggle("dark");
});

    


const changeBtn = document.getElementById("changePhoneBtn");
let isSmartphone =true;

changeBtn.addEventListener("click", () => {
    if(isSmartphone){
    
        document.getElementById("phoneName").InnerText = "Feature Phone";
        document.getElementById("Feature List").InnerHTML ="<li>Operating Sydtem and Apps<li/> <li>Hardware Performance<li/> <li>Connectivity and sensors<li/> <li>Security and Power<li/> "
        console.log("switch to feature phone");

        }else {
            
            document.getElementById("phoneName").InnerText="Smartphone";
            document.getElementById("phoneImg").scr = "images.jgp";
            document.getElementById("phone description").InnerText ="   They are pocket-sized mobile devices that combine traditon <br> phone calling with advance computing power, <br> touchscreen,internet connectivity and app ecosystems.";
            document.getElementById("Feature list").InnerText="<li>Operating Sydtem and Apps<li/> <li>Hardware Performance<li/> <li>Connectivity and sensors<li/> <li>Security and Power<li/>"
            console.log("swicthed to Smartphone");
            

            
    }
        
    
    isSmartphone = !isSmartphone;
 });

