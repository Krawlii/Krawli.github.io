document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll('.project-left, .project-right, .trader-project');

  function checkVisibility() {
    projects.forEach((project) => {
      const rect = project.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        project.classList.add('in-view');
      } else {
        project.classList.remove('in-view');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();  // Run on initial load
});
