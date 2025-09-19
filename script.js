function sendEmail (){
    let parms = {
        name : document .getElementById("name").value, 
        email : document.getElementById("email").value, 
        message : document.getElementById("message").value, 
    }

    emailjs.send("service_ekq7o5r","template_lqxy1yg",parms).then(alert("Email Sent!"))
}