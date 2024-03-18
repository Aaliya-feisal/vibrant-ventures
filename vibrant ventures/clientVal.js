document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const fName = signupForm.elements["fName"].value;
        const lName = signupForm.elements["lName"].value;
        const email = signupForm.elements["email"].value;        
        
        // Name Validation
        if (!validateName(fName)) {
            alert("Invalid First Name!");
            return;
        }
        if (!validateName(lName)) {
            alert("Invalid Last Name!");
            return;
        }
        // Email validation
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        // If validations pass, submit the form
        signupForm.submit();
    });

    function validateName(name){
        // Check for number or special characters
        const regEx = /[0-9!@#$%^&*()_+={}[\]|\\:;"'<>.,?/~`]/;
        return !regEx.test(name)
    }
    
    function validateEmail(email) {
        // Validate email input
        const regEx = /\S+@\S+\.\S+/;
        return regEx.test(email);
    }
});
