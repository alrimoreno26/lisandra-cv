import { AnimatedSection } from './AnimatedSection';
import { motion } from 'motion/react';
import { useI18n } from './i18n';
import { useMemo } from 'react';

export function ExperienceSection() {
  const { t } = useI18n();

  const experiences = useMemo(
    () => [
      {
        company: 'Auvo Tecnologia',
        role: t.expCS,
        period: t.expCSPeriod,
        items: t.expCSItems,
      },
      {
        company: 'Auvo Tecnologia',
        role: t.expIA,
        period: t.expIAPeriod,
        items: t.expIAItems,
      },
      {
        company: 'Gaviota Tourism Group',
        role: t.expLegal,
        period: t.expLegalPeriod,
        items: t.expLegalItems,
      },
    ],
    [t],
  );

  return (
    <section
      id="experience"
      className="py-32 px-6 bg-[#f8fafc] dark:bg-[#0c1222]"
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-[#2563EB] mb-3 tracking-widest uppercase text-xs font-semibold">
            {t.expLabel}
          </p>
          <h2
            className="text-[#0f172a] dark:text-white mb-6 tracking-tight font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.1,
            }}
          >
            {t.expTitle}
          </h2>
          <p className="text-[#64748b] dark:text-[#94a3b8] max-w-2xl mb-16 text-lg leading-relaxed">
            {t.expSubtitle}
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((exp, i) => (
            <AnimatedSection
              key={`${exp.company}-${exp.role}`}
              delay={i * 0.1}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-[#1e293b] rounded-2xl p-8 shadow-sm border border-[#e2e8f0] dark:border-[#334155] h-full"
              >
                <span className="text-[#2563EB] block mb-1 text-xs font-semibold">
                  {exp.period}
                </span>
                <h3 className="text-[#0f172a] dark:text-white mb-1 text-xl font-semibold">
                  {exp.role}
                </h3>
                <p className="text-[#64748b] mb-6 text-sm">{exp.company}</p>
                <ul className="space-y-3">
                  {exp.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[#475569] dark:text-[#94a3b8] text-sm leading-normal"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
