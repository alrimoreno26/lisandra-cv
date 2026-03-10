import { AnimatedSection } from './AnimatedSection';
import { GraduationCap, Globe } from 'lucide-react';
import { useI18n } from './i18n';
import { useMemo } from 'react';

export function EducationSection() {
  const { t } = useI18n();

  const languages = useMemo(
    () => [
      { lang: t.langSpanish, level: t.langSpanishLevel, pct: 100 },
      { lang: t.langPortuguese, level: t.langPortugueseLevel, pct: 85 },
    ],
    [t],
  );

  return (
    <section
      id="education"
      className="py-32 px-6 bg-[#f8fafc] dark:bg-[#0c1222]"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-[#2563EB] mb-3 tracking-widest uppercase text-xs font-semibold">
            {t.eduLabel}
          </p>
          <h2
            className="text-[#0f172a] dark:text-white mb-16 tracking-tight font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.1,
            }}
          >
            {t.eduTitle}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={22} className="text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-[#0f172a] dark:text-white text-lg font-semibold">
                    {t.eduLaw}
                  </h3>
                  <p className="text-[#64748b] mt-1 text-[0.95rem]">
                    {t.eduLawSchool}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={22} className="text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-[#0f172a] dark:text-white text-lg font-semibold">
                    {t.eduMaster}
                  </h3>
                  <p className="text-[#64748b] mt-1 text-[0.95rem]">
                    {t.eduMasterSchool}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Languages */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              {languages.map((l) => (
                <div key={l.lang} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                    <Globe size={22} className="text-[#2563EB]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-[#0f172a] dark:text-white text-lg font-semibold">
                        {l.lang}
                      </h3>
                      <span className="text-[#64748b] text-sm">{l.level}</span>
                    </div>
                    <div
                      className="h-1.5 bg-[#e2e8f0] dark:bg-[#334155] rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={l.pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${l.lang}: ${l.level}`}
                    >
                      <div
                        className="h-full bg-[#2563EB] rounded-full transition-all duration-1000"
                        style={{ width: `${l.pct}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
