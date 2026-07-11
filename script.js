document.getElementById('year').textContent = new Date().getFullYear();

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    const note = document.getElementById('cta-note');
    note.textContent = `Danke! Wir haben ${email} vorgemerkt. Prüfe dein Postfach.`;
    note.style.fontWeight = '600';
    form.reset();
    return false;
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .price-card, .steps li').forEach((el) => {
    observer.observe(el);
});
