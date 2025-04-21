// itSuppGalleryScroll.js
document.addEventListener("DOMContentLoaded", function () {
  const itSuppProjects = document.querySelectorAll('.it-supp-project');

  function checkItSuppVisibility() {
    itSuppProjects.forEach((project) => {
      const rect = project.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        project.classList.add('in-view');
      } else {
        project.classList.remove('in-view');
      }
    });
  }

  window.addEventListener('scroll', checkItSuppVisibility);
  checkItSuppVisibility();  // Run on initial load
});
