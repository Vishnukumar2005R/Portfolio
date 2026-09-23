// ========================================
// EMAILJS INITIALIZATION
// ========================================

emailjs.init({

    publicKey: "n2hCJarTpe8UH14nt"

});


// ========================================
// GET HTML ELEMENTS
// ========================================

const contactForm =
    document.getElementById("contact-form");

const sendButton =
    document.getElementById("send-button");

const formMessage =
    document.getElementById("form-message");


// ========================================
// FORM SUBMIT
// ========================================

contactForm.addEventListener(
    "submit",
    function(event) {

        // Prevent page refresh
        event.preventDefault();


        // Show sending message
        sendButton.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        sendButton.disabled = true;


        // ========================================
        // SEND EMAIL
        // ========================================

        emailjs.sendForm(

            "service_5ji35nf",

            "template_va3y96m",

            contactForm

        )


        // ========================================
        // SUCCESS
        // ========================================

        .then(function(response) {

            console.log(
                "SUCCESS!",
                response.status,
                response.text
            );


            formMessage.innerText =
                "Message sent successfully!";

            formMessage.style.color =
                "green";


            // Clear form
            contactForm.reset();


            // Restore button
            sendButton.innerHTML =
                '<i class="fa-solid fa-paper-plane"></i> Send Message';

            sendButton.disabled = false;

        })


        // ========================================
        // ERROR
        // ========================================

        .catch(function(error) {

            console.log(
                "FAILED...",
                error
            );


            formMessage.innerText =
                "Failed to send message. Please try again.";

            formMessage.style.color =
                "red";


            // Restore button
            sendButton.innerHTML =
                '<i class="fa-solid fa-paper-plane"></i> Send Message';

            sendButton.disabled = false;

        });

    }
);