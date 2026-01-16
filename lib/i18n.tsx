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
      pill: "MOBILE & WEB",
      title1: "Build your",
      title2: "digital",
      title3: "future",
      description: "Native iOS, Android & Flutter development with cutting-edge technology and exceptional design",
      cta: "[Get Started]",
    },
    services: {
      pill: "SERVICES",
      title1: "What we",
      title2: "deliver",
      items: [
        {
          title: "iOS Development",
          description: "Native Swift and SwiftUI applications with seamless Apple ecosystem integration",
        },
        {
          title: "Android Development",
          description: "Kotlin-based applications with Material Design and Google services integration",
        },
        {
          title: "Flutter Development",
          description: "Cross-platform solutions with native performance and beautiful UI",
        },
        {
          title: "UI/UX Design",
          description: "User-centered design creating intuitive and engaging mobile experiences",
        },
        {
          title: "Backend Development",
          description: "Scalable APIs and cloud infrastructure to power your applications",
        },
        {
          title: "Maintenance & Support",
          description: "Ongoing updates, bug fixes, and performance optimization",
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
          role: "CEO / Lead iOS Developer",
          description: "Senior iOS developer with 6+ years of experience in Swift and SwiftUI. Expert in Core Data, CloudKit, and App Store optimization.",
        },
        {
          name: "Lee Joonnyong",
          role: "CTO / Data Scientist",
          description: "Technology leader and data science expert with 10+ years of experience in AI/ML, system architecture, and team management.",
        },
        {
          name: "Diana Abrin",
          role: "UI/UX Designer",
          description: "Creative designer focused on mobile interfaces and user experience. Specializes in creating intuitive and beautiful app designs.",
        },
        {
          name: "Matthew Webster",
          role: "Flutter Developer",
          description: "Cross-platform development expert with deep knowledge of Flutter, Dart, and Firebase integration. 5+ years of experience.",
        },
        {
          name: "Jenny Kim",
          role: "Project Manager",
          description: "Experienced project manager ensuring smooth delivery of complex mobile projects. Expert in Agile methodologies.",
        },
        {
          name: "Anton Emelyanov",
          role: "Backend Developer",
          description: "Backend specialist focusing on APIs, cloud services, and database optimization. Expert in Node.js, Python, and AWS infrastructure.",
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
          title: "iOS Banking App",
          description: "Native iOS banking application built with Swift and SwiftUI, featuring biometric authentication and real-time transactions.",
          tag: "iOS",
        },
        {
          title: "Android E-Commerce Platform",
          description: "High-performance Android shopping app using Kotlin and Jetpack Compose with advanced filtering and payment integration.",
          tag: "Android",
        },
        {
          title: "Flutter Social Network",
          description: "Cross-platform social media app built with Flutter, featuring real-time messaging, video calls, and content sharing.",
          tag: "Flutter",
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
      pill: "МОБАЙЛ & ВЕБ",
      title1: "Создайте своё",
      title2: "цифровое",
      title3: "будущее",
      description: "Нативная разработка iOS, Android и Flutter с передовыми технологиями и исключительным дизайном",
      cta: "[Начать]",
    },
    services: {
      pill: "УСЛУГИ",
      title1: "Что мы",
      title2: "делаем",
      items: [
        {
          title: "iOS Разработка",
          description: "Нативные приложения на Swift и SwiftUI с интеграцией в экосистему Apple",
        },
        {
          title: "Android Разработка",
          description: "Приложения на Kotlin с Material Design и интеграцией сервисов Google",
        },
        {
          title: "Flutter Разработка",
          description: "Кроссплатформенные решения с нативной производительностью и красивым UI",
        },
        {
          title: "UI/UX Дизайн",
          description: "Пользовательский дизайн для создания интуитивного мобильного опыта",
        },
        {
          title: "Backend Разработка",
          description: "Масштабируемые API и облачная инфраструктура для ваших приложений",
        },
        {
          title: "Поддержка",
          description: "Регулярные обновления, исправление ошибок и оптимизация производительности",
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
          role: "CEO / Ведущий iOS разработчик",
          description: "Старший iOS разработчик с 6+ годами опыта в Swift и SwiftUI. Эксперт в Core Data, CloudKit и оптимизации App Store.",
        },
        {
          name: "Ли Джунёнг",
          role: "CTO / Data Scientist",
          description: "Технический лидер и эксперт по данным с 10+ годами опыта в AI/ML, системной архитектуре и управлении командой.",
        },
        {
          name: "Диана Абрин",
          role: "UI/UX Дизайнер",
          description: "Креативный дизайнер мобильных интерфейсов и пользовательского опыта. Специализируется на создании интуитивных дизайнов.",
        },
        {
          name: "Мэттью Вебстер",
          role: "Flutter Разработчик",
          description: "Эксперт кроссплатформенной разработки с глубоким знанием Flutter, Dart и Firebase. 5+ лет опыта.",
        },
        {
          name: "Дженни Ким",
          role: "Проект-менеджер",
          description: "Опытный менеджер проектов, обеспечивающий успешную реализацию сложных мобильных проектов. Эксперт в Agile.",
        },
        {
          name: "Антон Емельянов",
          role: "Backend Разработчик",
          description: "Специалист по бэкенду, API, облачным сервисам и оптимизации баз данных. Эксперт в Node.js, Python и AWS.",
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
          title: "iOS Банковское приложение",
          description: "Нативное iOS банковское приложение на Swift и SwiftUI с биометрической аутентификацией и транзакциями в реальном времени.",
          tag: "iOS",
        },
        {
          title: "Android Интернет-магазин",
          description: "Высокопроизводительное Android приложение на Kotlin и Jetpack Compose с продвинутой фильтрацией и интеграцией платежей.",
          tag: "Android",
        },
        {
          title: "Flutter Социальная сеть",
          description: "Кроссплатформенное приложение социальной сети на Flutter с мессенджером, видеозвонками и обменом контентом.",
          tag: "Flutter",
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
      pill: "모바일 & 웹",
      title1: "당신의",
      title2: "디지털",
      title3: "미래를 만드세요",
      description: "최첨단 기술과 탁월한 디자인으로 네이티브 iOS, Android 및 Flutter 개발",
      cta: "[시작하기]",
    },
    services: {
      pill: "서비스",
      title1: "우리가",
      title2: "제공하는 것",
      items: [
        {
          title: "iOS 개발",
          description: "Apple 생태계와 원활하게 통합되는 네이티브 Swift 및 SwiftUI 애플리케이션",
        },
        {
          title: "Android 개발",
          description: "Material Design과 Google 서비스가 통합된 Kotlin 기반 애플리케이션",
        },
        {
          title: "Flutter 개발",
          description: "네이티브 성능과 아름다운 UI를 갖춘 크로스 플랫폼 솔루션",
        },
        {
          title: "UI/UX 디자인",
          description: "직관적이고 매력적인 모바일 경험을 만드는 사용자 중심 디자인",
        },
        {
          title: "백엔드 개발",
          description: "애플리케이션을 지원하는 확장 가능한 API 및 클라우드 인프라",
        },
        {
          title: "유지보수 & 지원",
          description: "지속적인 업데이트, 버그 수정 및 성능 최적화",
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
          role: "CEO / 수석 iOS 개발자",
          description: "Swift와 SwiftUI에서 6년 이상의 경험을 가진 시니어 iOS 개발자. Core Data, CloudKit 및 App Store 최적화 전문가.",
        },
        {
          name: "이준녕",
          role: "CTO / 데이터 사이언티스트",
          description: "AI/ML, 시스템 아키텍처 및 팀 관리에서 10년 이상의 경험을 가진 기술 리더이자 데이터 과학 전문가.",
        },
        {
          name: "다이아나 아브린",
          role: "UI/UX 디자이너",
          description: "모바일 인터페이스와 사용자 경험에 집중하는 크리에이티브 디자이너. 직관적이고 아름다운 앱 디자인 전문.",
        },
        {
          name: "매튜 웹스터",
          role: "Flutter 개발자",
          description: "Flutter, Dart 및 Firebase 통합에 대한 깊은 지식을 가진 크로스 플랫폼 개발 전문가. 5년 이상의 경험.",
        },
        {
          name: "제니 김",
          role: "프로젝트 매니저",
          description: "복잡한 모바일 프로젝트의 원활한 전달을 보장하는 경험 많은 프로젝트 매니저. Agile 방법론 전문가.",
        },
        {
          name: "안톤 에멜리아노프",
          role: "백엔드 개발자",
          description: "API, 클라우드 서비스 및 데이터베이스 최적화에 집중하는 백엔드 전문가. Node.js, Python 및 AWS 인프라 전문가.",
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
          title: "iOS 뱅킹 앱",
          description: "생체 인증과 실시간 거래 기능을 갖춘 Swift와 SwiftUI로 구축된 네이티브 iOS 뱅킹 애플리케이션.",
          tag: "iOS",
        },
        {
          title: "Android 이커머스 플랫폼",
          description: "고급 필터링과 결제 통합 기능을 갖춘 Kotlin과 Jetpack Compose 기반의 고성능 Android 쇼핑 앱.",
          tag: "Android",
        },
        {
          title: "Flutter 소셜 네트워크",
          description: "실시간 메시징, 영상 통화, 콘텐츠 공유 기능을 갖춘 Flutter로 구축된 크로스 플랫폼 소셜 미디어 앱.",
          tag: "Flutter",
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
  ko: "한국어",
}
