// Toggle the visibility of the "About Me" content when the link is clicked
document.getElementById('aboutMeLink').addEventListener('click', function() {
  var aboutMeContent = document.getElementById('aboutMeContent');
  var aboutMeText = document.getElementById('aboutMeText');

  // The actual "About Me" message broken down into even smaller chunks for better rendering
  var textChunks = [
    "Michael L. Ruado Jr.",
    "Valenzuela City",
    "",
    "Hello! I am an IT Support enthusiast",
    "with a passion for solving tech problems",
    "and ensuring smooth operations.",
    "I thrive in dynamic environments",
    "and take pride in providing timely,",
    "clear, and reliable support.",
    "",
    "I graduated from Our Lady of Fatima University (OLFU)",
    "and have developed a wide variety of skills",
    "while assisting in the success of various tech-driven projects.",
    "I enjoy learning new technologies",
    "and leveraging them to help others succeed.",
    "Tech support for me isn't just about solving issues",
    "—it's about ensuring a smooth and reliable tech experience.",
    "",
    "I'm always eager to connect, share knowledge,",
    "and contribute to the ongoing success of tech-driven projects."
  ];

  // Function to simulate typing effect chunk by chunk
  function typeWriter(chunks, chunkIndex, charIndex, callback) {
    if (chunkIndex < chunks.length) {
      var chunk = chunks[chunkIndex];
      if (charIndex < chunk.length) {
        aboutMeText.innerHTML += chunk.charAt(charIndex);
        charIndex++;
        setTimeout(function() {
          typeWriter(chunks, chunkIndex, charIndex, callback);
        }, 50); // Adjust this delay for typing speed
      } else {
        // Move to the next chunk after finishing the current one
        aboutMeText.innerHTML += "<br>"; // Add a line break after each chunk
        setTimeout(function() {
          typeWriter(chunks, chunkIndex + 1, 0, callback);
        }, -50); // Wait before starting the next chunk
      }
    } else {
      if (callback) callback();
    }
  }

  // Check if the content is already displayed. If not, show it and start typing.
  if (aboutMeContent.style.display === "none" || aboutMeContent.style.display === "") {
    aboutMeContent.style.display = "block";
    aboutMeText.innerHTML = ""; // Clear the text before starting
    typeWriter(textChunks, 0, 0, function() {
      console.log("Typing animation complete!");
    });

    // Disable clicking on "About Me" after the first click
    document.getElementById('aboutMeLink').style.pointerEvents = 'none'; // Disable further clicks
  }
});
