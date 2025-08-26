// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Language translations
    const translations = {
        en: {
            // Navigation
            home: "HOME",
            about: "ABOUT",
            services: "SERVICES",
            tech_ai: "TECH & AI",
            portfolio: "PORTFOLIO",
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
            brand_identity: "Brand Identity Project",
            digital_art: "Digital Art Collection",
            sports_branding: "Sports Event Branding",
            travel_guide: "Travel Guide Design",
            logo_series: "Logo Design Series",
            promotional_campaign: "Promotional Campaign",

            // Contact section
            contact_title: "CONTACT",
            get_in_touch: "Get in Touch",
            name: "Name",
            email: "Email",
            message: "Message",
            send_message: "SEND MESSAGE",

            // Footer
            footer_text: "© <span id=\"current-year\"></span> ZAK PRO · Built with passion"
        },
        ar: {
            // Navigation
            home: "الرئيسية",
            about: "نبذة عنا",
            services: "خدماتنا",
            tech_ai: "التقنية والذكاء الاصطناعي",
            portfolio: "أعمالنا",
            contact: "اتصل بنا",

            // Hero section
            tagline: "مصمم • مطور • مستكشف الذكاء الاصطناعي • مسافر – مزج بين الإبداع والتكنولوجيا والثقافة",

            // About section
            about_title: "نبذة عنا",
            designer: "مصمم",
            designer_desc: "العلامات التجارية، الشعارات، الفن الرقمي، الإبداع والإخراج",
            traveler: "مسافر ومتطوع",
            traveler_desc: "تجارب ثقافية متعددة، العمل الجماعي، إدارة الفعاليات",
            athlete: "رياضي",
            athlete_desc: "الانضباط، المرونة، الصحة، العمل الجماعي (تمارين القوة، الكرة الطائرة)",
            tech_explorer: "مستكشف التقنية",
            tech_explorer_desc: "تطوير الويب، البرمجة، أبحاث الذكاء الاصطناعي، سير العمل الإبداعي بالذكاء الاصطناعي",
            timeline: "تطورت رحلتي عبر مراحل متميزة: بدءًا من التصميم، والتوسع من خلال تجارب التطوع، وتقويتها بالانضباط الرياضي، والآن استكشاف آفاق التكنولوجيا والذكاء الاصطناعي. بنت كل مرحلة على سابقتها، مما خلق مزيجًا فريدًا من المهارات الإبداعية والتقنية.",

            // Services section
            services_title: "خدماتنا",
            design_branding: "التصميم والعلامات التجارية",
            design_branding_desc: "الشعارات، الهوية، الفن الرقمي - خلق تجارب بصرية مميزة تعبر عن قصتك وقيمك الفريدة.",
            travel_hospitality: "السفر والضيافة",
            travel_hospitality_desc: "الإرشاد الثقافي، دعم السياحة - ربط الثقافات من خلال تجارب أصيلة وروابط ذات معنى.",
            web_dev: "تطوير الويب والنماذج الأولية",
            web_dev_desc: "مواقع الويب المتجاوبة، برامج الأتمتة - بناء حلول رقمية وظيفية تحل مشاكل حقيقية.",
            ai_creative_tech: "الذكاء الاصطناعي والتكنولوجيا الإبداعية",
            ai_creative_tech_desc: "تكامل الذكاء الاصطناعي التوليدي، سير العمل الإبداعي، هندسة نماذج اللغة الكبيرة/المطالبات - استكشاف تقاطع الإبداع والذكاء الاصطناعي.",

            // Tech & AI section
            tech_ai_title: "استكشاف المستقبل مع الذكاء الاصطناعي والبرمجة",
            tech_intro: "قادني شغفي بالتعلم الذاتي إلى استكشاف مجالات الذكاء الاصطناعي وتطوير الويب سريعة التطور. أنا مفتون بإمكانيات الذكاء الاصطناعي التوليدي لتحويل سير العمل الإبداعي، وأبحث بنشاط عن كيفية دمج مبادئ التصميم التقليدية مع تقنيات الذكاء الاصطناعي المتطورة.",
            future_projects: "المشاريع المستقبلية والاستكشافات",
            ai_design_assistant: "مساعد التصميم بالذكاء الاصطناعي",
            ai_design_assistant_desc: "قريبًا - أداة تجمع بين الذكاء الاصطناعي التوليدي ومبادئ التصميم لخلق هويات بصرية فريدة.",
            cultural_exchange: "منصة التبادل الثقافي",
            cultural_exchange_desc: "قريبًا - تطبيق ويب يربط المسافرين بالتجارب المحلية من خلال توصيات الذكاء الاصطناعي.",
            creative_workflow: "أتمتة سير العمل الإبداعي",
            creative_workflow_desc: "قريبًا - برامج نصية وأدوات مخصصة لتبسيط عملية الإبداع للمصممين والفنانين.",

            // Portfolio section
            portfolio_title: "أعمالنا",
            brand_identity: "مشروع هوية بصرية",
            digital_art: "مجموعة الفن الرقمي",
            sports_branding: "علامة فعالية رياضية",
            travel_guide: "تصميم دليل السفر",
            logo_series: "سلسلة تصميم الشعارات",
            promotional_campaign: "حملة ترويجية",

            // Contact section
            contact_title: "اتصل بنا",
            get_in_touch: "تواصل معنا",
            name: "الاسم",
            email: "البريد الإلكتروني",
            message: "الرسالة",
            send_message: "إرسال الرسالة",

            // Footer
            footer_text: "© <span id=\"current-year\"></span> زاك برو · بُنيت بشغف"
        },
        zh: {
            // Navigation
            home: "首页",
            about: "关于",
            services: "服务",
            tech_ai: "技术与人工智能",
            portfolio: "作品集",
            contact: "联系",

            // Hero section
            tagline: "设计师 • 开发者 • 人工智能探索者 • 旅行者 – 融合创造力、技术和文化",

            // About section
            about_title: "关于",
            designer: "设计师",
            designer_desc: "品牌设计、标志、数字艺术、创意指导",
            traveler: "旅行者和志愿者",
            traveler_desc: "跨文化体验、团队合作、活动管理",
            athlete: "运动员",
            athlete_desc: "纪律、韧性、健康、团队合作（健身操、排球）",
            tech_explorer: "技术探索者",
            tech_explorer_desc: "网页开发、编程、人工智能研究、创意人工智能工作流程",
            timeline: "我的旅程经历了不同的阶段：从设计开始，通过志愿服务经验扩展，通过运动纪律加强，现在探索技术和人工智能的前沿。每个阶段都建立在前一个阶段的基础上，创造了创意和技术技能的独特融合。",

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
            tech_intro: "我对自学的热情引导我探索快速发展的领域，如人工智能和网页开发。我对生成式人工智能改变创意工作流程的潜力着迷，并正在积极研究如何将传统设计原则与尖端人工智能技术相结合。",
            future_projects: "未来项目与探索",
            ai_design_assistant: "人工智能设计助手",
            ai_design_assistant_desc: "即将推出 - 结合生成式人工智能和设计原则创造独特品牌标识的工具。",
            cultural_exchange: "文化交流平台",
            cultural_exchange_desc: "即将推出 - 通过人工智能推荐连接旅行者与当地体验的网页应用程序。",
            creative_workflow: "创意工作流程自动化",
            creative_workflow_desc: "即将推出 - 为设计师和艺术家简化创意流程的自定义脚本和工具。",

            // Portfolio section
            portfolio_title: "作品集",
            brand_identity: "品牌标识项目",
            digital_art: "数字艺术收藏",
            sports_branding: "体育赛事品牌",
            travel_guide: "旅行指南设计",
            logo_series: "标志设计系列",
            promotional_campaign: "促销活动",

            // Contact section
            contact_title: "联系",
            get_in_touch: "联系我们",
            name: "姓名",
            email: "电子邮件",
            message: "留言",
            send_message: "发送信息",

            // Footer
            footer_text: "© <span id=\"current-year\"></span> ZAK PRO · 用热情打造"
        }
    };

    // Get DOM elements
    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    const currentLanguageSpan = document.querySelector('.current-language');

    // Initialize language from localStorage or default to English
    let currentLanguage = localStorage.getItem('preferred-language') || 'en';
    updateLanguage(currentLanguage);

    // Toggle language dropdown
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        languageDropdown.classList.remove('active');
    });

    // Handle language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedLanguage = this.getAttribute('data-lang');
            currentLanguage = selectedLanguage;
            localStorage.setItem('preferred-language', selectedLanguage);
            updateLanguage(selectedLanguage);
            languageDropdown.classList.remove('active');
        });
    });

    // Function to update the language
    function updateLanguage(lang) {
        // Update current language display
        currentLanguageSpan.textContent = languageOptions[lang] === 'en' ? 'English' : 
                                       lang === 'ar' ? 'العربية' : '中文';
        currentLanguageSpan.setAttribute('data-lang', lang);

        // Update active language option
        languageOptions.forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Update text content based on selected language
        const translation = translations[lang];

        // Update navigation
        document.querySelector('.nav-link[href="#home"]').textContent = translation.home;
        document.querySelector('.nav-link[href="#about"]').textContent = translation.about;
        document.querySelector('.nav-link[href="#services"]').textContent = translation.services;
        document.querySelector('.nav-link[href="#tech-ai"]').textContent = translation.tech_ai;
        document.querySelector('.nav-link[href="#portfolio"]').textContent = translation.portfolio;
        document.querySelector('.nav-link[href="#contact"]').textContent = translation.contact;

        // Update hero section
        document.querySelector('.tagline').textContent = translation.tagline;

        // Update about section
        document.querySelector('#about .section-title span').textContent = translation.about_title;
        document.querySelector('#about .pillar:nth-child(1) h3').textContent = translation.designer;
        document.querySelector('#about .pillar:nth-child(1) p').textContent = translation.designer_desc;
        document.querySelector('#about .pillar:nth-child(2) h3').textContent = translation.traveler;
        document.querySelector('#about .pillar:nth-child(2) p').textContent = translation.traveler_desc;
        document.querySelector('#about .pillar:nth-child(3) h3').textContent = translation.athlete;
        document.querySelector('#about .pillar:nth-child(3) p').textContent = translation.athlete_desc;
        document.querySelector('#about .pillar:nth-child(4) h3').textContent = translation.tech_explorer;
        document.querySelector('#about .pillar:nth-child(4) p').textContent = translation.tech_explorer_desc;
        document.querySelector('#about .timeline p').textContent = translation.timeline;

        // Update services section
        document.querySelector('#services .section-title span').textContent = translation.services_title;
        document.querySelector('#services .service-card:nth-child(1) h3').textContent = translation.design_branding;
        document.querySelector('#services .service-card:nth-child(1) p').textContent = translation.design_branding_desc;
        document.querySelector('#services .service-card:nth-child(2) h3').textContent = translation.travel_hospitality;
        document.querySelector('#services .service-card:nth-child(2) p').textContent = translation.travel_hospitality_desc;
        document.querySelector('#services .service-card:nth-child(3) h3').textContent = translation.web_dev;
        document.querySelector('#services .service-card:nth-child(3) p').textContent = translation.web_dev_desc;
        document.querySelector('#services .service-card:nth-child(4) h3').textContent = translation.ai_creative_tech;
        document.querySelector('#services .service-card:nth-child(4) p').textContent = translation.ai_creative_tech_desc;

        // Update tech & AI section
        document.querySelector('#tech-ai .section-title span').textContent = translation.tech_ai_title;
        document.querySelector('#tech-ai .tech-intro p').textContent = translation.tech_intro;
        document.querySelector('#tech-ai .tech-projects h3').textContent = translation.future_projects;
        document.querySelector('#tech-ai .project-placeholder:nth-child(1) h4').textContent = translation.ai_design_assistant;
        document.querySelector('#tech-ai .project-placeholder:nth-child(1) p').textContent = translation.ai_design_assistant_desc;
        document.querySelector('#tech-ai .project-placeholder:nth-child(2) h4').textContent = translation.cultural_exchange;
        document.querySelector('#tech-ai .project-placeholder:nth-child(2) p').textContent = translation.cultural_exchange_desc;
        document.querySelector('#tech-ai .project-placeholder:nth-child(3) h4').textContent = translation.creative_workflow;
        document.querySelector('#tech-ai .project-placeholder:nth-child(3) p').textContent = translation.creative_workflow_desc;

        // Update portfolio section
        document.querySelector('#portfolio .section-title span').textContent = translation.portfolio_title;
        document.querySelector('#portfolio .portfolio-item:nth-child(1) .overlay-content h3').textContent = translation.brand_identity;
        document.querySelector('#portfolio .portfolio-item:nth-child(2) .overlay-content h3').textContent = translation.digital_art;
        document.querySelector('#portfolio .portfolio-item:nth-child(3) .overlay-content h3').textContent = translation.sports_branding;
        document.querySelector('#portfolio .portfolio-item:nth-child(4) .overlay-content h3').textContent = translation.travel_guide;
        document.querySelector('#portfolio .portfolio-item:nth-child(5) .overlay-content h3').textContent = translation.logo_series;
        document.querySelector('#portfolio .portfolio-item:nth-child(6) .overlay-content h3').textContent = translation.promotional_campaign;

        // Update contact section
        document.querySelector('#contact .section-title span').textContent = translation.contact_title;
        document.querySelector('#contact .contact-info h3').textContent = translation.get_in_touch;
        document.querySelector('#contact label[for="name"]').textContent = translation.name;
        document.querySelector('#contact label[for="email"]').textContent = translation.email;
        document.querySelector('#contact label[for="message"]').textContent = translation.message;
        document.querySelector('#contact .submit-btn').textContent = translation.send_message;

        // Update footer
        document.querySelector('.footer p').innerHTML = translation.footer_text;

        // Update document direction for RTL languages
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
    }
});
