// Blog Page JavaScript

// Translations for blog page
const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        blog: "Blog",
        contact: "Contact",

        // Blog page
        blogTitle: "Blog",
        allCategories: "All",
        aiCategory: "AI",
        webDevCategory: "Web Dev",
        dataScienceCategory: "Data Science",
        designCategory: "Design",
        readMore: "Read More",

        // Newsletter
        newsletterTitle: "Subscribe to Our Newsletter",
        newsletterDescription: "Get the latest posts delivered right to your inbox.",
        emailPlaceholder: "Your email address",
        subscribeButton: "Subscribe",
        thankYouForSubscribing: "Thank you for subscribing!",

        // Footer
        allRightsReserved: "All rights reserved."
    },
    ar: {
        // Navigation
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        portfolio: "أعمالنا",
        blog: "المدونة",
        contact: "اتصل بنا",

        // Blog page
        blogTitle: "المدونة",
        allCategories: "الكل",
        aiCategory: "الذكاء الاصطناعي",
        webDevCategory: "تطوير الويب",
        dataScienceCategory: "علم البيانات",
        designCategory: "التصميم",
        readMore: "اقرأ المزيد",

        // Newsletter
        newsletterTitle: "اشترك في نشرتنا البريدية",
        newsletterDescription: "احصل على أحدث المشاركات مباشرة في صندوق الوارد الخاص بك.",
        emailPlaceholder: "عنوان بريدك الإلكتروني",
        subscribeButton: "اشترك",
        thankYouForSubscribing: "شكراً لاشتراكك!",

        // Footer
        allRightsReserved: "جميع الحقوق محفوظة."
    },
    zh: {
        // Navigation
        home: "首页",
        about: "关于我们",
        services: "服务",
        portfolio: "作品集",
        blog: "博客",
        contact: "联系我们",

        // Blog page
        blogTitle: "博客",
        allCategories: "全部",
        aiCategory: "人工智能",
        webDevCategory: "网页开发",
        dataScienceCategory: "数据科学",
        designCategory: "设计",
        readMore: "阅读更多",

        // Newsletter
        newsletterTitle: "订阅我们的新闻通讯",
        newsletterDescription: "获取最新帖子直接发送到您的收件箱。",
        emailPlaceholder: "您的电子邮件地址",
        subscribeButton: "订阅",
        thankYouForSubscribing: "感谢您的订阅！",

        // Footer
        allRightsReserved: "版权所有。"
    }
};

// Function to update page content based on selected language
function updatePageContent(lang) {
    const t = translations[lang];

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length >= 6) {
        navLinks[0].textContent = t.home;
        navLinks[1].textContent = t.about;
        navLinks[2].textContent = t.services;
        navLinks[3].textContent = t.portfolio;
        navLinks[4].textContent = t.blog;
        navLinks[5].textContent = t.contact;
    }

    // Update blog title
    const blogTitle = document.querySelector('.page-title');
    if (blogTitle) {
        blogTitle.textContent = t.blogTitle;
    }

    // Update category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    if (categoryButtons.length >= 5) {
        categoryButtons[0].textContent = t.allCategories;
        categoryButtons[1].textContent = t.aiCategory;
        categoryButtons[2].textContent = t.webDevCategory;
        categoryButtons[3].textContent = t.dataScienceCategory;
        categoryButtons[4].textContent = t.designCategory;
    }

    // Update read more buttons
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.textContent = t.readMore;
    });

    // Update newsletter section
    const newsletterTitle = document.querySelector('.newsletter-title');
    if (newsletterTitle) {
        newsletterTitle.textContent = t.newsletterTitle;
    }

    const newsletterDescription = document.querySelector('.newsletter-description');
    if (newsletterDescription) {
        newsletterDescription.textContent = t.newsletterDescription;
    }

    const emailInput = document.querySelector('.newsletter-form input[type="email"]');
    if (emailInput) {
        emailInput.placeholder = t.emailPlaceholder;
    }

    const subscribeButton = document.querySelector('.newsletter-form button');
    if (subscribeButton) {
        subscribeButton.textContent = t.subscribeButton;
    }

    // Update footer
    const footerText = document.querySelector('.footer-text');
    if (footerText) {
        footerText.textContent = `© ${new Date().getFullYear()} ZakPro. ${t.allRightsReserved}`;
    }

    // Update document direction for RTL languages
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.body.classList.add('rtl');
        // Apply Arabic font to all elements
        document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        document.body.classList.remove('rtl');
        // Reset to default font
        document.body.style.fontFamily = "'Montserrat', sans-serif";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Check for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';

    // Apply saved language
    updatePageContent(savedLanguage);

    // Update active language option
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        if (option.getAttribute('data-lang') === savedLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

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
            const currentLang = localStorage.getItem('selectedLanguage') || 'en';
            successMessage.textContent = translations[currentLang].thankYouForSubscribing;
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

                    // Update active language option
                    languageOptions.forEach(opt => {
                        if (opt.getAttribute('data-lang') === selectedLang) {
                            opt.classList.add('active');
                        } else {
                            opt.classList.remove('active');
                        }
                    });

                    // Update page content based on selected language
                    updatePageContent(selectedLang);

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