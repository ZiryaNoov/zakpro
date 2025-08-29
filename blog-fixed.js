// Blog Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Category buttons functionality
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogPosts = document.querySelectorAll('.blog-post-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            // Show/hide posts based on selected category
            blogPosts.forEach(post => {
                if (category === 'all' || post.getAttribute('data-category') === category) {
                    post.style.display = 'flex';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });

    // Pagination buttons functionality
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    paginationButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            paginationButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button (except next button)
            if (!button.classList.contains('next')) {
                button.classList.add('active');
            }
            // Here you would typically load the appropriate page content
            // For demo purposes, we'll just log to console
            console.log('Pagination button clicked');
        });
    });

    // Newsletter form functionality
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;

            // Here you would typically send the email to a server
            // For demo purposes, we'll just show a success message
            const successMessage = document.createElement('div');
            successMessage.className = 'newsletter-success';
            successMessage.textContent = 'Thank you for subscribing!';
            successMessage.style.color = 'var(--brand)';
            successMessage.style.marginTop = '1rem';

            // Clear the form and show success message
            emailInput.value = '';
            newsletterForm.appendChild(successMessage);

            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        });
    }

    // Read more buttons functionality
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // Here you would typically navigate to the full article
            // For demo purposes, we'll just log to console
            console.log('Read more button clicked');
        });
    });
});

// Dark mode functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved dark mode preference or default to light mode
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply the saved preference
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode on button click
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            // Save the preference
            localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
        });
    }
});

// Language selector functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageOptions = document.querySelectorAll('.language-option');

    // Toggle dropdown on button click
    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            languageDropdown.classList.toggle('active');

            // Also add 'show' class as a fallback
            languageDropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.remove('active');
                languageDropdown.classList.remove('show');
            }
        });

        // Handle language selection
        if (languageOptions) {
            languageOptions.forEach(option => {
                option.addEventListener('click', () => {
                    const selectedLang = option.getAttribute('data-lang');

                    // Save the selected language
                    localStorage.setItem('selectedLanguage', selectedLang);

                    // Here you would typically implement language switching logic
                    // For demo purposes, we'll just log to console
                    console.log('Language selected:', selectedLang);

                    // Close dropdown
                    languageDropdown.classList.remove('active');
                    languageDropdown.classList.remove('show');
                });
            });
        }
    }
});

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('show');

            // Update aria-expanded attribute for accessibility
            const isExpanded = navLinks.classList.contains('show');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close mobile menu when clicking on a link
        const navItems = navLinks.querySelectorAll('.nav-link');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('show');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});