document.addEventListener("DOMContentLoaded", function () {
  // Add loading state to buttons
  document.querySelectorAll('button[type="submit"]').forEach(button => {
    button.addEventListener('click', function() {
      if (this.form && this.form.checkValidity()) {
        this.classList.add('loading');
        this.setAttribute('disabled', 'disabled');
        this.innerHTML = '<span class="spinner"></span> Sending...';
      }
    });
  });

  // Enhance keyboard navigation
  document.querySelectorAll('nav a, .buttons a, form input, form textarea, form select').forEach(element => {
    element.addEventListener('focus', function() {
      this.classList.add('focus-visible');
    });
    element.addEventListener('blur', function() {
      this.classList.remove('focus-visible');
    });
  });

  function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error-message")) {
      error = document.createElement("div");
      error.classList.add("error-message");
      input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = message;
    input.classList.add("input-error");
  }

  function clearError(input) {
    let error = input.nextElementSibling;
    if (error && error.classList.contains("error-message")) {
      error.textContent = "";
    }
    input.classList.remove("input-error");
  }


  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullName = document.getElementById("full-name");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const interest = document.getElementById("interest");
      const message = document.getElementById("message");

      let valid = true;

      // Validate Name
      if (fullName.value.trim() === "") {
        showError(fullName, "Please enter your full name.");
        valid = false;
      } else {
        clearError(fullName);
      }

      // Validate Email
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email.value.trim())) {
        showError(email, "Please enter a valid email address.");
        valid = false;
      } else {
        clearError(email);
      }

      // Validate Phone
      const phonePattern = /^[0-9+ ]{10,15}$/;
      if (!phonePattern.test(phone.value.trim())) {
        showError(phone, "Please enter a valid phone number.");
        valid = false;
      } else {
        clearError(phone);
      }

      // Validate Interest
      if (interest.value === "") {
        showError(interest, "Please select an interest option.");
        valid = false;
      } else {
        clearError(interest);
      }

      // Validate Message
      if (message.value.trim() === "") {
        showError(message, "Please enter your message.");
        valid = false;
      } else {
        clearError(message);
      }

      if (valid) {
        alert(
          `Thank you, ${fullName.value}! Your enquiry about "${interest.value}" has been received. We'll get back to you soon.`
        );
        enquiryForm.reset();
      }
    });
  }

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      let valid = true;

      // Name
      if (name.value.trim() === "") {
        showError(name, "Please enter your name.");
        valid = false;
      } else {
        clearError(name);
      }

      // Email
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email.value.trim())) {
        showError(email, "Please enter a valid email address.");
        valid = false;
      } else {
        clearError(email);
      }

      // Message
      if (message.value.trim() === "") {
        showError(message, "Please enter your message.");
        valid = false;
      } else {
        clearError(message);
      }

      if (valid) {
        alert(
          `Thank you, ${name.value}! Your message has been sent. We'll respond as soon as possible.`
        );
        contactForm.reset();
      }
    });
  }

});