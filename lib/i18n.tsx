"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Locale = "en" | "ru" | "ko"

const translations = {
  en: {
    nav: {
      services: "Services",
      team: "Team",
      technologies: "Technologies",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      pill: "MOBILE & WEB & AI",
      title1: "Build your",
      title2: "digital",
      title3: "future",
      description: "Mobile apps, web platforms, and AI solutions with cutting-edge technology and exceptional design",
      cta: "[Get Started]",
    },
    services: {
      pill: "SERVICES",
      title1: "What we",
      title2: "deliver",
      items: [
        {
          title: "Mobile Development",
          description: "Native iOS, Android, and cross-platform Flutter apps with exceptional performance",
        },
        {
          title: "Web Development",
          description: "Modern web applications with React, Next.js, and scalable cloud architecture",
        },
        {
          title: "AI & ML Solutions",
          description: "Custom AI models, chatbots, computer vision, and intelligent automation systems",
        },
        {
          title: "UI/UX Design",
          description: "User-centered design creating intuitive and engaging digital experiences",
        },
        {
          title: "Backend & API",
          description: "Scalable APIs, microservices, and cloud infrastructure to power your products",
        },
        {
          title: "Consulting",
          description: "Technical strategy, architecture review, and digital transformation guidance",
        },
      ],
    },
    team: {
      pill: "OUR TEAM",
      title1: "Meet the",
      title2: "experts",
      members: [
        {
          name: "Lee Sergey",
          role: "CEO / Lead Developer",
          description: "Full-stack developer with 6+ years in mobile and web. Expert in Swift, React, and building scalable digital products.",
        },
        {
          name: "Lee Joonnyong",
          role: "CTO / AI Lead",
          description: "Technology leader with 10+ years in AI/ML, LLMs, computer vision, and system architecture. PhD in Data Science.",
        },
        {
          name: "Diana Abrin",
          role: "UI/UX Designer",
          description: "Creative designer for mobile and web interfaces. Specializes in intuitive user experiences across all platforms.",
        },
        {
          name: "Matthew Webster",
          role: "Full-Stack Developer",
          description: "Expert in React, Next.js, Flutter, and cloud architecture. 5+ years building web and mobile applications.",
        },
        {
          name: "Jenny Kim",
          role: "Project Manager",
          description: "Experienced PM ensuring smooth delivery of complex digital projects. Expert in Agile and cross-functional teams.",
        },
        {
          name: "Anton Emelyanov",
          role: "Backend & ML Engineer",
          description: "Backend and ML specialist. Expert in Python, Node.js, AWS, and deploying AI models to production.",
        },
      ],
    },
    technologies: {
      pill: "TECHNOLOGIES",
      title1: "Our",
      title2: "stack",
    },
    process: {
      pill: "PROCESS",
      title1: "How we",
      title2: "work",
      steps: [
        { title: "Discovery", description: "Understanding your vision, goals, and requirements" },
        { title: "Design", description: "Creating intuitive interfaces and user experiences" },
        { title: "Development", description: "Building robust and scalable applications" },
        { title: "Testing", description: "Ensuring quality through comprehensive testing" },
        { title: "Launch", description: "Deploying to app stores with optimization" },
        { title: "Support", description: "Ongoing maintenance and feature updates" },
      ],
    },
    portfolio: {
      pill: "PORTFOLIO",
      title1: "Our",
      title2: "work",
      items: [
        {
          title: "AI-Powered Analytics Platform",
          description: "Enterprise web platform with ML-driven insights, real-time dashboards, and predictive analytics for business intelligence.",
          tag: "AI/Web",
        },
        {
          title: "Mobile Banking Suite",
          description: "Native iOS and Android banking apps with biometric auth, real-time transactions, and AI-powered fraud detection.",
          tag: "Mobile",
        },
        {
          title: "E-Commerce Ecosystem",
          description: "Full-stack solution including web store, mobile apps, admin panel, and AI recommendation engine.",
          tag: "Full-Stack",
        },
      ],
    },
    testimonials: {
      pill: "TESTIMONIALS",
      title1: "What clients",
      title2: "say",
      items: [
        {
          quote: "AlienMinds delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
          author: "Sarah Johnson",
          role: "CEO",
        },
        {
          quote: "Working with AlienMinds was a great experience. They understood our vision and delivered a perfect solution on time and within budget.",
          author: "Michael Chen",
          role: "CTO",
        },
        {
          quote: "The team at AlienMinds is highly professional and skilled. They transformed our business processes with their innovative digital solutions.",
          author: "Anna Rodriguez",
          role: "Founder",
        },
      ],
    },
    stats: {
      items: [
        { value: "50+", label: "Projects Completed" },
        { value: "30+", label: "Happy Clients" },
        { value: "5+", label: "Years Experience" },
        { value: "24/7", label: "Support" },
      ],
    },
    contact: {
      pill: "CONTACT",
      title1: "Ready to",
      title2: "start",
      description: "Let's create something amazing together!",
      button: "[Contact Us]",
    },
    footer: {
      copyright: "AlienMinds",
    },
  },
  ru: {
    nav: {
      services: "Услуги",
      team: "Команда",
      technologies: "Технологии",
      portfolio: "Портфолио",
      contact: "Контакт",
    },
    hero: {
      pill: "МОБАЙЛ & ВЕБ & ИИ",
      title1: "Создайте своё",
      title2: "цифровое",
      title3: "будущее",
      description: "Мобильные приложения, веб-платформы и AI-решения с передовыми технологиями и исключительным дизайном",
      cta: "[Начать]",
    },
    services: {
      pill: "УСЛУГИ",
      title1: "Что мы",
      title2: "делаем",
      items: [
        {
          title: "Мобильная разработка",
          description: "Нативные iOS, Android и кроссплатформенные Flutter приложения с высокой производительностью",
        },
        {
          title: "Веб-разработка",
          description: "Современные веб-приложения на React, Next.js и масштабируемой облачной архитектуре",
        },
        {
          title: "AI & ML решения",
          description: "Кастомные AI-модели, чат-боты, компьютерное зрение и системы интеллектуальной автоматизации",
        },
        {
          title: "UI/UX Дизайн",
          description: "Пользовательский дизайн для создания интуитивного цифрового опыта",
        },
        {
          title: "Backend & API",
          description: "Масштабируемые API, микросервисы и облачная инфраструктура для ваших продуктов",
        },
        {
          title: "Консалтинг",
          description: "Техническая стратегия, ревью архитектуры и консультации по цифровой трансформации",
        },
      ],
    },
    team: {
      pill: "КОМАНДА",
      title1: "Наши",
      title2: "эксперты",
      members: [
        {
          name: "Ли Сергей",
          role: "CEO / Ведущий разработчик",
          description: "Full-stack разработчик с 6+ годами опыта в мобильной и веб-разработке. Эксперт в Swift, React и создании масштабируемых продуктов.",
        },
        {
          name: "Ли Джунёнг",
          role: "CTO / AI Lead",
          description: "Технический лидер с 10+ годами опыта в AI/ML, LLM, компьютерном зрении и системной архитектуре. PhD в Data Science.",
        },
        {
          name: "Диана Абрин",
          role: "UI/UX Дизайнер",
          description: "Креативный дизайнер мобильных и веб-интерфейсов. Специализируется на интуитивном UX для всех платформ.",
        },
        {
          name: "Мэттью Вебстер",
          role: "Full-Stack разработчик",
          description: "Эксперт в React, Next.js, Flutter и облачной архитектуре. 5+ лет создания веб и мобильных приложений.",
        },
        {
          name: "Дженни Ким",
          role: "Проект-менеджер",
          description: "Опытный PM, обеспечивающий успешную реализацию сложных цифровых проектов. Эксперт в Agile.",
        },
        {
          name: "Антон Емельянов",
          role: "Backend & ML инженер",
          description: "Специалист по бэкенду и ML. Эксперт в Python, Node.js, AWS и внедрении AI-моделей в продакшн.",
        },
      ],
    },
    technologies: {
      pill: "ТЕХНОЛОГИИ",
      title1: "Наш",
      title2: "стек",
    },
    process: {
      pill: "ПРОЦЕСС",
      title1: "Как мы",
      title2: "работаем",
      steps: [
        { title: "Анализ", description: "Понимание вашего видения, целей и требований" },
        { title: "Дизайн", description: "Создание интуитивных интерфейсов и UX" },
        { title: "Разработка", description: "Создание надёжных и масштабируемых приложений" },
        { title: "Тестирование", description: "Обеспечение качества через комплексное тестирование" },
        { title: "Запуск", description: "Публикация в магазинах приложений с оптимизацией" },
        { title: "Поддержка", description: "Постоянное обслуживание и обновление функций" },
      ],
    },
    portfolio: {
      pill: "ПОРТФОЛИО",
      title1: "Наши",
      title2: "работы",
      items: [
        {
          title: "AI-аналитическая платформа",
          description: "Корпоративная веб-платформа с ML-аналитикой, дашбордами в реальном времени и предиктивной аналитикой для бизнеса.",
          tag: "AI/Web",
        },
        {
          title: "Мобильный банкинг",
          description: "Нативные iOS и Android банковские приложения с биометрией, транзакциями в реальном времени и AI-защитой от мошенничества.",
          tag: "Mobile",
        },
        {
          title: "E-Commerce экосистема",
          description: "Полнофункциональное решение: веб-магазин, мобильные приложения, админ-панель и AI-рекомендации.",
          tag: "Full-Stack",
        },
      ],
    },
    testimonials: {
      pill: "ОТЗЫВЫ",
      title1: "Что говорят",
      title2: "клиенты",
      items: [
        {
          quote: "AlienMinds создали исключительное мобильное приложение, превзошедшее наши ожидания. Их внимание к деталям и техническая экспертиза впечатляют.",
          author: "Сара Джонсон",
          role: "CEO",
        },
        {
          quote: "Работа с AlienMinds была отличным опытом. Они поняли наше видение и предоставили идеальное решение вовремя и в рамках бюджета.",
          author: "Майкл Чен",
          role: "CTO",
        },
        {
          quote: "Команда AlienMinds высокопрофессиональна и квалифицирована. Они трансформировали наши бизнес-процессы инновационными цифровыми решениями.",
          author: "Анна Родригес",
          role: "Основатель",
        },
      ],
    },
    stats: {
      items: [
        { value: "50+", label: "Завершённых проектов" },
        { value: "30+", label: "Довольных клиентов" },
        { value: "5+", label: "Лет опыта" },
        { value: "24/7", label: "Поддержка" },
      ],
    },
    contact: {
      pill: "КОНТАКТ",
      title1: "Готовы",
      title2: "начать",
      description: "Давайте создадим что-то удивительное вместе!",
      button: "[Связаться]",
    },
    footer: {
      copyright: "AlienMinds",
    },
  },
  ko: {
    nav: {
      services: "서비스",
      team: "팀",
      technologies: "기술",
      portfolio: "포트폴리오",
      contact: "연락처",
    },
    hero: {
      pill: "모바일 & 웹 & AI",
      title1: "당신의",
      title2: "디지털",
      title3: "미래를 만드세요",
      description: "최첨단 기술과 탁월한 디자인으로 모바일 앱, 웹 플랫폼, AI 솔루션 개발",
      cta: "[시작하기]",
    },
    services: {
      pill: "서비스",
      title1: "우리가",
      title2: "제공하는 것",
      items: [
        {
          title: "모바일 개발",
          description: "네이티브 iOS, Android 및 크로스 플랫폼 Flutter 앱을 뛰어난 성능으로 개발",
        },
        {
          title: "웹 개발",
          description: "React, Next.js 및 확장 가능한 클라우드 아키텍처를 사용한 현대적인 웹 애플리케이션",
        },
        {
          title: "AI & ML 솔루션",
          description: "맞춤형 AI 모델, 챗봇, 컴퓨터 비전 및 지능형 자동화 시스템",
        },
        {
          title: "UI/UX 디자인",
          description: "직관적이고 매력적인 디지털 경험을 만드는 사용자 중심 디자인",
        },
        {
          title: "백엔드 & API",
          description: "제품을 지원하는 확장 가능한 API, 마이크로서비스 및 클라우드 인프라",
        },
        {
          title: "컨설팅",
          description: "기술 전략, 아키텍처 리뷰 및 디지털 트랜스포메이션 가이드",
        },
      ],
    },
    team: {
      pill: "팀 소개",
      title1: "전문가를",
      title2: "만나보세요",
      members: [
        {
          name: "이세르게이",
          role: "CEO / 리드 개발자",
          description: "모바일 및 웹 개발 6년 이상 경력의 풀스택 개발자. Swift, React 및 확장 가능한 디지털 제품 전문가.",
        },
        {
          name: "이준녕",
          role: "CTO / AI 리드",
          description: "AI/ML, LLM, 컴퓨터 비전 및 시스템 아키텍처 10년 이상 경력의 기술 리더. 데이터 사이언스 박사.",
        },
        {
          name: "다이아나 아브린",
          role: "UI/UX 디자이너",
          description: "모바일 및 웹 인터페이스를 위한 크리에이티브 디자이너. 모든 플랫폼의 직관적인 UX 전문.",
        },
        {
          name: "매튜 웹스터",
          role: "풀스택 개발자",
          description: "React, Next.js, Flutter 및 클라우드 아키텍처 전문가. 5년 이상의 웹 및 모바일 앱 개발 경험.",
        },
        {
          name: "제니 김",
          role: "프로젝트 매니저",
          description: "복잡한 디지털 프로젝트의 원활한 전달을 보장하는 경험 많은 PM. Agile 및 크로스펑셔널 팀 전문가.",
        },
        {
          name: "안톤 에멜리아노프",
          role: "백엔드 & ML 엔지니어",
          description: "백엔드 및 ML 전문가. Python, Node.js, AWS 및 프로덕션 AI 모델 배포 전문가.",
        },
      ],
    },
    technologies: {
      pill: "기술",
      title1: "우리의",
      title2: "기술 스택",
    },
    process: {
      pill: "프로세스",
      title1: "우리의",
      title2: "작업 방식",
      steps: [
        { title: "발견", description: "비전, 목표 및 요구 사항 이해" },
        { title: "디자인", description: "직관적인 인터페이스와 사용자 경험 창출" },
        { title: "개발", description: "견고하고 확장 가능한 애플리케이션 구축" },
        { title: "테스트", description: "포괄적인 테스트를 통한 품질 보증" },
        { title: "출시", description: "최적화와 함께 앱 스토어에 배포" },
        { title: "지원", description: "지속적인 유지보수 및 기능 업데이트" },
      ],
    },
    portfolio: {
      pill: "포트폴리오",
      title1: "우리의",
      title2: "작품",
      items: [
        {
          title: "AI 분석 플랫폼",
          description: "ML 기반 인사이트, 실시간 대시보드, 비즈니스 인텔리전스를 위한 예측 분석 기능을 갖춘 기업용 웹 플랫폼.",
          tag: "AI/Web",
        },
        {
          title: "모바일 뱅킹 스위트",
          description: "생체 인증, 실시간 거래, AI 기반 사기 탐지 기능을 갖춘 네이티브 iOS 및 Android 뱅킹 앱.",
          tag: "Mobile",
        },
        {
          title: "이커머스 생태계",
          description: "웹 스토어, 모바일 앱, 관리자 패널, AI 추천 엔진을 포함한 풀스택 솔루션.",
          tag: "Full-Stack",
        },
      ],
    },
    testimonials: {
      pill: "고객 후기",
      title1: "고객",
      title2: "후기",
      items: [
        {
          quote: "AlienMinds는 기대를 뛰어넘는 뛰어난 모바일 앱을 제공했습니다. 그들의 세심한 배려와 기술적 전문성이 돋보입니다.",
          author: "사라 존슨",
          role: "CEO",
        },
        {
          quote: "AlienMinds와의 협업은 훌륭한 경험이었습니다. 그들은 우리의 비전을 이해하고 예산 내에서 정시에 완벽한 솔루션을 제공했습니다.",
          author: "마이클 첸",
          role: "CTO",
        },
        {
          quote: "AlienMinds 팀은 매우 전문적이고 숙련되어 있습니다. 그들은 혁신적인 디지털 솔루션으로 우리의 비즈니스 프로세스를 변화시켰습니다.",
          author: "안나 로드리게스",
          role: "창업자",
        },
      ],
    },
    stats: {
      items: [
        { value: "50+", label: "완료된 프로젝트" },
        { value: "30+", label: "만족한 고객" },
        { value: "5+", label: "경력 년수" },
        { value: "24/7", label: "지원" },
      ],
    },
    contact: {
      pill: "연락처",
      title1: "시작할",
      title2: "준비 되셨나요",
      description: "함께 놀라운 것을 만들어 봐요!",
      button: "[연락하기]",
    },
    footer: {
      copyright: "AlienMinds",
    },
  },
}

type Translations = typeof translations.en

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const value = {
    locale,
    setLocale,
    t: translations[locale],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return context
}

export const localeNames: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  ko: "KO",
}
