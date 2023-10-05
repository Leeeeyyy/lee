const navLinks = document.querySelectorAll('.navbar li a');

navLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth',
  });
}
