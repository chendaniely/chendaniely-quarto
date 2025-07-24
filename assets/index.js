// Interactive mouse movement effect
document.addEventListener('mousemove', (e) => {
    const heroSection = document.querySelector('img.about-image.rounded');
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 20;
    const moveY = (y / rect.height - 0.5) * 20;

    const heroImage = document.querySelector('img.about-image.rounded');
    heroImage.style.transform = `translate(${moveX}px, ${moveY}px) rotate(-15deg)`;
});
