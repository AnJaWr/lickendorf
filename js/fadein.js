document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2 // Kiedy 20% sekcji będzie widoczne, animacja się uruchomi
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // Przestajemy obserwować po animacji
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
