import { AnimatedSection } from './AnimatedSection';
import { Briefcase, Scale, Monitor, HeartHandshake } from 'lucide-react';
import { useI18n } from './i18n';
import type { LucideIcon } from 'lucide-react';
import type { Translations } from './i18n';

interface TimelineItem {
  year: string;
  titleKey: keyof Translations;
  descKey: keyof Translations;
  icon: LucideIcon;
}

const timeline: TimelineItem[] = [
  {
    year: '2009',
    titleKey: 'journey2009Title',
    descKey: 'journey2009Desc',
    icon: Briefcase,
  },
  {
    year: '2018',
    titleKey: 'journey2018Title',
    descKey: 'journey2018Desc',
    icon: Scale,
  },
  {
    year: '2024',
    titleKey: 'journey2024Title',
    descKey: 'journey2024Desc',
    icon: Monitor,
  },
  {
    year: '2026',
    titleKey: 'journey2026Title',
    descKey: 'journey2026Desc',
    icon: HeartHandshake,
  },
];

export function JourneySection() {
  const { t } = useI18n();

  return (
    <section id="journey" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-[#2563EB] mb-3 tracking-widest uppercase text-xs font-semibold">
            {t.journeyLabel}
          </p>
          <h2
            className="text-[#0f172a] dark:text-white mb-6 tracking-tight font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.1,
            }}
          >
            {t.journeyTitle}
          </h2>
          <p className="text-[#64748b] dark:text-[#94a3b8] max-w-2xl mb-20 text-lg leading-relaxed">
            {t.journeySubtitle}
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB]/20 via-[#2563EB]/40 to-[#2563EB]/20 md:-translate-x-px" />

          {timeline.map((item, i) => {
            const Icon = item.icon;
            const isLeft = i % 2 === 0;
            return (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div
                  className={`relative flex items-start mb-16 last:mb-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-[#2563EB] rounded-full -translate-x-1.5 mt-2 z-10 ring-4 ring-white dark:ring-[#0f172a]" />

                  {/* Content */}
                  <div
                    className={`pl-14 md:pl-0 md:w-1/2 ${
                      isLeft
                        ? 'md:pr-16 md:text-right'
                        : 'md:pl-16 md:text-left'
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 mb-3 ${
                        isLeft ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 flex items-center justify-center">
                        <Icon size={18} className="text-[#2563EB]" />
                      </div>
                      <span className="text-[#2563EB] text-sm font-semibold">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-[#0f172a] dark:text-white mb-2 text-xl font-semibold">
                      {t[item.titleKey] as string}
                    </h3>
                    <p className="text-[#64748b] dark:text-[#94a3b8] text-[0.95rem] leading-relaxed">
                      {t[item.descKey] as string}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
