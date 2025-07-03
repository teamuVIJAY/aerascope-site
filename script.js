document.getElementById('navToggle').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('open');
});

const form = document.getElementById('contactForm');
const success = document.getElementById('successMsg');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        form.reset();
        success.style.display = 'block';
      }
    } catch (err) {
      console.error(err);
    }
  });
}
