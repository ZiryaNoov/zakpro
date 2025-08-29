// Complete Language Switching for Entire Website
document.addEventListener('DOMContentLoaded', function() {
    // Get saved language preference or default to English
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';

    // Language translations for the entire website
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

            // Hero section
            tagline: "Designer • Developer • AI Explorer • Traveler – Blending Creativity, Technology, and Culture",

            // About section
            about_title: "ABOUT",
            designer: "Designer",
            designer_desc: "Branding, logos, digital art, creative direction",
            traveler: "Traveler & Volunteer",
            traveler_desc: "Cross-cultural experiences, teamwork, event management",
            athlete: "Athlete",
            athlete_desc: "Discipline, resilience, health, teamwork (calisthenics, volleyball)",
            tech_explorer: "Tech Explorer",
            tech_explorer_desc: "Web development, programming, AI research, creative AI workflows",
            timeline: "My journey has evolved through distinct phases: beginning with design, expanding through volunteering experiences, strengthened by athletic discipline, and now exploring the frontiers of technology and artificial intelligence. Each phase has built upon the last, creating a unique blend of creative and technical skills.",

            // Services section
            services_title: "SERVICES",
            design_branding: "Design & Branding",
            design_branding_desc: "Logos, identity, digital art - creating distinctive visual experiences that communicate your unique story and values.",
            travel_hospitality: "Travel & Hospitality",
            travel_hospitality_desc: "Cultural guidance, tourism support - bridging cultures through authentic experiences and meaningful connections.",
            web_dev: "Web Development & Prototyping",
            web_dev_desc: "Responsive websites, automation scripts - building functional digital solutions that solve real problems.",
            ai_creative_tech: "AI & Creative Tech",
            ai_creative_tech_desc: "Generative AI integration, creative workflows, LLM/prompt engineering - exploring the intersection of creativity and artificial intelligence.",

            // Tech & AI section
            tech_ai_title: "Exploring the Future with AI & Code",
            tech_intro: "My passion for self-learning has led me to explore the rapidly evolving fields of artificial intelligence and web development. I'm fascinated by the potential of generative AI to transform creative workflows and am actively researching how to merge traditional design principles with cutting-edge AI technologies.",
            future_projects: "Future Projects & Explorations",
            ai_design_assistant: "AI-Powered Design Assistant",
            ai_design_assistant_desc: "Coming soon - A tool that combines generative AI with design principles to create unique brand identities.",
            cultural_exchange: "Cultural Exchange Platform",
            cultural_exchange_desc: "Coming soon - A web application connecting travelers with local experiences through AI recommendations.",
            creative_workflow: "Creative Workflow Automation",
            creative_workflow_desc: "Coming soon - Custom scripts and tools to streamline the creative process for designers and artists.",

            // Portfolio section
            portfolio_title: "PORTFOLIO",
            view_project: "View Project",

            // Contact section
            contact_title: "GET IN TOUCH",
            name: "Name",
            email: "Email",
            message: "Message",
            send_message: "SEND MESSAGE",
            get_in_touch: "Get in Touch",

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
            tech_ai: "التقنية والذكاء الاصطناعي",
            portfolio: "أعمالنا",
            blog: "المدونة",
            contact: "اتصل بنا",

            // Hero section
            tagline: "مصمم • مطور • مستكشف للذكاء الاصطناعي • مسافر – مزيج بين الإبداع والتكنولوجيا والثقافة",

            // About section
            about_title: "من نحن",
            designer: "مصمم",
            designer_desc: "العلامات التجارية، الشعارات، الفن الرقمي، الإبداع التوجيهي",
            traveler: "مسافر ومتطوع",
            traveler_desc: "تجارب عبر الثقافات، العمل الجماعي، إدارة الفعاليات",
            athlete: "رياضي",
            athlete_desc: "انضباط، مرونة، صحة، عمل جماعي (تمارين القوة، الكرة الطائرة)",
            tech_explorer: "مستكشف التقنية",
            tech_explorer_desc: "تطوير الويب، البرمجة، أبحاث الذكاء الاصطناعي، سير العمل الإبداعية للذكاء الاصطناعي",
            timeline: "تطور رحلتي عبر مراحل متميزة: بدءًا من التصميم، والتوسع من خلال خبرات التطوع، وتقويتها بالانضباط الرياضي، والآن استكشاف آفاق التكنولوجيا والذكاء الاصطناعي. كل مرحلة بنيت على التي سبقتها، مما خلق مزيجًا فريدًا من المهارات الإبداعية والتقنية.",

            // Services section
            services_title: "خدماتنا",
            design_branding: "التصميم والعلامات التجارية",
            design_branding_desc: "الشعارات، الهوية، الفن الرقمي - إنشاء تجارب بصرية مميزة تعبر عن قصتك وقيمك الفريدة.",
            travel_hospitality: "السفر والضيافة",
            travel_hospitality_desc: "الإرشاد الثقافي، دعم السياحة - بناء الجسور بين الثقافات من خلال تجارب أصيلة واتصالات ذات معنى.",
            web_dev: "تطوير الويب والنماذج الأولية",
            web_dev_desc: "مواقع الويب المتجاوبة، سكريبتات الأتمتة - بناء حلول رقمية وظيفية تحل مشاكل حقيقية.",
            ai_creative_tech: "الذكاء الاصطناعي والتقنية الإبداعية",
            ai_creative_tech_desc: "تكامل الذكاء الاصطناعي التوليدي، سير العمل الإبداعية، هندسة نماذج اللغة الكبيرة/المطالبات - استكشاف تقاطع الإبداع والذكاء الاصطناعي.",

            // Tech & AI section
            tech_ai_title: "استكشاف المستقبل مع الذكاء الاصطناعي والبرمجة",
            tech_intro: "قادني شغفي بالتعلم الذاتي إلى استكشاف مجالات الذكاء الاصطناعي وتطوير الويب التي تتطور بسرعة. أنا مفتون بإمكانيات الذكاء الاصطناعي التوليدي لتحويل سير العمل الإبداعية، وأنا أبحث بنشاط عن كيفية دمج مبادئ التصميم التقليدية مع تقنيات الذكاء الاصطناعي المتطورة.",
            future_projects: "المشاريع المستقبلية والاستكشافات",
            ai_design_assistant: "مساعد التصميم بالذكاء الاصطناعي",
            ai_design_assistant_desc: "قريبًا - أداة تجمع بين الذكاء الاصطناعي التوليدي ومبادئ التصميم لإنشاء هويات بصرية فريدة.",
            cultural_exchange: "منصة التبادل الثقافي",
            cultural_exchange_desc: "قريبًا - تطبيق ويب يربط المسافرين بالتجارب المحلية من خلال توصيات الذكاء الاصطناعي.",
            creative_workflow: "أتمتة سير العمل الإبداعي",
            creative_workflow_desc: "قريبًا - سكريبتات وأدوات مخصصة لتبسيط العملية الإبداعية للمصممين والفنانين.",

            // Portfolio section
            portfolio_title: "أعمالنا",
            view_project: "عرض المشروع",

            // Contact section
            contact_title: "تواصل معنا",
            name: "الاسم",
            email: "البريد الإلكتروني",
            message: "الرسالة",
            send_message: "إرسال الرسالة",
            get_in_touch: "تواصل معنا",

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
            newsletterTitle: "اشترك في نشرتنا الإخبارية",
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
            tech_ai: "技术与人工智能",
            portfolio: "作品集",
            blog: "博客",
            contact: "联系我们",

            // Hero section
            tagline: "设计师 • 开发者 • 人工智能探索者 • 旅行者 – 融合创造力、技术和文化",

            // About section
            about_title: "关于我们",
            designer: "设计师",
            designer_desc: "品牌、标志、数字艺术、创意指导",
            traveler: "旅行者和志愿者",
            traveler_desc: "跨文化体验、团队合作、活动管理",
            athlete: "运动员",
            athlete_desc: "纪律、韧性、健康、团队合作（健身操、排球）",
            tech_explorer: "技术探索者",
            tech_explorer_desc: "网页开发、编程、人工智能研究、创意人工智能工作流程",
            timeline: "我的旅程经历了不同的阶段：从设计开始，通过志愿服务经验扩展，通过运动纪律得到加强，现在探索技术和人工智能的前沿。每个阶段都建立在前一个阶段的基础上，创造了创意和技术技能的独特融合。",

            // Services section
            services_title: "服务",
            design_branding: "设计与品牌",
            design_branding_desc: "标志、身份、数字艺术 - 创造独特的视觉体验，传达您独特的故事和价值观。",
            travel_hospitality: "旅行与酒店",
            travel_hospitality_desc: "文化指导、旅游支持 - 通过真实的体验和有意义的联系架起文化桥梁。",
            web_dev: "网页开发与原型制作",
            web_dev_desc: "响应式网站、自动化脚本 - 构建解决实际问题的功能性数字解决方案。",
            ai_creative_tech: "人工智能与创意技术",
            ai_creative_tech_desc: "生成式人工智能集成、创意工作流程、大型语言模型/提示工程 - 探索创造力和人工智能的交叉点。",

            // Tech & AI section
            tech_ai_title: "用人工智能和代码探索未来",
            tech_intro: "我对自学的热情引导我探索人工智能和网页开发这些快速发展的领域。我对生成式人工智能改变创意工作流程的潜力着迷，并正在积极研究如何将传统设计原则与尖端人工智能技术相结合。",
            future_projects: "未来项目与探索",
            ai_design_assistant: "人工智能设计助手",
            ai_design_assistant_desc: "即将推出 - 一个结合生成式人工智能和设计原则来创建独特品牌身份的工具。",
            cultural_exchange: "文化交流平台",
            cultural_exchange_desc: "即将推出 - 一个通过人工智能推荐连接旅行者与当地体验的网页应用程序。",
            creative_workflow: "创意工作流程自动化",
            creative_workflow_desc: "即将推出 - 为设计师和艺术家简化创意流程的自定义脚本和工具。",

            // Portfolio section
            portfolio_title: "作品集",
            view_project: "查看项目",

            // Contact section
            contact_title: "联系我们",
            name: "姓名",
            email: "电子邮件",
            message: "留言",
            send_message: "发送留言",
            get_in_touch: "联系我们",

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

            post3Title: "数据科学入门",
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

    // Function to update navigation elements
    function updateNavigation(lang) {
        // Try multiple selectors to find navigation elements
        const navSelectors = [
            '.nav-link',
            'nav a',
            '.nav-item',
            '.menu-item',
            '.nav-links a',
            '.swiss-nav a',
            'header a',
            '.header a'
        ];

        // Update all navigation elements
        navSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                const text = element.textContent.trim().toLowerCase();

                // Check if this element contains any of our navigation keywords
                Object.keys(translations.en).forEach(key => {
                    const enText = translations.en[key].toLowerCase();
                    const arText = translations.ar[key];
                    const zhText = translations.zh[key];

                    // Check against all possible translations
                    if (text === key || 
                        text === enText || 
                        text === arText || 
                        text === zhText) {

                        // Update the text with the correct translation
                        element.textContent = translations[lang][key];
                    }
                });
            });
        });
    }

    // Function to update page content based on selected language
    function updatePageContent(lang) {
        const t = translations[lang];

        // Update navigation
        updateNavigation(lang);

        // Update document direction for RTL languages
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.body.classList.add('rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.classList.remove('rtl');
        }

        // Update hero section
        const taglineElement = document.querySelector('.tagline');
        if (taglineElement) taglineElement.textContent = t.tagline;

        // Update about section
        const aboutTitle = document.querySelector('.about-title');
        if (aboutTitle) aboutTitle.textContent = t.about_title;

        const designerTitle = document.querySelector('.designer-title');
        if (designerTitle) designerTitle.textContent = t.designer;

        const designerDesc = document.querySelector('.designer-desc');
        if (designerDesc) designerDesc.textContent = t.designer_desc;

        const travelerTitle = document.querySelector('.traveler-title');
        if (travelerTitle) travelerTitle.textContent = t.traveler;

        const travelerDesc = document.querySelector('.traveler-desc');
        if (travelerDesc) travelerDesc.textContent = t.traveler_desc;

        const athleteTitle = document.querySelector('.athlete-title');
        if (athleteTitle) athleteTitle.textContent = t.athlete;

        const athleteDesc = document.querySelector('.athlete-desc');
        if (athleteDesc) athleteDesc.textContent = t.athlete_desc;

        const techExplorerTitle = document.querySelector('.tech-explorer-title');
        if (techExplorerTitle) techExplorerTitle.textContent = t.tech_explorer;

        const techExplorerDesc = document.querySelector('.tech-explorer-desc');
        if (techExplorerDesc) techExplorerDesc.textContent = t.tech_explorer_desc;

        const timeline = document.querySelector('.timeline');
        if (timeline) timeline.textContent = t.timeline;

        // Update services section
        const servicesTitle = document.querySelector('.services-title');
        if (servicesTitle) servicesTitle.textContent = t.services_title;

        const designBrandingTitle = document.querySelector('.design-branding-title');
        if (designBrandingTitle) designBrandingTitle.textContent = t.design_branding;

        const designBrandingDesc = document.querySelector('.design-branding-desc');
        if (designBrandingDesc) designBrandingDesc.textContent = t.design_branding_desc;

        const travelHospitalityTitle = document.querySelector('.travel-hospitality-title');
        if (travelHospitalityTitle) travelHospitalityTitle.textContent = t.travel_hospitality;

        const travelHospitalityDesc = document.querySelector('.travel-hospitality-desc');
        if (travelHospitalityDesc) travelHospitalityDesc.textContent = t.travel_hospitality_desc;

        const webDevTitle = document.querySelector('.web-dev-title');
        if (webDevTitle) webDevTitle.textContent = t.web_dev;

        const webDevDesc = document.querySelector('.web-dev-desc');
        if (webDevDesc) webDevDesc.textContent = t.web_dev_desc;

        const aiCreativeTechTitle = document.querySelector('.ai-creative-tech-title');
        if (aiCreativeTechTitle) aiCreativeTechTitle.textContent = t.ai_creative_tech;

        const aiCreativeTechDesc = document.querySelector('.ai-creative-tech-desc');
        if (aiCreativeTechDesc) aiCreativeTechDesc.textContent = t.ai_creative_tech_desc;

        // Update portfolio section
        const portfolioTitle = document.querySelector('.portfolio-title');
        if (portfolioTitle) portfolioTitle.textContent = t.portfolio_title;

        const viewProjectBtns = document.querySelectorAll('.view-project-btn');
        viewProjectBtns.forEach(btn => {
            btn.textContent = t.view_project;
        });

        // Update contact section
        const contactTitle = document.querySelector('.contact-title');
        if (contactTitle) contactTitle.textContent = t.contact_title;

        const getInTouchTitle = document.querySelector('.get-in-touch-title');
        if (getInTouchTitle) getInTouchTitle.textContent = t.get_in_touch;

        const nameLabel = document.querySelector('label[for="name"]');
        if (nameLabel) nameLabel.textContent = t.name;

        const emailLabel = document.querySelector('label[for="email"]');
        if (emailLabel) emailLabel.textContent = t.email;

        const messageLabel = document.querySelector('label[for="message"]');
        if (messageLabel) messageLabel.textContent = t.message;

        const submitBtn = document.querySelector('.submit-btn');
        if (submitBtn) submitBtn.textContent = t.send_message;

        // Update contact links
        const emailLink = document.querySelector('a[href^="mailto:"]');
        if (emailLink) {
            const emailSpan = emailLink.querySelector('span');
            if (emailSpan && emailSpan.textContent === 'Email') emailSpan.textContent = t.email;
        }

        // Update blog page elements
        const blogTitle = document.querySelector('.page-title');
        if (blogTitle && (blogTitle.textContent === 'Blog' || blogTitle.textContent === 'المدونة' || blogTitle.textContent === '博客')) {
            blogTitle.textContent = t.blogTitle;
        }

        // Update blog categories
        const allCategories = document.querySelector('.category-btn[data-category="all"]');
        if (allCategories) {
            allCategories.textContent = t.allCategories;
        }

        const aiCategory = document.querySelector('.category-btn[data-category="ai"]');
        if (aiCategory) {
            aiCategory.textContent = t.aiCategory;
        }

        const webDevCategory = document.querySelector('.category-btn[data-category="web-dev"]');
        if (webDevCategory) {
            webDevCategory.textContent = t.webDevCategory;
        }

        const dataScienceCategory = document.querySelector('.category-btn[data-category="data-science"]');
        if (dataScienceCategory) {
            dataScienceCategory.textContent = t.dataScienceCategory;
        }

        const designCategory = document.querySelector('.category-btn[data-category="design"]');
        if (designCategory) {
            designCategory.textContent = t.designCategory;
        }

        // Update blog posts
        const postTitles = document.querySelectorAll('.post-title');
        postTitles.forEach(title => {
            const text = title.textContent.trim();
            if (text === 'The Future of Artificial Intelligence' || text === 'مستقبل الذكاء الاصطناعي' || text === '人工智能的未来') {
                title.textContent = t.post1Title;
            } else if (text === 'Modern Web Development Trends' || text === 'اتجاهات تطوير الويب الحديثة' || text === '现代Web开发趋势') {
                title.textContent = t.post2Title;
            } else if (text === 'Data Science for Beginners' || text === 'علم البيانات للمبتدئين' || text === '数据科学入门') {
                title.textContent = t.post3Title;
            } else if (text === 'UI/UX Design Principles' || text === 'مبادئ تصميم واجهة المستخدم وتجربة المستخدم' || text === 'UI/UX设计原则') {
                title.textContent = t.post4Title;
            } else if (text === 'Machine Learning Applications' || text === 'تطبيقات التعلم الآلي' || text === '机器学习应用') {
                title.textContent = t.post5Title;
            } else if (text === 'Responsive Web Design' || text === 'تصميم الويب المتجاوب' || text === '响应式Web设计') {
                title.textContent = t.post6Title;
            }
        });

        // Update blog post excerpts
        const postExcerpts = document.querySelectorAll('.post-excerpt');
        postExcerpts.forEach(excerpt => {
            const text = excerpt.textContent.trim();
            if (text.includes('Exploring how AI is transforming industries') || text.includes('استكشاف كيف يحول الذكاء الاصطناعي الصناعات') || text.includes('探索人工智能如何改变行业')) {
                excerpt.textContent = t.post1Excerpt;
            } else if (text.includes('A comprehensive guide to the latest trends') || text.includes('دليل شامل لأحدث الاتجاهات') || text.includes('最新趋势的综合指南')) {
                excerpt.textContent = t.post2Excerpt;
            } else if (text.includes('An introduction to data science concepts') || text.includes('مقدمة لمفاهيم علم البيانات') || text.includes('数据科学概念介绍')) {
                excerpt.textContent = t.post3Excerpt;
            } else if (text.includes('Essential design principles every designer') || text.includes('مبادئ تصميم أساسية يجب أن يعرفها كل مصمم') || text.includes('每个设计师都应该知道的基本设计原则')) {
                excerpt.textContent = t.post4Excerpt;
            } else if (text.includes('Real-world applications of machine learning') || text.includes('تطبيقات العالم الحقيقي للتعلم الآلي') || text.includes('机器学习的实际应用')) {
                excerpt.textContent = t.post5Excerpt;
            } else if (text.includes('Best practices for creating websites') || text.includes('أفضل الممارسات لإنشاء مواقع الويب') || text.includes('创建网站的最佳实践')) {
                excerpt.textContent = t.post6Excerpt;
            }
        });

        // Update blog post metadata
        const postCategories = document.querySelectorAll('.post-category');
        postCategories.forEach(category => {
            const text = category.textContent.trim();
            if (text === 'AI' || text === 'الذكاء الاصطناعي' || text === '人工智能') {
                category.textContent = t.aiCategory;
            } else if (text === 'Web Dev' || text === 'تطوير الويب' || text === 'Web开发') {
                category.textContent = t.webDevCategory;
            } else if (text === 'Data Science' || text === 'علم البيانات' || text === '数据科学') {
                category.textContent = t.dataScienceCategory;
            } else if (text === 'Design' || text === 'التصميم' || text === '设计') {
                category.textContent = t.designCategory;
            }
        });

        // Update blog post dates and authors
        const postDates = document.querySelectorAll('.post-date');
        postDates.forEach(date => {
            const text = date.textContent.trim();
            if (text === 'May 15, 2023') {
                date.textContent = t.post1Date;
            } else if (text === 'April 28, 2023') {
                date.textContent = t.post2Date;
            } else if (text === 'April 10, 2023') {
                date.textContent = t.post3Date;
            } else if (text === 'March 25, 2023') {
                date.textContent = t.post4Date;
            } else if (text === 'March 12, 2023') {
                date.textContent = t.post5Date;
            } else if (text === 'February 28, 2023') {
                date.textContent = t.post6Date;
            }
        });

        const postAuthors = document.querySelectorAll('.post-author');
        postAuthors.forEach(author => {
            const text = author.textContent.trim();
            if (text === 'Alex Johnson') {
                author.textContent = t.post1Author;
            } else if (text === 'Sarah Williams') {
                author.textContent = t.post2Author;
            } else if (text === 'Michael Chen') {
                author.textContent = t.post3Author;
            } else if (text === 'Emily Rodriguez') {
                author.textContent = t.post4Author;
            } else if (text === 'David Kim') {
                author.textContent = t.post5Author;
            } else if (text === 'Jessica Taylor') {
                author.textContent = t.post6Author;
            }
        });

        // Update read more buttons
        const readMoreBtns = document.querySelectorAll('.read-more');
        readMoreBtns.forEach(btn => {
            btn.textContent = t.readMore;
        });

        // Force update with multiple delays to ensure all elements are updated
        [100, 300, 500].forEach(delay => {
            setTimeout(() => {
                updateNavigation(lang);

                // Re-update all other elements
                if (taglineElement) taglineElement.textContent = t.tagline;
                if (aboutTitle) aboutTitle.textContent = t.about_title;
                if (designerTitle) designerTitle.textContent = t.designer;
                if (designerDesc) designerDesc.textContent = t.designer_desc;
                if (travelerTitle) travelerTitle.textContent = t.traveler;
                if (travelerDesc) travelerDesc.textContent = t.traveler_desc;
                if (athleteTitle) athleteTitle.textContent = t.athlete;
                if (athleteDesc) athleteDesc.textContent = t.athlete_desc;
                if (techExplorerTitle) techExplorerTitle.textContent = t.tech_explorer;
                if (techExplorerDesc) techExplorerDesc.textContent = t.tech_explorer_desc;
                if (timeline) timeline.textContent = t.timeline;
                if (servicesTitle) servicesTitle.textContent = t.services_title;
                if (designBrandingTitle) designBrandingTitle.textContent = t.design_branding;
                if (designBrandingDesc) designBrandingDesc.textContent = t.design_branding_desc;
                if (travelHospitalityTitle) travelHospitalityTitle.textContent = t.travel_hospitality;
                if (travelHospitalityDesc) travelHospitalityDesc.textContent = t.travel_hospitality_desc;
                if (webDevTitle) webDevTitle.textContent = t.web_dev;
                if (webDevDesc) webDevDesc.textContent = t.web_dev_desc;
                if (aiCreativeTechTitle) aiCreativeTechTitle.textContent = t.ai_creative_tech;
                if (aiCreativeTechDesc) aiCreativeTechDesc.textContent = t.ai_creative_tech_desc;
                if (portfolioTitle) portfolioTitle.textContent = t.portfolio_title;
                if (contactTitle) contactTitle.textContent = t.contact_title;
                if (getInTouchTitle) getInTouchTitle.textContent = t.get_in_touch;
                if (nameLabel) nameLabel.textContent = t.name;
                if (emailLabel) emailLabel.textContent = t.email;
                if (messageLabel) messageLabel.textContent = t.message;
                if (submitBtn) submitBtn.textContent = t.send_message;
                if (emailSpan) emailSpan.textContent = t.email;
                if (blogTitle) blogTitle.textContent = t.blogTitle;
                if (allCategories) allCategories.textContent = t.allCategories;
                if (aiCategory) aiCategory.textContent = t.aiCategory;
                if (webDevCategory) webDevCategory.textContent = t.webDevCategory;
                if (dataScienceCategory) dataScienceCategory.textContent = t.dataScienceCategory;
                if (designCategory) designCategory.textContent = t.designCategory;

                // Re-update blog posts
                postTitles.forEach(title => {
                    const text = title.textContent.trim();
                    if (text === 'The Future of Artificial Intelligence' || text === 'مستقبل الذكاء الاصطناعي' || text === '人工智能的未来') {
                        title.textContent = t.post1Title;
                    } else if (text === 'Modern Web Development Trends' || text === 'اتجاهات تطوير الويب الحديثة' || text === '现代Web开发趋势') {
                        title.textContent = t.post2Title;
                    } else if (text === 'Data Science for Beginners' || text === 'علم البيانات للمبتدئين' || text === '数据科学入门') {
                        title.textContent = t.post3Title;
                    } else if (text === 'UI/UX Design Principles' || text === 'مبادئ تصميم واجهة المستخدم وتجربة المستخدم' || text === 'UI/UX设计原则') {
                        title.textContent = t.post4Title;
                    } else if (text === 'Machine Learning Applications' || text === 'تطبيقات التعلم الآلي' || text === '机器学习应用') {
                        title.textContent = t.post5Title;
                    } else if (text === 'Responsive Web Design' || text === 'تصميم الويب المتجاوب' || text === '响应式Web设计') {
                        title.textContent = t.post6Title;
                    }
                });

                // Re-update blog post excerpts
                postExcerpts.forEach(excerpt => {
                    const text = excerpt.textContent.trim();
                    if (text.includes('Exploring how AI is transforming industries') || text.includes('استكشاف كيف يحول الذكاء الاصطناعي الصناعات') || text.includes('探索人工智能如何改变行业')) {
                        excerpt.textContent = t.post1Excerpt;
                    } else if (text.includes('A comprehensive guide to the latest trends') || text.includes('دليل شامل لأحدث الاتجاهات') || text.includes('最新趋势的综合指南')) {
                        excerpt.textContent = t.post2Excerpt;
                    } else if (text.includes('An introduction to data science concepts') || text.includes('مقدمة لمفاهيم علم البيانات') || text.includes('数据科学概念介绍')) {
                        excerpt.textContent = t.post3Excerpt;
                    } else if (text.includes('Essential design principles every designer') || text.includes('مبادئ تصميم أساسية يجب أن يعرفها كل مصمم') || text.includes('每个设计师都应该知道的基本设计原则')) {
                        excerpt.textContent = t.post4Excerpt;
                    } else if (text.includes('Real-world applications of machine learning') || text.includes('تطبيقات العالم الحقيقي للتعلم الآلي') || text.includes('机器学习的实际应用')) {
                        excerpt.textContent = t.post5Excerpt;
                    } else if (text.includes('Best practices for creating websites') || text.includes('أفضل الممارسات لإنشاء مواقع الويب') || text.includes('创建网站的最佳实践')) {
                        excerpt.textContent = t.post6Excerpt;
                    }
                });

                // Re-update blog post metadata
                postCategories.forEach(category => {
                    const text = category.textContent.trim();
                    if (text === 'AI' || text === 'الذكاء الاصطناعي' || text === '人工智能') {
                        category.textContent = t.aiCategory;
                    } else if (text === 'Web Dev' || text === 'تطوير الويب' || text === 'Web开发') {
                        category.textContent = t.webDevCategory;
                    } else if (text === 'Data Science' || text === 'علم البيانات' || text === '数据科学') {
                        category.textContent = t.dataScienceCategory;
                    } else if (text === 'Design' || text === 'التصميم' || text === '设计') {
                        category.textContent = t.designCategory;
                    }
                });

                // Re-update blog post dates and authors
                postDates.forEach(date => {
                    const text = date.textContent.trim();
                    if (text === 'May 15, 2023') {
                        date.textContent = t.post1Date;
                    } else if (text === 'April 28, 2023') {
                        date.textContent = t.post2Date;
                    } else if (text === 'April 10, 2023') {
                        date.textContent = t.post3Date;
                    } else if (text === 'March 25, 2023') {
                        date.textContent = t.post4Date;
                    } else if (text === 'March 12, 2023') {
                        date.textContent = t.post5Date;
                    } else if (text === 'February 28, 2023') {
                        date.textContent = t.post6Date;
                    }
                });

                postAuthors.forEach(author => {
                    const text = author.textContent.trim();
                    if (text === 'Alex Johnson') {
                        author.textContent = t.post1Author;
                    } else if (text === 'Sarah Williams') {
                        author.textContent = t.post2Author;
                    } else if (text === 'Michael Chen') {
                        author.textContent = t.post3Author;
                    } else if (text === 'Emily Rodriguez') {
                        author.textContent = t.post4Author;
                    } else if (text === 'David Kim') {
                        author.textContent = t.post5Author;
                    } else if (text === 'Jessica Taylor') {
                        author.textContent = t.post6Author;
                    }
                });

                // Re-update read more buttons
                readMoreBtns.forEach(btn => {
                    btn.textContent = t.readMore;
                });
            }, delay);
        });
    }

    // Apply saved language on page load
    updatePageContent(savedLanguage);

    // Language selector functionality
    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.getElementById('language-dropdown');

    if (languageBtn && languageDropdown) {
        // Toggle dropdown on button click
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
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
        const languageOptions = languageDropdown.querySelectorAll('.language-option');
        if (languageOptions) {
            // Set active language on page load
            languageOptions.forEach(option => {
                if (option.getAttribute('data-lang') === savedLanguage) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }

                // Add click event listener
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

    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Dark mode functionality
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