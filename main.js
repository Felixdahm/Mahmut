// Nav: highlight active section while scrolling
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  },
  { rootMargin: '-25% 0px -65% 0px' }
);

document.querySelectorAll('section[id]').forEach((s) => sectionObserver.observe(s));

// Project rows: swap "·" → "→" on hover via JS for authenticity
document.querySelectorAll('.project-row').forEach((row) => {
  const indicator = row.querySelector('.read-indicator');
  if (!indicator) return;
  row.addEventListener('mouseenter', () => { indicator.textContent = '→'; });
  row.addEventListener('mouseleave', () => { indicator.textContent = '·'; });
});
