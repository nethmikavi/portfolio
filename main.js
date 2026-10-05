// 1. Theme Toggle (Dark/Light Mode)
const themeToggleBtn = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('#theme-icon');

// Check Local Storage or System Preference
const savedTheme = localStorage.getItem('selected-theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'light') {
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';

        if (currentTheme === 'light') {
            newTheme = 'dark';
            themeIcon.classList.replace('bx-sun', 'bx-moon');
        } else {
            themeIcon.classList.replace('bx-moon', 'bx-sun');
        }

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('selected-theme', newTheme);
    });
}

// 2. Mobile Navigation Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });
}

// 3. Auto-typing Effect (Typed.js)
if (document.querySelector('.text')) {
    new Typed('.text', {
        strings: ['QA Intern', 'Front-End Developer', 'UI/UX Tester'],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 1200,
        loop: true
    });
}

// 4. Active Link Switching on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 5. Scroll Reveal Animations
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });

    sr.reveal('.sub-title, .section-tagline', { origin: 'top' });
    sr.reveal('.about-text, .contact-list', { origin: 'left' });
    sr.reveal('.contact-form', { origin: 'right' });
    sr.reveal('.project-card, .tool-card, .cert-card, .container1, .education-card', { 
        interval: 150, 
        origin: 'bottom' 
    });
}

// 6. Background Star Particles Initialization
if (typeof tsParticles !== 'undefined') {
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        particles: {
            number: { 
                value: 50, 
                density: { enable: true, value_area: 800 } 
            },
            color: { value: "#a855f7" },
            shape: { type: "circle" },
            opacity: { 
                value: 0.5, 
                random: true 
            },
            size: { 
                value: 2, 
                random: true 
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                out_mode: "out"
            }
        },
        interactivity: {
            events: { 
                onhover: { enable: true, mode: "bubble" } 
            },
            modes: { 
                bubble: { distance: 150, size: 3, opacity: 0.8 } 
            }
        },
        retina_detect: true
    });
}