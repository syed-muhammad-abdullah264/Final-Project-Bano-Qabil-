
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();


    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMsg = document.getElementById("error-message");

    // Clear old message
    errorMsg.textContent = "";

    // Validation
    if (name === "" || email === "" || password === "" || message === "") {
        errorMsg.textContent = "Please fill out all required fields.";
        return;
    }

    let namePattern = /^[A-Za-z\s]+$/;
    if (!name.match(namePattern)) {
        errorMsg.textContent = "Name must only contain letters (no numbers).";
        return;
    }

    // Email format check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMsg.textContent = "Please enter a valid email address.";
        return;
    }

    // Password length check
    if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters long.";
        return;
    }

    // If all OK
    alert("Form submitted successfully!");
    document.getElementById("myForm").reset();
});
