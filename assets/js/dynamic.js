// Typewriter Effect for the "Michael" text
document.addEventListener('DOMContentLoaded', function() {
  let textElement = document.getElementById('typewriter');
  let content = textElement.innerText;
  textElement.innerText = ''; // Clear text initially

  let i = 0;
  let speed = 300; // Speed of typing (milliseconds)

  function typeWriter() {
    if (i < content.length) {
      textElement.innerText += content.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter(); // Start typing effect
});
