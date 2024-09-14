document.addEventListener('DOMContentLoaded', () => {
    const continueButton = document.getElementById('continue-button');
    const userInput = document.getElementById('user-input');

    continueButton.addEventListener('click', () => {
        const inputValue = userInput.value.trim();
        if (inputValue === '') {
            alert('Please enter your email or mobile phone number.');
        } else if (!validateEmailOrPhone(inputValue)) {
            alert('Please enter a valid email or mobile phone number.');
        } else {
            alert('Submitted successfully!');
            // Implement actual form submission logic here.
        }
    });
});

// Function to validate email or phone number (basic example)
function validateEmailOrPhone(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\+\-()]+$/; // Basic phone number validation
    return emailRegex.test(value) || phoneRegex.test(value);
}
