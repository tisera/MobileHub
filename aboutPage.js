const form =document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault ();
        document.getElementById("contactResult").innerHTML= "Thanks! Message sent successfully!";
    }); 
}