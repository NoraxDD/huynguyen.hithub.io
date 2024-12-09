document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcome-message");
    if (welcomeMessage) {
      welcomeMessage.textContent = "Welcome to our Fanclub!";
      welcomeMessage.style.textAlign = "center";
      welcomeMessage.style.fontSize = "24px";
      welcomeMessage.style.margin = "20px 0";
      welcomeMessage.style.color = "#2d89ef";
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const userMessage = document.getElementById("user-message");
  
    submitButton.addEventListener("click", function () {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
  
      if (name && email) {
        userMessage.textContent = `Thank you, ${name}! We've received your email: ${email}.`;
        userMessage.style.color = "green";
  
        // Clear the input fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
      } else {
        userMessage.textContent = "Please fill in both fields.";
        userMessage.style.color = "red";
      }
    });
  });
  