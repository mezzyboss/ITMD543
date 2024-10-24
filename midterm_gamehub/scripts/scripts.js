document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('searchInput');
    const testimonialsList = document.getElementById('testimonialsList');
    const testimonials = testimonialsList.getElementsByClassName('testimonial');

    input.addEventListener('keyup', () => {
        const filter = input.value.toLowerCase();
        
        Array.from(testimonials).forEach((testimonial) => {
            const text = testimonial.textContent || testimonial.innerText;

            if (text.toLowerCase().includes(filter)) {
                testimonial.style.display = "";
            } else {
                testimonial.style.display = "none";
            }
        });
    });
});
