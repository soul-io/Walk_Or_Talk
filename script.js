document.addEventListener('DOMContentLoaded', () => {
  const steps = Array.from(document.querySelectorAll('.form-step'));
  let current = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.style.display = i === index ? 'block' : 'none';
    });
  }

  document.querySelectorAll('.next').forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      if (idx < steps.length - 1) {
        current++;
        showStep(current);
      }
    });
  });

  document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for submitting!');
  });

  showStep(0);
});
