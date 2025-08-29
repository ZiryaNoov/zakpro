// Language Switching for Entire Website
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
            tech_explorer_desc: "网络开发、编程、人工智能研究、创意人工智能工作流程",
            timeline: "我的旅程经历了不同的阶段：从设计开始，通过志愿服务经验扩展，通过运动纪律加强，现在探索技术和人工智能的前沿。每个阶段都建立在前一个阶段的基础上，创造了创意和技术技能的独特融合。",

            // Services section
            services_title: "服务",
            design_branding: "设计与品牌",
            design_branding_desc: "标志、身份、数字艺术 - 创造独特的视觉体验，传达您独特的故事和价值观。",
            travel_hospitality: "旅行与酒店",
            travel_hospitality_desc: "文化指导、旅游支持 - 通过真实的体验和有意义的联系架起文化桥梁。",
            web_dev: "网络开发与原型设计",
            web_dev_desc: "响应式网站、自动化脚本 - 构建解决实际问题的功能性数字解决方案。",
            ai_creative_tech: "人工智能与创意技术",
            ai_creative_tech_desc: "生成式人工智能集成、创意工作流程、大型语言模型/提示工程 - 探索创造力和人工智能的交叉点。",

            // Tech & AI section
            tech_ai_title: "用人工智能和代码探索未来",
            tech_intro: "我对自学的热情引导我探索人工智能和网络开发这些快速发展的领域。我被生成式人工智能改变创意工作流程的潜力所吸引，并积极研究如何将传统设计原则与尖端人工智能技术融合。",
            future_projects: "未来项目与探索",
            ai_design_assistant: "人工智能设计助手",
            ai_design_assistant_desc: "即将推出 - 结合生成式人工智能和设计原则创建独特品牌身份的工具。",
            cultural_exchange: "文化交流平台",
            cultural_exchange_desc: "即将推出 - 通过人工智能推荐将旅行者与当地体验联系起来的网络应用程序。",
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
            webDevCategory: "网络开发",
            dataScienceCategory: "数据科学",
            designCategory: "设计",
            readMore: "阅读更多",

            // Blog posts
            post1Title: "人工智能的未来",
            post1Excerpt: "探索人工智能如何改变行业以及未来几年的预期。",
            post1Category: "人工智能",
            post1Date: "2023年5月15日",
            post1Author: "亚历克斯·约翰逊",

            post2Title: "现代网络开发趋势",
            post2Excerpt: "网络开发最新趋势和技术的综合指南。",
            post2Category: "网络开发",
            post2Date: "2023年4月28日",
            post2Author: "莎拉·威廉姆斯",

            post3Title: "数据科学初学者指南",
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
            post6Category: "网络开发",
            post6Date: "2023年2月28日",
            post6Author: "杰西卡·泰勒",

            // Newsletter
            newsletterTitle: "订阅我们的新闻通讯",
            newsletterDescription: "将最新帖子直接发送到您的收件箱。",
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
                    const translationsForKey = {
                        en: translations.en[key],
                        ar: translations.ar[key],
                        zh: translations.zh[key]
                    };

                    // Check against all possible translations
                    if (text === key || 
                        text === translationsForKey.en.toLowerCase() || 
                        text === translationsForKey.ar || 
                        text === translationsForKey.zh) {

                        // Update the text with the correct translation
                        element.textContent = translationsForKey[lang];
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

        // Update tech & AI section
        const techAiTitle = document.querySelector('.tech-ai-title');
        if (techAiTitle) techAiTitle.textContent = t.tech_ai_title;

        const techIntro = document.querySelector('.tech-intro');
        if (techIntro) techIntro.textContent = t.tech_intro;

        const futureProjects = document.querySelector('.future-projects');
        if (futureProjects) futureProjects.textContent = t.future_projects;

        const aiDesignAssistantTitle = document.querySelector('.ai-design-assistant-title');
        if (aiDesignAssistantTitle) aiDesignAssistantTitle.textContent = t.ai_design_assistant;

        const aiDesignAssistantDesc = document.querySelector('.ai-design-assistant-desc');
        if (aiDesignAssistantDesc) aiDesignAssistantDesc.textContent = t.ai_design_assistant_desc;

        const culturalExchangeTitle = document.querySelector('.cultural-exchange-title');
        if (culturalExchangeTitle) culturalExchangeTitle.textContent = t.cultural_exchange;

        const culturalExchangeDesc = document.querySelector('.cultural-exchange-desc');
        if (culturalExchangeDesc) culturalExchangeDesc.textContent = t.cultural_exchange_desc;

        const creativeWorkflowTitle = document.querySelector('.creative-workflow-title');
        if (creativeWorkflowTitle) creativeWorkflowTitle.textContent = t.creative_workflow;

        const creativeWorkflowDesc = document.querySelector('.creative-workflow-desc');
        if (creativeWorkflowDesc) creativeWorkflowDesc.textContent = t.creative_workflow_desc;

        // Update portfolio section
        const portfolioTitle = document.querySelector('.portfolio-title');
        if (portfolioTitle) portfolioTitle.textContent = t.portfolio_title;

        const viewProjectButtons = document.querySelectorAll('.view-project');
        viewProjectButtons.forEach(button => {
            button.textContent = t.view_project;
        });

        // Update contact section
        const contactTitle = document.querySelector('.contact-title');
        if (contactTitle) contactTitle.textContent = t.contact_title;

        const nameLabel = document.querySelector('label[for="name"]');
        if (nameLabel) nameLabel.textContent = t.name;

        const emailLabel = document.querySelector('label[for="email"]');
        if (emailLabel) emailLabel.textContent = t.email;

        const messageLabel = document.querySelector('label[for="message"]');
        if (messageLabel) messageLabel.textContent = t.message;

        const submitBtn = document.querySelector('.submit-btn');
        if (submitBtn) submitBtn.textContent = t.send_message;

        const getInTouch = document.querySelector('.get-in-touch');
        if (getInTouch) getInTouch.textContent = t.get_in_touch;

        // Update blog page
        const blogTitle = document.querySelector('.page-title');
        if (blogTitle) blogTitle.textContent = t.blogTitle;

        const allCategoriesBtn = document.querySelector('.category-btn[data-category="all"]');
        if (allCategoriesBtn) allCategoriesBtn.textContent = t.allCategories;

        const aiCategoryBtn = document.querySelector('.category-btn[data-category="ai"]');
        if (aiCategoryBtn) aiCategoryBtn.textContent = t.aiCategory;

        const webDevCategoryBtn = document.querySelector('.category-btn[data-category="web-dev"]');
        if (webDevCategoryBtn) webDevCategoryBtn.textContent = t.webDevCategory;

        const dataScienceCategoryBtn = document.querySelector('.category-btn[data-category="data-science"]');
        if (dataScienceCategoryBtn) dataScienceCategoryBtn.textContent = t.dataScienceCategory;

        const designCategoryBtn = document.querySelector('.category-btn[data-category="design"]');
        if (designCategoryBtn) designCategoryBtn.textContent = t.designCategory;

        const readMoreButtons = document.querySelectorAll('.read-more');
        readMoreButtons.forEach(button => {
            button.textContent = t.readMore;
        });

        // Update blog posts
        const post1Title = document.querySelector('.post-1 .post-title');
        if (post1Title) post1Title.textContent = t.post1Title;

        const post1Excerpt = document.querySelector('.post-1 .post-excerpt');
        if (post1Excerpt) post1Excerpt.textContent = t.post1Excerpt;

        const post1Category = document.querySelector('.post-1 .post-category');
        if (post1Category) post1Category.textContent = t.post1Category;

        const post1Date = document.querySelector('.post-1 .post-date');
        if (post1Date) post1Date.textContent = t.post1Date;

        const post1Author = document.querySelector('.post-1 .post-author');
        if (post1Author) post1Author.textContent = t.post1Author;

        const post2Title = document.querySelector('.post-2 .post-title');
        if (post2Title) post2Title.textContent = t.post2Title;

        const post2Excerpt = document.querySelector('.post-2 .post-excerpt');
        if (post2Excerpt) post2Excerpt.textContent = t.post2Excerpt;

        const post2Category = document.querySelector('.post-2 .post-category');
        if (post2Category) post2Category.textContent = t.post2Category;

        const post2Date = document.querySelector('.post-2 .post-date');
        if (post2Date) post2Date.textContent = t.post2Date;

        const post2Author = document.querySelector('.post-2 .post-author');
        if (post2Author) post2Author.textContent = t.post2Author;

        const post3Title = document.querySelector('.post-3 .post-title');
        if (post3Title) post3Title.textContent = t.post3Title;

        const post3Excerpt = document.querySelector('.post-3 .post-excerpt');
        if (post3Excerpt) post3Excerpt.textContent = t.post3Excerpt;

        const post3Category = document.querySelector('.post-3 .post-category');
        if (post3Category) post3Category.textContent = t.post3Category;

        const post3Date = document.querySelector('.post-3 .post-date');
        if (post3Date) post3Date.textContent = t.post3Date;

        const post3Author = document.querySelector('.post-3 .post-author');
        if (post3Author) post3Author.textContent = t.post3Author;

        const post4Title = document.querySelector('.post-4 .post-title');
        if (post4Title) post4Title.textContent = t.post4Title;

        const post4Excerpt = document.querySelector('.post-4 .post-excerpt');
        if (post4Excerpt) post4Excerpt.textContent = t.post4Excerpt;

        const post4Category = document.querySelector('.post-4 .post-category');
        if (post4Category) post4Category.textContent = t.post4Category;

        const post4Date = document.querySelector('.post-4 .post-date');
        if (post4Date) post4Date.textContent = t.post4Date;

        const post4Author = document.querySelector('.post-4 .post-author');
        if (post4Author) post4Author.textContent = t.post4Author;

        const post5Title = document.querySelector('.post-5 .post-title');
        if (post5Title) post5Title.textContent = t.post5Title;

        const post5Excerpt = document.querySelector('.post-5 .post-excerpt');
        if (post5Excerpt) post5Excerpt.textContent = t.post5Excerpt;

        const post5Category = document.querySelector('.post-5 .post-category');
        if (post5Category) post5Category.textContent = t.post5Category;

        const post5Date = document.querySelector('.post-5 .post-date');
        if (post5Date) post5Date.textContent = t.post5Date;

        const post5Author = document.querySelector('.post-5 .post-author');
        if (post5Author) post5Author.textContent = t.post5Author;

        const post6Title = document.querySelector('.post-6 .post-title');
        if (post6Title) post6Title.textContent = t.post6Title;

        const post6Excerpt = document.querySelector('.post-6 .post-excerpt');
        if (post6Excerpt) post6Excerpt.textContent = t.post6Excerpt;

        const post6Category = document.querySelector('.post-6 .post-category');
        if (post6Category) post6Category.textContent = t.post6Category;

        const post6Date = document.querySelector('.post-6 .post-date');
        if (post6Date) post6Date.textContent = t.post6Date;

        const post6Author = document.querySelector('.post-6 .post-author');
        if (post6Author) post6Author.textContent = t.post6Author;

        // Update newsletter section
        const newsletterTitle = document.querySelector('.newsletter-title');
        if (newsletterTitle) newsletterTitle.textContent = t.newsletterTitle;

        const newsletterDescription = document.querySelector('.newsletter-description');
        if (newsletterDescription) newsletterDescription.textContent = t.newsletterDescription;

        const emailInput = document.querySelector('.newsletter-input');
        if (emailInput) emailInput.placeholder = t.emailPlaceholder;

        const subscribeButton = document.querySelector('.subscribe-button');
        if (subscribeButton) subscribeButton.textContent = t.subscribeButton;

        const thankYouMessage = document.querySelector('.thank-you-message');
        if (thankYouMessage) thankYouMessage.textContent = t.thankYouForSubscribing;

        // Update footer
        const footerText = document.querySelector('.footer-content p');
        if (footerText) {
            const currentYear = new Date().getFullYear();
            footerText.innerHTML = `&copy; <span id="current-year">${currentYear}</span> ZAK PRO &middot; ${t.allRightsReserved}`;
        }

        // Force update with multiple delays to ensure all elements are updated
        [100, 300, 500].forEach(delay => {
            setTimeout(() => {
                updateNavigation(lang);
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