import { AnimatedSection } from './AnimatedSection';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { useI18n } from './i18n';

export function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-[#2563EB] mb-3 tracking-widest uppercase text-xs font-semibold">
            {t.contactLabel}
          </p>
          <h2
            className="text-[#0f172a] dark:text-white mb-6 tracking-tight font-bold"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.1,
            }}
          >
            {t.contactTitle}
          </h2>
          <p className="text-[#64748b] dark:text-[#94a3b8] max-w-xl mx-auto mb-16 text-lg leading-relaxed">
            {t.contactSubtitle}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:lisyargote1402@gmail.com"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#f8fafc] dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#334155] hover:border-[#2563EB]/30 transition-colors w-full sm:w-auto"
            >
              <Mail size={20} className="text-[#2563EB]" />
              <span className="text-[#0f172a] dark:text-white text-[0.95rem]">
                {t.contactEmail}
              </span>
            </a>
            <a
              href="https://linkedin.com/in/lisandra-argote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#f8fafc] dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#334155] hover:border-[#2563EB]/30 transition-colors w-full sm:w-auto"
            >
              <Linkedin size={20} className="text-[#2563EB]" />
              <span className="text-[#0f172a] dark:text-white text-[0.95rem]">
                {t.contactLinkedIn}
              </span>
            </a>
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#f8fafc] dark:bg-[#1e293b] border border-[#e2e8f0] dark:border-[#334155] w-full sm:w-auto">
              <MapPin size={20} className="text-[#2563EB]" />
              <span className="text-[#0f172a] dark:text-white text-[0.95rem]">
                {t.contactLocation}
              </span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="border-t border-[#e2e8f0] dark:border-[#334155] pt-10">
            <p className="text-[#94a3b8] text-sm">
              {t.footerText} &middot; Lisandra Argote &middot; 2026
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
