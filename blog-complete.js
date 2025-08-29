// Blog Page JavaScript

// Translations for blog page
const translations = {
    en: {
        // Navigation
        home: "HOME",
        about: "ABOUT",
        services: "SERVICES",
        tech_ai: "TECH & AI",
        portfolio: "PORTFOLIO",
        blog: "BLOG",
        contact: "CONTACT",

        // Blog page
        blogTitle: "Blog",
        allCategories: "All",
        aiCategory: "AI",
        webDevCategory: "Web Dev",
        dataScienceCategory: "Data Science",
        designCategory: "Design",
        readMore: "Read More",

        // Blog posts
        post1Title: "The Future of Artificial Intelligence",
        post1Excerpt: "Exploring how AI is transforming industries and what to expect in the coming years.",
        post1Category: "AI",
        post1Date: "May 15, 2023",
        post1Author: "Alex Johnson",

        post2Title: "Modern Web Development Trends",
        post2Excerpt: "A comprehensive guide to the latest trends and technologies in web development.",
        post2Category: "Web Dev",
        post2Date: "April 28, 2023",
        post2Author: "Sarah Williams",

        post3Title: "Data Science for Beginners",
        post3Excerpt: "An introduction to data science concepts and tools for newcomers to the field.",
        post3Category: "Data Science",
        post3Date: "April 10, 2023",
        post3Author: "Michael Chen",

        post4Title: "UI/UX Design Principles",
        post4Excerpt: "Essential design principles every designer should know to create better user experiences.",
        post4Category: "Design",
        post4Date: "March 25, 2023",
        post4Author: "Emily Rodriguez",

        post5Title: "Machine Learning Applications",
        post5Excerpt: "Real-world applications of machine learning across various industries.",
        post5Category: "AI",
        post5Date: "March 12, 2023",
        post5Author: "David Kim",

        post6Title: "Responsive Web Design",
        post6Excerpt: "Best practices for creating websites that look great on all devices.",
        post6Category: "Web Dev",
        post6Date: "February 28, 2023",
        post6Author: "Jessica Taylor",

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

        // Blog posts
        post1Title: "مستقبل الذكاء الاصطناعي",
        post1Excerpt: "استكشاف كيف يحول الذكاء الاصطناعي الصناعات وما يمكن توقعه في السنوات القادمة.",
        post1Category: "الذكاء الاصطناعي",
        post1Date: "15 مايو 2023",
        post1Author: "أليكس جونسون",

        post2Title: "اتجاهات تطوير الويب الحديثة",
        post2Excerpt: "دليل شامل لأحدث الاتجاهات والتقنيات في تطوير الويب.",
        post2Category: "تطوير الويب",
        post2Date: "28 أبريل 2023",
        post2Author: "سارة ويليامز",

        post3Title: "علم البيانات للمبتدئين",
        post3Excerpt: "مقدمة لمفاهيم وأدوات علم البيانات للوافدين الجدد إلى هذا المجال.",
        post3Category: "علم البيانات",
        post3Date: "10 أبريل 2023",
        post3Author: "مايكل تشين",

        post4Title: "مبادئ تصميم واجهة المستخدم وتجربة المستخدم",
        post4Excerpt: "مبادئ تصميم أساسية يجب أن يعرفها كل مصمم لإنشاء تجارب مستخدم أفضل.",
        post4Category: "التصميم",
        post4Date: "25 مارس 2023",
        post4Author: "إميلي رودريغيز",

        post5Title: "تطبيقات التعلم الآلي",
        post5Excerpt: "تطبيقات العالم الحقيقي للتعلم الآلي عبر مختلف الصناعات.",
        post5Category: "الذكاء الاصطناعي",
        post5Date: "12 مارس 2023",
        post5Author: "ديفيد كيم",

        post6Title: "تصميم الويب المتجاوب",
        post6Excerpt: "أفضل الممارسات لإنشاء مواقع ويب تبدو رائعة على جميع الأجهزة.",
        post6Category: "تطوير الويب",
        post6Date: "28 فبراير 2023",
        post6Author: "جيسيكا تايلور",

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

        // Blog posts
        post1Title: "人工智能的未来",
        post1Excerpt: "探索人工智能如何改变行业以及未来几年的预期。",
        post1Category: "人工智能",
        post1Date: "2023年5月15日",
        post1Author: "亚历克斯·约翰逊",

        post2Title: "现代网页开发趋势",
        post2Excerpt: "网页开发最新趋势和技术的综合指南。",
        post2Category: "网页开发",
        post2Date: "2023年4月28日",
        post2Author: "莎拉·威廉姆斯",

        post3Title: "初学者数据科学",
        post3Excerpt: "为该领域的新手介绍数据科学概念和工具。",
        post3Category: "数据科学",
        post3Date: "2023年4月10日",
        post3Author: "迈克尔·陈",

        post4Title: "UI/UX设计原则",
        post4Excerpt: "每个设计师都应该知道的创建更好用户体验的基本设计原则。",
        post4Category: "设计",
        post4Date: "2023年3月25日",
        post4Author: "艾米莉·罗德里格斯",

        post5Title: "机器学习应用",
        post5Excerpt: "机器学习在各行业的实际应用。",
        post5Category: "人工智能",
        post5Date: "2023年3月12日",
        post5Author: "大卫·金",

        post6Title: "响应式网页设计",
        post6Excerpt: "创建在所有设备上看起来都很棒的网站的最佳实践。",
        post6Category: "网页开发",
        post6Date: "2023年2月28日",
        post6Author: "杰西卡·泰勒",

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

    // Update navigation - aggressive approach
    // Create a mapping of English text to translations for each language
    const navTextMap = {
        'home': { en: 'HOME', ar: 'الرئيسية', zh: '首页' },
        'about': { en: 'ABOUT', ar: 'من نحن', zh: '关于我们' },
        'services': { en: 'SERVICES', ar: 'خدماتنا', zh: '服务' },
        'tech_ai': { en: 'TECH & AI', ar: 'التقنية والذكاء الاصطناعي', zh: '技术与人工智能' },
        'portfolio': { en: 'PORTFOLIO', ar: 'أعمالنا', zh: '作品集' },
        'blog': { en: 'BLOG', ar: 'المدونة', zh: '博客' },
        'contact': { en: 'CONTACT', ar: 'اتصل بنا', zh: '联系我们' }
    };

    // Try multiple selectors to find navigation elements
    const navSelectors = [
        '.nav-link',
        'nav a',
        '.nav-item',
        '.menu-item',
        '.nav-links a',
        '.swiss-nav a',
        'header a',
        '.header a',
        '.blog-nav a',
        '.blog-header a'
    ];

    // Update all navigation elements
    navSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            const text = element.textContent.trim().toLowerCase();

            // Check if this element contains any of our navigation keywords
            Object.keys(navTextMap).forEach(key => {
                const translations = navTextMap[key];

                // Check against all possible translations
                if (text === key || 
                    text === translations.en.toLowerCase() || 
                    text === translations.ar || 
                    text === translations.zh) {

                    // Update the text with the correct translation
                    element.textContent = translations[lang];
                }
            });
        });
    });

    // Force update with multiple delays to ensure all elements are updated
    [100, 300, 500].forEach(delay => {
        setTimeout(() => {
            navSelectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    const text = element.textContent.trim().toLowerCase();

                    // Check if this element contains any of our navigation keywords
                    Object.keys(navTextMap).forEach(key => {
                        const translations = navTextMap[key];

                        // Check against all possible translations
                        if (text === key || 
                            text === translations.en.toLowerCase() || 
                            text === translations.ar || 
                            text === translations.zh) {

                            // Update the text with the correct translation
                            element.textContent = translations[lang];
                        }
                    });
                });
            });
        }, delay);
    });

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

    // Update blog posts
    const blogPosts = document.querySelectorAll('.blog-post-item');
    if (blogPosts.length >= 6) {
        // Post 1
        const post1Title = blogPosts[0].querySelector('.blog-post-title');
        if (post1Title) post1Title.textContent = t.post1Title;

        const post1Excerpt = blogPosts[0].querySelector('.blog-post-excerpt');
        if (post1Excerpt) post1Excerpt.textContent = t.post1Excerpt;

        const post1Category = blogPosts[0].querySelector('.blog-post-category');
        if (post1Category) post1Category.textContent = t.post1Category;

        const post1Meta = blogPosts[0].querySelector('.blog-post-meta');
        if (post1Meta) post1Meta.innerHTML = `<span>${t.post1Author}</span><span>${t.post1Date}</span>`;

        // Post 2
        const post2Title = blogPosts[1].querySelector('.blog-post-title');
        if (post2Title) post2Title.textContent = t.post2Title;

        const post2Excerpt = blogPosts[1].querySelector('.blog-post-excerpt');
        if (post2Excerpt) post2Excerpt.textContent = t.post2Excerpt;

        const post2Category = blogPosts[1].querySelector('.blog-post-category');
        if (post2Category) post2Category.textContent = t.post2Category;

        const post2Meta = blogPosts[1].querySelector('.blog-post-meta');
        if (post2Meta) post2Meta.innerHTML = `<span>${t.post2Author}</span><span>${t.post2Date}</span>`;

        // Post 3
        const post3Title = blogPosts[2].querySelector('.blog-post-title');
        if (post3Title) post3Title.textContent = t.post3Title;

        const post3Excerpt = blogPosts[2].querySelector('.blog-post-excerpt');
        if (post3Excerpt) post3Excerpt.textContent = t.post3Excerpt;

        const post3Category = blogPosts[2].querySelector('.blog-post-category');
        if (post3Category) post3Category.textContent = t.post3Category;

        const post3Meta = blogPosts[2].querySelector('.blog-post-meta');
        if (post3Meta) post3Meta.innerHTML = `<span>${t.post3Author}</span><span>${t.post3Date}</span>`;

        // Post 4
        const post4Title = blogPosts[3].querySelector('.blog-post-title');
        if (post4Title) post4Title.textContent = t.post4Title;

        const post4Excerpt = blogPosts[3].querySelector('.blog-post-excerpt');
        if (post4Excerpt) post4Excerpt.textContent = t.post4Excerpt;

        const post4Category = blogPosts[3].querySelector('.blog-post-category');
        if (post4Category) post4Category.textContent = t.post4Category;

        const post4Meta = blogPosts[3].querySelector('.blog-post-meta');
        if (post4Meta) post4Meta.innerHTML = `<span>${t.post4Author}</span><span>${t.post4Date}</span>`;

        // Post 5
        const post5Title = blogPosts[4].querySelector('.blog-post-title');
        if (post5Title) post5Title.textContent = t.post5Title;

        const post5Excerpt = blogPosts[4].querySelector('.blog-post-excerpt');
        if (post5Excerpt) post5Excerpt.textContent = t.post5Excerpt;

        const post5Category = blogPosts[4].querySelector('.blog-post-category');
        if (post5Category) post5Category.textContent = t.post5Category;

        const post5Meta = blogPosts[4].querySelector('.blog-post-meta');
        if (post5Meta) post5Meta.innerHTML = `<span>${t.post5Author}</span><span>${t.post5Date}</span>`;

        // Post 6
        const post6Title = blogPosts[5].querySelector('.blog-post-title');
        if (post6Title) post6Title.textContent = t.post6Title;

        const post6Excerpt = blogPosts[5].querySelector('.blog-post-excerpt');
        if (post6Excerpt) post6Excerpt.textContent = t.post6Excerpt;

        const post6Category = blogPosts[5].querySelector('.blog-post-category');
        if (post6Category) post6Category.textContent = t.post6Category;

        const post6Meta = blogPosts[5].querySelector('.blog-post-meta');
        if (post6Meta) post6Meta.innerHTML = `<span>${t.post6Author}</span><span>${t.post6Date}</span>`;
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
        document.body.classList.add('rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.classList.remove('rtl');
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