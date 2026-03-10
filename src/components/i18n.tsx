import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'es' | 'pt';

const translations = {
  es: {
    // Navbar
    navJourney: 'Trayectoria',
    navExperience: 'Experiencia',
    navSkills: 'Habilidades',
    navEducation: 'Educación',
    navContact: 'Contacto',

    // Hero
    heroSubtitle1: 'Especialista en Customer Success',
    heroSubtitle2:
      'Analista de Implementación · Experiencia del Cliente & Soluciones SaaS',
    heroLocation: 'Florianópolis, Brasil',
    heroDescription:
      'Profesional de Customer Success enfocada en ayudar a las empresas a maximizar el valor de las plataformas tecnológicas a través de onboarding, capacitación y soporte estratégico.',
    heroCta1: 'Ver Experiencia',
    heroCta2: 'Contacto',

    // Journey
    journeyLabel: 'Trayectoria Profesional',
    journeyTitle: 'Una historia de reinvención.',
    journeySubtitle:
      'De la investigación forense a la tecnología SaaS — una carrera impulsada por la curiosidad, la adaptabilidad y la pasión por resolver problemas complejos.',
    journey2009Title: 'Investigación Criminal',
    journey2009Desc:
      'Inició su carrera en investigación forense, trabajando en casos nacionales complejos y desarrollando fuertes habilidades analíticas y de resolución de problemas.',
    journey2018Title: 'Asesora Legal — Turismo',
    journey2018Desc:
      'Transición a la consultoría legal en el sector turístico, asesorando grandes operaciones hoteleras como Hotel Kempinski, Saratoga y Packard.',
    journey2024Title: 'Analista de Implementación — SaaS',
    journey2024Desc:
      'Ingresó al sector tecnológico como Analista de Implementación, guiando a los clientes en onboarding, capacitación y configuración de plataforma.',
    journey2026Title: 'Especialista en Customer Success',
    journey2026Desc:
      'Actualmente enfocada en retención de clientes, relaciones estratégicas de cuentas y ayudando a las empresas a maximizar el valor de las plataformas digitales.',

    // Experience
    expLabel: 'Experiencia',
    expTitle: 'Impacto y experiencia.',
    expSubtitle:
      'Construyendo relaciones significativas con los clientes e impulsando la adopción del producto en cada rol.',
    expCS: 'Customer Success',
    expCSPeriod: '2026 — Presente',
    expCSItems: [
      'Onboarding de clientes',
      'Soporte de adopción de plataforma',
      'Estrategias de retención de clientes',
      'Relación estratégica de cuentas',
    ],
    expIA: 'Analista de Implementación',
    expIAPeriod: '2024 — 2026',
    expIAItems: [
      'Onboarding de clientes',
      'Capacitación de usuarios',
      'Guía de implementación',
      'Configuración de plataforma del cliente',
    ],
    expLegal: 'Asesora Legal',
    expLegalPeriod: '2018 — 2022',
    expLegalItems: [
      'Asesoría legal para Hotel Kempinski',
      'Asesoría legal para Hotel Saratoga',
      'Asesoría legal para Hotel Packard',
    ],

    // Skills
    skillsLabel: 'Habilidades y Certificaciones',
    skillsTitle: 'Lo que aporto.',
    skillsSubtitle:
      'Un conjunto de habilidades versátil construido en diversas industrias y enriquecido con certificaciones especializadas.',
    skillCS: 'Customer Success',
    skillCRM: 'Gestión de CRM',
    skillOnboarding: 'Onboarding de Clientes',
    skillSaaS: 'Implementación SaaS',
    skillSupport: 'Soporte al Cliente',
    skillRetention: 'Retención de Clientes',
    skillComm: 'Comunicación Estratégica',
    skillProblem: 'Resolución de Problemas',
    certTitle: 'Certificaciones',
    cert1: 'Fundamentos de Servicio al Cliente',
    cert2: 'Fundamentos de CRM',
    cert3: 'Estrategias de Fidelización',
    cert4: 'Inteligencia Relacional',

    // Education
    eduLabel: 'Educación e Idiomas',
    eduTitle: 'Formación académica.',
    eduLaw: 'Licenciatura en Derecho',
    eduLawSchool: 'Universidad de La Habana',
    eduMaster: 'Máster en Investigación Criminal',
    eduMasterSchool: 'Estudios de posgrado especializados',
    langSpanish: 'Español',
    langSpanishLevel: 'Nativo',
    langPortuguese: 'Portugués',
    langPortugueseLevel: 'Profesional',

    // Contact
    contactLabel: 'Contacto',
    contactTitle: 'Conectemos.',
    contactSubtitle:
      'Abierta a oportunidades en Customer Success, Experiencia del Cliente e Implementación SaaS.',
    contactEmail: 'Email',
    contactLinkedIn: 'LinkedIn',
    contactLocation: 'Florianópolis, BR',
    footerText: 'Diseñado con cariño',
  },

  pt: {
    // Navbar
    navJourney: 'Trajetória',
    navExperience: 'Experiência',
    navSkills: 'Habilidades',
    navEducation: 'Educação',
    navContact: 'Contato',

    // Hero
    heroSubtitle1: 'Especialista em Customer Success',
    heroSubtitle2:
      'Analista de Implementação · Experiência do Cliente & Soluções SaaS',
    heroLocation: 'Florianópolis, Brasil',
    heroDescription:
      'Profissional de Customer Success focada em ajudar empresas a maximizar o valor das plataformas tecnológicas por meio de onboarding, treinamento e suporte estratégico.',
    heroCta1: 'Ver Experiência',
    heroCta2: 'Contato',

    // Journey
    journeyLabel: 'Trajetória Profissional',
    journeyTitle: 'Uma história de reinvenção.',
    journeySubtitle:
      'Da investigação forense à tecnologia SaaS — uma carreira impulsionada pela curiosidade, adaptabilidade e paixão por resolver problemas complexos.',
    journey2009Title: 'Investigação Criminal',
    journey2009Desc:
      'Iniciou sua carreira em investigação forense, trabalhando em casos nacionais complexos e desenvolvendo fortes habilidades analíticas e de resolução de problemas.',
    journey2018Title: 'Assessora Jurídica — Turismo',
    journey2018Desc:
      'Transição para consultoria jurídica no setor de turismo, assessorando grandes operações hoteleiras como Hotel Kempinski, Saratoga e Packard.',
    journey2024Title: 'Analista de Implementação — SaaS',
    journey2024Desc:
      'Ingressou no setor de tecnologia como Analista de Implementação, guiando clientes em onboarding, treinamento e configuração de plataforma.',
    journey2026Title: 'Especialista em Customer Success',
    journey2026Desc:
      'Atualmente focada em retenção de clientes, relacionamento estratégico de contas e ajudando empresas a maximizar o valor das plataformas digitais.',

    // Experience
    expLabel: 'Experiência',
    expTitle: 'Impacto e experiência.',
    expSubtitle:
      'Construindo relacionamentos significativos com clientes e impulsionando a adoção do produto em cada função.',
    expCS: 'Customer Success',
    expCSPeriod: '2026 — Presente',
    expCSItems: [
      'Onboarding de clientes',
      'Suporte à adoção da plataforma',
      'Estratégias de retenção de clientes',
      'Relacionamento estratégico de contas',
    ],
    expIA: 'Analista de Implementação',
    expIAPeriod: '2024 — 2026',
    expIAItems: [
      'Onboarding de clientes',
      'Treinamento de usuários',
      'Orientação de implementação',
      'Configuração da plataforma do cliente',
    ],
    expLegal: 'Assessora Jurídica',
    expLegalPeriod: '2018 — 2022',
    expLegalItems: [
      'Assessoria jurídica para Hotel Kempinski',
      'Assessoria jurídica para Hotel Saratoga',
      'Assessoria jurídica para Hotel Packard',
    ],

    // Skills
    skillsLabel: 'Habilidades e Certificações',
    skillsTitle: 'O que eu trago.',
    skillsSubtitle:
      'Um conjunto versátil de habilidades construído em diversas indústrias e enriquecido com certificações especializadas.',
    skillCS: 'Customer Success',
    skillCRM: 'Gestão de CRM',
    skillOnboarding: 'Onboarding de Clientes',
    skillSaaS: 'Implementação SaaS',
    skillSupport: 'Suporte ao Cliente',
    skillRetention: 'Retenção de Clientes',
    skillComm: 'Comunicação Estratégica',
    skillProblem: 'Resolução de Problemas',
    certTitle: 'Certificações',
    cert1: 'Fundamentos de Atendimento ao Cliente',
    cert2: 'Fundamentos de CRM',
    cert3: 'Estratégias de Fidelização',
    cert4: 'Inteligência Relacional',

    // Education
    eduLabel: 'Educação e Idiomas',
    eduTitle: 'Formação acadêmica.',
    eduLaw: 'Bacharelado em Direito',
    eduLawSchool: 'Universidade de Havana',
    eduMaster: 'Mestrado em Investigação Criminal',
    eduMasterSchool: 'Estudos de pós-graduação especializados',
    langSpanish: 'Espanhol',
    langSpanishLevel: 'Nativo',
    langPortuguese: 'Português',
    langPortugueseLevel: 'Profissional',

    // Contact
    contactLabel: 'Contato',
    contactTitle: 'Vamos nos conectar.',
    contactSubtitle:
      'Aberta a oportunidades em Customer Success, Experiência do Cliente e Implementação SaaS.',
    contactEmail: 'Email',
    contactLinkedIn: 'LinkedIn',
    contactLocation: 'Florianópolis, BR',
    footerText: 'Projetado com carinho',
  },
} as const;

type TranslationsRaw = (typeof translations)['es'];

export type Translations = {
  [K in keyof TranslationsRaw]: TranslationsRaw[K] extends readonly string[]
    ? readonly string[]
    : string;
};

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'es',
  setLang: () => {},
  t: translations.es as Translations,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');
  return (
    <I18nContext.Provider
      value={{ lang, setLang, t: translations[lang] as Translations }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
