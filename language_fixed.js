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
            digital_art: "Digital Art Series",
            sports_branding: "Sports Branding",
            travel_guide: "Travel Guide Design",
            logo_series: "Logo Series",
            promotional_campaign: "Promotional Campaign",

            // Contact section
            contact_title: "GET IN TOUCH",
            get_in_touch: "Get in Touch",
            name: "Name",
            email: "Email",
            message: "Message",
            send_message: "Send Message",

            // Footer
            footer_text: "© <span id=\"current-year\"></span> ZAK PRO · Built with passion"
        },
        ar: {
            // Navigation
            home: "الرئيسية",
            about: "حول",
            services: "الخدمات",
            tech_ai: "التقنية والذكاء الاصطناعي",
            portfolio: "معرض الأعمال",
            contact: "اتصل بنا",

            // Hero section
            tagline: "مصمم • مطور • مستكشف الذكاء الاصطناعي • مسافر – دمج الإبداع والتكنولوجيا والثقافة",

            // About section
            about_title: "حول",
            designer: "مصمم",
            designer_desc: "العلامات التجارية، الشعارات، الفن الرقمي، الإبداع البصري",
            traveler: "مسافر ومتطوع",
            traveler_desc: "تجارب ثقافية متعددة، العمل الجماعي، إدارة الفعاليات",
            athlete: "رياضي",
            athlete_desc: "انضباط، مرونة، صحة، عمل جماعي (كاليسثينيس، كرة الطائرة)",
            tech_explorer: "مستكشف التقنية",
            tech_explorer_desc: "تطوير الويب، البرمجة، أبحاث الذكاء الاصطناعي، سير العمل الإبداعية للذكاء الاصطناعي",
            timeline: "تطور رحلتي عبر مراحل متميزة: بدءًا من التصميم، والتوسع من خلال تجارب التطوع، وتقويتها بالانضباط الرياضي، والآن استكشاف آفاق التكنولوجيا والذكاء الاصطناعي. كل مرحلة بنيت على التي سبقتها، مما خلق مزيجًا فريدًا من المهارات الإبداعية والتقنية.",

            // Services section
            services_title: "الخدمات",
            design_branding: "التصميم والعلامة التجارية",
            design_branding_desc: "الشعارات، الهوية البصرية، الفن الرقمي - خلق تجارب بصرية مميزة تتواصل مع قصتك الفريدة وقيمك.",
            travel_hospitality: "السفر والضيافة",
            travel_hospitality_desc: "التوجيه الثقافي، دعم السياحة - بناء جسور بين الثقافات من خلال تجارب أصيلة وروابط ذات معنى.",
            web_dev: "تطوير الويب والنماذج الأولية",
            web_dev_desc: "مواقع ويب سريعة الاستجابة، نصوص برمجية آلية - بناء حلول رقمية وظيفية تحل المشاكل الحقيقية.",
            ai_creative_tech: "الذكاء الاصطناعي والتقنية الإبداعية",
            ai_creative_tech_desc: "دمج الذكاء الاصطناعي التوليدي، سير العمل الإبداعية، هندسة اللغويات/NLM وهندسة الأوامر - استكشاش تقاطع الإبداع والذكاء الاصطناعي.",

            // Tech & AI section
            tech_ai_title: "استكشاف المستقبل مع الذكاء الاصطناعي والبرمجة",
            tech_intro: "قادني شغفي بالتعلم الذاتي إلى استكشاف مجالات الذكاء الاصطناعي وتطوير الويب سريعة التطور. أنا مفتون بإمكانيات الذكاء الاصطناعي التوليدي في تحويل سير العمل الإبداعية وأبحث بنشاط عن كيفية دمج مبادئ التصميم التقليدي مع تقنيات الذكاء الاصطناعي المتطورة.",
            future_projects: "المشاريع المستقبلية والاستكشافات",
            ai_design_assistant: "مساعد التصميم بالذكاء الاصطناعي",
            ai_design_assistant_desc: "قريبًا - أداة تجمع بين الذكاء الاصطناعي التوليدي ومبادئ التصميم لخلق هويات بصرية فريدة.",
            cultural_exchange: "منصة التبادل الثقافي",
            cultural_exchange_desc: "قريبًا - تطبيق ويب يربط المسافرين بالتجارب المحلية من خلال توصيات الذكاء الاصطناعي.",
            creative_workflow: "أتمتة سير العمل الإبداعي",
            creative_workflow_desc: "قريبًا - نصوص برمجية وأدوات مخصصة لتبسيط عملية الإبداع للمصممين والفنانين.",

            // Portfolio section
            portfolio_title: "معرض الأعمال",
            brand_identity: "مشروع هوية بصرية",
            digital_art: "سلسلة الفن الرقمي",
            sports_branding: "العلامة التجارية الرياضية",
            travel_guide: "تصميم دليل السفر",
            logo_series: "سلسلة الشعارات",
            promotional_campaign: "الحملة الترويجية",

            // Contact section
            contact_title: "تواصل معنا",
            get_in_touch: "تواصل معنا",
            name: "الاسم",
            email: "البريد الإلكتروني",
            message: "الرسالة",
            send_message: "إرسال الرسالة",

            // Footer
            footer_text: "© <span id=\"current-year\"></span> زاك برو · بُني بحماس"
        },
        zh: {
            // Navigation
            home: "首页",
            about: "关于",
            services: "服务",
            tech_ai: "科技与人工智能",
            portfolio: "作品集",
            contact: "联系我们",

            // Hero section
            tagline: "设计师 • 开发者 • 人工智能探索者 • 旅行者 – 融合创意、技术和文化",

            // About section
            about_title: "关于",
            designer: "设计师",
            designer_desc: "品牌、标志、数字艺术、创意指导",
            traveler: "旅行者和志愿者",
            traveler_desc: "跨文化体验、团队合作、活动管理",
            athlete: "运动员",
            athlete_desc: "纪律、韧性、健康、团队合作（体操、排球）",
            tech_explorer: "科技探索者",
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
            ai_creative_tech_desc: "生成式人工智能集成、创意工作流程、LLM/提示工程 - 探索创造力和人工智能的交叉点。",

            // Tech & AI section
            tech_ai_title: "用人工智能和代码探索未来",
            tech_intro: "我对自学的热情导致我探索了人工智能和网页开发这些快速发展的领域。我对生成式人工智能改变创意工作流程的潜力感到着迷，并正在积极研究如何将传统设计原则与尖端人工智能技术融合。",
            future_projects: "未来项目与探索",
            ai_design_assistant: "人工智能设计助手",
            ai_design_assistant_desc: "即将推出 - 结合生成式人工智能和设计原则来创建独特品牌身份的工具。",
            cultural_exchange: "文化交流平台",
            cultural_exchange_desc: "即将推出 - 通过人工智能推荐将旅行者与当地体验联系起来的网络应用程序。",
            creative_workflow: "创意工作流程自动化",
            creative_workflow_desc: "即将推出 - 为设计师和艺术家简化创意流程的自定义脚本和工具。",

            // Portfolio section
            portfolio_title: "作品集",
            brand_identity: "品牌识别项目",
            digital_art: "数字艺术系列",
            sports_branding: "体育品牌",
            travel_guide: "旅行指南设计",
            logo_series: "标志系列",
            promotional_campaign: "促销活动",

            // Contact section
            contact_title: "联系我们",
            get_in_touch: "联系我们",
            name: "姓名",
            email: "电子邮件",
            message: "信息",
            send_message: "发送信息",

            // Footer
            footer_text: "© <span id=\"current-year\"></span> ZAK PRO · 用热情打造"
        }
    };

    // Get DOM elements
    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageOptions = document.querySelectorAll('.language-option');

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
        const taglineElement = document.querySelector('.tagline');
        if (taglineElement) taglineElement.textContent = translation.tagline;

        // Update about section
        const aboutTitleElement = document.querySelector('#about .section-title span');
        if (aboutTitleElement) aboutTitleElement.textContent = translation.about_title;

        // Update about content
        const aboutTitles = document.querySelectorAll('#about .pillar h3');
        const aboutContents = document.querySelectorAll('#about .pillar p');

        // Update about titles
        if (aboutTitles.length > 0) aboutTitles[0].textContent = translation.designer;
        if (aboutTitles.length > 1) aboutTitles[1].textContent = translation.traveler;
        if (aboutTitles.length > 2) aboutTitles[2].textContent = translation.athlete;
        if (aboutTitles.length > 3) aboutTitles[3].textContent = translation.tech_explorer;

        // Update about descriptions
        if (aboutContents.length > 0) aboutContents[0].textContent = translation.designer_desc;
        if (aboutContents.length > 1) aboutContents[1].textContent = translation.traveler_desc;
        if (aboutContents.length > 2) aboutContents[2].textContent = translation.athlete_desc;
        if (aboutContents.length > 3) aboutContents[3].textContent = translation.tech_explorer_desc;

        // Update timeline
        const timelineElement = document.querySelector('#about .timeline p');
        if (timelineElement) timelineElement.textContent = translation.timeline;

        // Update services section
        const servicesTitleElement = document.querySelector('#services .section-title span');
        if (servicesTitleElement) servicesTitleElement.textContent = translation.services_title;

        // Update services content
        const serviceTitles = document.querySelectorAll('#services .service-card h3');
        const serviceDescs = document.querySelectorAll('#services .service-card p');
        if (serviceTitles.length > 0) serviceTitles[0].textContent = translation.design_branding;
        if (serviceDescs.length > 0) serviceDescs[0].textContent = translation.design_branding_desc;
        if (serviceTitles.length > 1) serviceTitles[1].textContent = translation.travel_hospitality;
        if (serviceDescs.length > 1) serviceDescs[1].textContent = translation.travel_hospitality_desc;
        if (serviceTitles.length > 2) serviceTitles[2].textContent = translation.web_dev;
        if (serviceDescs.length > 2) serviceDescs[2].textContent = translation.web_dev_desc;
        if (serviceTitles.length > 3) serviceTitles[3].textContent = translation.ai_creative_tech;
        if (serviceDescs.length > 3) serviceDescs[3].textContent = translation.ai_creative_tech_desc;

        // Update tech & AI section
        const techAiTitleElement = document.querySelector('#tech-ai .section-title span');
        if (techAiTitleElement) techAiTitleElement.textContent = translation.tech_ai_title;

        // Update tech & AI content
        const techIntro = document.querySelector('#tech-ai .tech-intro p');
        if (techIntro) techIntro.textContent = translation.tech_intro;

        const futureProjectsTitle = document.querySelector('#tech-ai .tech-projects h3');
        if (futureProjectsTitle) futureProjectsTitle.textContent = translation.future_projects;

        // Update all project placeholders
        const projectPlaceholders = document.querySelectorAll('#tech-ai .project-placeholder');
        projectPlaceholders.forEach((placeholder, index) => {
            const titleElement = placeholder.querySelector('h4');
            const descElement = placeholder.querySelector('p');

            if (index === 0) {
                if (titleElement) titleElement.textContent = translation.ai_design_assistant;
                if (descElement) descElement.textContent = translation.ai_design_assistant_desc;
            } else if (index === 1) {
                if (titleElement) titleElement.textContent = translation.cultural_exchange;
                if (descElement) descElement.textContent = translation.cultural_exchange_desc;
            } else if (index === 2) {
                if (titleElement) titleElement.textContent = translation.creative_workflow;
                if (descElement) descElement.textContent = translation.creative_workflow_desc;
            }
        });

        // Update portfolio section
        const portfolioTitleElement = document.querySelector('#portfolio .section-title span');
        if (portfolioTitleElement) portfolioTitleElement.textContent = translation.portfolio_title;

        // Update portfolio items
        const portfolioTitles = document.querySelectorAll('#portfolio .portfolio-item h3');
        if (portfolioTitles.length > 0) portfolioTitles[0].textContent = translation.brand_identity;
        if (portfolioTitles.length > 1) portfolioTitles[1].textContent = translation.digital_art;
        if (portfolioTitles.length > 2) portfolioTitles[2].textContent = translation.sports_branding;
        if (portfolioTitles.length > 3) portfolioTitles[3].textContent = translation.travel_guide;
        if (portfolioTitles.length > 4) portfolioTitles[4].textContent = translation.logo_series;
        if (portfolioTitles.length > 5) portfolioTitles[5].textContent = translation.promotional_campaign;

        // Update contact section
        const contactTitleElement = document.querySelector('#contact .section-title span');
        if (contactTitleElement) contactTitleElement.textContent = translation.contact_title;

        // Update contact form
        const contactFormTitle = document.querySelector('#contact .contact-form h3');
        if (contactFormTitle) contactFormTitle.textContent = translation.get_in_touch;

        const formInputs = document.querySelectorAll('#contact .form-group input');
        if (formInputs.length > 0) formInputs[0].setAttribute('placeholder', translation.name);
        if (formInputs.length > 1) formInputs[1].setAttribute('placeholder', translation.email);

        const formTextarea = document.querySelector('#contact .form-group textarea');
        if (formTextarea) formTextarea.setAttribute('placeholder', translation.message);

        const submitButton = document.querySelector('#contact .submit-btn');
        if (submitButton) submitButton.textContent = translation.send_message;

        // Update footer (keeping ZAK PRO unchanged)
        const footerElement = document.querySelector('.footer p');
        if (footerElement) {
            const currentYear = new Date().getFullYear();
            footerElement.innerHTML = `© <span id="current-year">${currentYear}</span> ZAK PRO · ${translation.footer_text.split('·')[1]}`;
        }

        // Update document direction for RTL languages
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
            // Add RTL class to body for additional styling
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
});
