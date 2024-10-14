document.addEventListener("DOMContentLoaded", () => {
  const fName = document.querySelector('#fname');
  const lName = document.querySelector('#lname');
  const email = document.querySelector('#email');
  const passWord = document.querySelector('#pwd');
  const confirmPassword = document.querySelector('#con-pwd');
  const phoneNumber = document.querySelector('#phone');
  const submitError = document.querySelector('#submit-error');

  const showError = (input, message) => {
    const errorSpan = document.querySelector(`#${input.id}-error`);
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
  };

  const hideError = (input) => {
    const errorSpan = document.querySelector(`#${input.id}-error`);
    errorSpan.textContent = '';
    errorSpan.style.display = 'none';
  };

  const validateEmail = () => {
    if (!email.validity.valid) {
      showError(email, 'Please enter a valid email.');
    } else {
      hideError(email);
    }
  };

  const validateFName = () => {
    if (fName.value.trim() === '') {
      showError(fName, 'First name is required.');
    } else {
      hideError(fName);
    }
  };

  const validatelName = () => {
    if (lName.value.trim() === '') {
      showError(lName, 'Last name is required.');
    } else {
      hideError(lName);
    }
  };

  const validatePhoneNum = () => {
    if (phoneNumber.value.trim() === '') {
      showError(phoneNumber, 'Phone number is required.');
    } else {
      hideError(phoneNumber);
    }
  };

  const validatePassword = () => {
    if (passWord.value.length < 6) {
      showError(passWord, 'Password must be at least 6 characters.');
    } else {
      hideError(passWord);
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword.value !== passWord.value.length) {
      showError(confirmPassword, 'Passwords do not match.');
    } else {
      hideError(confirmPassword);
    }
  };

  const validateField = (field) => {
    switch (field.id) {
      case 'email':
        validateEmail();
        break;
      case 'fname':
        validateFName();
        break;
      case 'lname':
        validatelName();
        break;
      case 'phone':
        validatePhoneNum();
        break;
      case 'pwd':
        validatePassword();
        break;
      case 'con-pwd':
        validateConfirmPassword();
        break;
    }
  };

  // Add 'blur' event listeners for each input to validate on losing focus
  [email, fName, lName, passWord, confirmPassword, phoneNumber].forEach((input) => {
    input.addEventListener('blur', () => validateField(input));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Validate all fields on submit
    validateEmail();
    validateFName();
    validatelName();
    validatePassword();
    validateConfirmPassword();
    validatePhoneNum();

    // Check if there are any active errors
    const hasErrors = document.querySelectorAll('.error:empty').length !== 5;
    if (hasErrors) {
      submitError.textContent = 'Please fix the errors above before submitting.';
    } else {
      submitError.textContent = 'Form is valid!';
    }
  });
});
