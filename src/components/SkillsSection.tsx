import { AnimatedSection } from './AnimatedSection';
import { motion } from 'motion/react';
import {
  HeartHandshake,
  BarChart3,
  UserPlus,
  Settings,
  Headphones,
  Shield,
  MessageCircle,
  Lightbulb,
} from 'lucide-react';
import { useI18n } from './i18n';
import { useMemo } from 'react';
import type { LucideIcon } from 'lucide-react';
import type { Translations } from './i18n';

interface SkillDef {
  labelKey: keyof Translations;
  icon: LucideIcon;
}

const skillDefs: SkillDef[] = [
  { labelKey: 'skillCS', icon: HeartHandshake },
  { labelKey: 'skillCRM', icon: BarChart3 },
  { labelKey: 'skillOnboarding', icon: UserPlus },
  { labelKey: 'skillSaaS', icon: Settings },
  { labelKey: 'skillSupport', icon: Headphones },
  { labelKey: 'skillRetention', icon: Shield },
  { labelKey: 'skillComm', icon: MessageCircle },
  { labelKey: 'skillProblem', icon: Lightbulb },
];

const certKeys: (keyof Translations)[] = ['cert1', 'cert2', 'cert3', 'cert4'];

export function SkillsSection() {
  const { t } = useI18n();

  const skills = useMemo(
    () => skillDefs.map((s) => ({ label: t[s.labelKey] as string, icon: s.icon })),
    [t],
  );

  const certifications = useMemo(
    () => certKeys.map((k) => t[k] as string),
    [t],
  );

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-[#2563EB] mb-3 tracking-widest uppercase text-xs font-semibold">
            {t.skillsLabel}
          </p>
          <h2
            className="text-[#0f172a] dark:text-white mb-6 tracking-tight font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.1,
            }}
          >
            {t.skillsTitle}
          </h2>
          <p className="text-[#64748b] dark:text-[#94a3b8] max-w-2xl mb-16 text-lg leading-relaxed">
            {t.skillsSubtitle}
          </p>
        </AnimatedSection>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <AnimatedSection key={skill.label} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#f8fafc] dark:bg-[#1e293b] border border-transparent hover:border-[#2563EB]/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center">
                    <Icon size={22} className="text-[#2563EB]" />
                  </div>
                  <span className="text-[#0f172a] dark:text-white text-center text-sm font-medium">
                    {skill.label}
                  </span>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Certifications */}
        <AnimatedSection>
          <h3 className="text-[#0f172a] dark:text-white mb-8 text-center text-2xl font-semibold">
            {t.certTitle}
          </h3>
        </AnimatedSection>
        <div className="flex flex-wrap justify-center gap-3">
          {certifications.map((cert, i) => (
            <AnimatedSection key={cert} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-5 py-3 rounded-full bg-[#2563EB]/5 dark:bg-[#2563EB]/10 border border-[#2563EB]/15 text-[#2563EB] text-sm font-medium"
              >
                {cert}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
