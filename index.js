  document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll();

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Optional: stop observing once visible
        }
      });
    }, {
      threshold: 0.1, // adjust how much of the element must be visible
    });

    faders.forEach(fadeEl => {
      appearOnScroll.observe(fadeEl);
    });
  });