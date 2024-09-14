// Get the location icon and popup elements
const locationIcon = document.getElementById('locationIcon');
const locationPopup = document.getElementById('locationPopup');

// Show the popup when hovering or tapping the location icon
locationIcon.addEventListener('click', function() {
  locationPopup.style.display = locationPopup.style.display === 'block' ? 'none' : 'block';
});

// Hide the popup when clicking outside of it
document.addEventListener('click', function(event) {
  if (!locationIcon.contains(event.target) && !locationPopup.contains(event.target)) {
    locationPopup.style.display = 'none';
  }
});
   







document.getElementById('popupBtn').onclick = function() {
  document.getElementById('popup').style.display = 'block';
};

document.querySelector('.close-btn').onclick = function() {
  document.getElementById('popup').style.display = 'none';
};

// Click outside the popup to close it
window.onclick = function(event) {
  if (event.target == document.getElementById('popup')) {
      document.getElementById('popup').style.display = 'none';
  }
};

    



document.addEventListener('DOMContentLoaded', () => {
  const heading = document.getElementById('signInHeading');
  const link = document.getElementById('signInLink');

  // Function to handle the sign-in action
  function handleSignInAction() {
      // Redirect to the link or trigger login
      window.location.href = link.href; // For demonstration, navigate to the link
  }

  // Function to check joystick proximity
  function checkJoystickProximity() {
      const proximityThreshold = 100; // Adjust this value as needed
      const rect = heading.getBoundingClientRect();
      const gamepads = navigator.getGamepads();

      if (gamepads[0]) {
          const gamepad = gamepads[0];
          const [xAxis, yAxis] = [gamepad.axes[0], gamepad.axes[1]]; // Example joystick axes
          
          // Map joystick values to screen position
          const joystickX = (xAxis + 1) * (window.innerWidth / 2);
          const joystickY = (yAxis + 1) * (window.innerHeight / 2);

          // Calculate distance from joystick to the center of the heading
          const distance = Math.sqrt(
              Math.pow(rect.left + rect.width / 2 - joystickX, 2) +
              Math.pow(rect.top + rect.height / 2 - joystickY, 2)
          );

          if (distance < proximityThreshold) {
              handleSignInAction(); // Trigger the action
          }
      }

      requestAnimationFrame(checkJoystickProximity);
  }
  
  // Start checking for joystick proximity
  requestAnimationFrame(checkJoystickProximity);
});

