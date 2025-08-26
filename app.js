document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved dark mode preference or respect OS preference
    const darkModePreference = localStorage.getItem('darkMode');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (darkModePreference === 'true' || (!darkModePreference && prefersDarkScheme)) {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode when the button is clicked
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Save the user's preference
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));

        // Add a small animation to the toggle
        const toggleDiamond = this.querySelector('.toggle-diamond');
        toggleDiamond.style.transform = 'scale(1.2)';
        setTimeout(() => {
            toggleDiamond.style.transform = '';
        }, 200);
    });

    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');

        // Update aria-expanded for accessibility
        const isExpanded = this.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Interactive background effect
    const container = document.querySelector('.hero');
    if (container) {
        container.addEventListener('mousemove', function(e) {
            createInteractiveElement(e.clientX, e.clientY);
        });
    }

    function createInteractiveElement(x, y) {
        const element = document.createElement('div');
        element.classList.add('interactive-element');
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        document.body.appendChild(element);

        // Animation
        let opacity = 0.3;
        const fadeOut = setInterval(() => {
            opacity -= 0.01;
            element.style.opacity = opacity;
            if (opacity <= 0) {
                clearInterval(fadeOut);
                element.remove();
            }
        }, 50);
    }

    // Logo interaction
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinkItems = document.querySelectorAll('.nav-link');

    // Create an IntersectionObserver to detect which section is in view
    const observerOptions = {
        root: null,
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all nav links
                navLinkItems.forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to the nav link corresponding to the current section
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validate required fields
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Create mailto link
            const subject = encodeURIComponent('ZAK PRO Inquiry');
            const body = encodeURIComponent(`Name: ${name}
Email: ${email}

Message:
${message}`);
            const mailtoLink = `mailto:contact@zakpro.com?subject=${subject}&body=${body}`;

            // Open email client
            window.location.href = mailtoLink;

            // Reset form
            contactForm.reset();
        });
    }

    // Update footer year automatically
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        // Disable animations
        const animations = document.querySelectorAll('*');
        animations.forEach(element => {
            element.style.animation = 'none';
            element.style.transition = 'none';
        });
    }
});
