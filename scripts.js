// ==== Auto-Rotate Carousel ====
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const slides = carousel.querySelectorAll('img');
  let index = 0;

  if (slides.length > 1) {
    slides.forEach((slide, i) => {
      slide.style.display = i === 0 ? 'block' : 'none';
    });

    setInterval(() => {
      slides.forEach(slide => slide.style.display = 'none');
      index = (index + 1) % slides.length;
      slides[index].style.display = 'block';
    }, 4000);
  }
});

// ==== Smooth Anchor Scrolling ====
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
