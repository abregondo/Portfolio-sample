document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // i prevent and default form submission

    const serviceID = "service_tr4r6ur"; 
    const templateID = "template_aodbrj7"; 

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset(); 
        }, (error) => {
            alert("Failed to send message. Please try again.");
            console.error("Error:", error);
        });
});
