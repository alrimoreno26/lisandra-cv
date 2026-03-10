import { motion } from 'motion/react';
import { MapPin, ArrowDown } from 'lucide-react';
import { useI18n } from './i18n';

const PROFILE_IMG = '/profile_lisy.png';

export function HeroSection() {
  const { t } = useI18n();

  const scrollToJourney = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-[#0f172a] dark:to-[#0f172a]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10"
        >
          <img
            src={PROFILE_IMG}
            alt="Lisandra Argote"
            className="w-36 h-36 rounded-full mx-auto object-cover shadow-xl ring-4 ring-white dark:ring-[#1e293b]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#0f172a] dark:text-white mb-4 tracking-tight font-bold"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.1,
          }}
        >
          Lisandra Argote
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 space-y-1"
        >
          <p
            className="text-[#2563EB] font-medium"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
          >
            {t.heroSubtitle1}
          </p>
          <p
            className="text-[#64748b]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
          >
            {t.heroSubtitle2}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-[#64748b] mb-10 text-[0.95rem]"
        >
          <MapPin size={16} />
          <span>{t.heroLocation}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto text-[#64748b] dark:text-[#94a3b8] mb-12"
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            lineHeight: 1.7,
          }}
        >
          {t.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToJourney}
            className="px-8 py-3.5 bg-[#0f172a] dark:bg-white text-white dark:text-[#0f172a] rounded-full hover:bg-[#1e293b] dark:hover:bg-gray-100 transition-all cursor-pointer text-[0.95rem] font-medium"
          >
            {t.heroCta1}
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-3.5 border border-[#e2e8f0] dark:border-[#334155] text-[#0f172a] dark:text-white rounded-full hover:bg-gray-50 dark:hover:bg-white/5 transition-all cursor-pointer text-[0.95rem] font-medium"
          >
            {t.heroCta2}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={20} className="text-[#cbd5e1]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
