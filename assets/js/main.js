/* ==========================================
ROXAN AIRCONDITIONING SERVICES
MAIN JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Sticky Header
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    });


    /* ==========================
       Mobile Menu
    ========================== */

    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (nav.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }


    /* ==========================
       Close Mobile Menu
    ========================== */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            if (nav) {

                nav.classList.remove("active");

            }

            if (menuBtn) {

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });


    /* ==========================
       Footer Year
    ========================== */

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    /* ==========================
       Fade Up Animation
    ========================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: .15
    });

    document.querySelectorAll(".fade-up").forEach(item => {

        observer.observe(item);

    });


    /* ==========================
       Animated Counter
    ========================== */

    const counters = document.querySelectorAll(".stat-card h2");

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const text = counter.innerText;

            const number = parseInt(text.replace(/\D/g, ""));

            if (isNaN(number)) return;

            let current = 0;

            const increment = Math.ceil(number / 80);

            const update = () => {

                current += increment;

                if (current >= number) {

                    current = number;

                }

                if (text.includes("+")) {

                    counter.innerText = current + "+";

                } else if (text.includes("%")) {

                    counter.innerText = current + "%";

                } else {

                    counter.innerText = current;

                }

                if (current < number) {

                    requestAnimationFrame(update);

                }

            };

            update();

            counterObserver.unobserve(counter);

        });

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });


    /* ==========================
       Back To Top Button
    ========================== */

    const topBtn = document.querySelector(".back-to-top");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                topBtn.classList.add("show");

            } else {

                topBtn.classList.remove("show");

            }

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

});