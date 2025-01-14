document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");
    const uploadInput = document.querySelector("#upload-label");
    const uploadIcon = document.querySelector("#upload-icon");
    const uploadedImg = document.createElement("img");
    const removeBtn = document.querySelector(".remove-btn");
    const changeBtn = document.querySelector(".change-btn");
    const errorMessages = document.querySelectorAll(".error-warning");
    const avatarError = document.querySelector(".warning-text .error");
    const sizeWarning = document.querySelector(".warning-text .size-warning");
    const submitBtn = document.querySelector("#submit-btn");
    const secondSection = document.querySelector(".second-section");
    const nameValue = document.querySelector(".nameValue");
    const emailValue = document.querySelector(".emailValue");
    const githubUsernameValue = document.querySelector(".githubUsernameValue");
    const avatarPreview = document.querySelector(".avatar");
  
    let uploadedFile = null;
  
    // Handle file upload
    uploadInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
  
      if (file) {
        if (file.size > 500 * 1024) {
          avatarError.style.display = "block";
          sizeWarning.style.display = "none";
        } else {
          avatarError.style.display = "none";
          sizeWarning.style.display = "block";
  
          const reader = new FileReader();
          reader.onload = () => {
            uploadedFile = file;
            uploadedImg.src = reader.result;
            uploadedImg.id = "uploaded-img";
            uploadIcon.style.display = "none";
            uploadInput.parentElement.querySelector(".img-container").appendChild(uploadedImg);
            removeBtn.parentElement.style.display = "flex";
          };
          reader.readAsDataURL(file);
        }
      }
    });
  
    // Handle remove image
    removeBtn.addEventListener("click", () => {
      uploadedFile = null;
      uploadInput.value = "";
      uploadedImg.remove();
      uploadIcon.style.display = "block";
      removeBtn.parentElement.style.display = "none";
    });
  
    // Handle form submission
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const fullName = form["full-name"].value.trim();
      const email = form["email"].value.trim();
      const githubUsername = form["github-username"].value.trim();
      let valid = true;
  
      // Validate fields
      if (!fullName) {
        form["full-name"].nextElementSibling.style.display = "block";
        valid = false;
      } else {
        form["full-name"].nextElementSibling.style.display = "none";
      }
  
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        form["email"].nextElementSibling.style.display = "block";
        valid = false;
      } else {
        form["email"].nextElementSibling.style.display = "none";
      }
  
      if (!githubUsername) {
        form["github-username"].nextElementSibling.style.display = "block";
        valid = false;
      } else {
        form["github-username"].nextElementSibling.style.display = "none";
      }
  
      if (valid) {
        // Update ticket section
        nameValue.textContent = fullName;
        emailValue.textContent = email;
        githubUsernameValue.textContent = githubUsername;
  
        if (uploadedFile) {
          avatarPreview.src = uploadedImg.src;
        }
  
        form.closest(".first-section").style.display = "none";
        secondSection.style.display = "block";
      }
    });
  
    // Clear error messages on input change
    form.addEventListener("input", (event) => {
      const input = event.target;
      if (input.nextElementSibling && input.nextElementSibling.classList.contains("error-warning")) {
        input.nextElementSibling.style.display = "none";
      }
    });
  });
  