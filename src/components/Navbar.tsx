import { useState, useEffect, useCallback } from 'react';
import { Moon, Sun, Menu, X, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useI18n } from './i18n';
import type { Lang } from './i18n';

const sectionHrefs = [
  '#journey',
  '#experience',
  '#skills',
  '#education',
  '#contact',
];

const langLabel: Record<Lang, string> = { es: 'ES', pt: 'PT' };
const langFull: Record<Lang, string> = { es: 'Español', pt: 'Português' };

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  const navLinks = [
    { label: t.navJourney, href: '#journey' },
    { label: t.navExperience, href: '#experience' },
    { label: t.navSkills, href: '#skills' },
    { label: t.navEducation, href: '#education' },
    { label: t.navContact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = sectionHrefs.map((h) => h.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleLang = useCallback(
    (l: Lang) => {
      setLang(l);
      setLangMenuOpen(false);
    },
    [setLang],
  );

  // close lang menu on outside click
  useEffect(() => {
    if (!langMenuOpen) return;
    const close = () => setLangMenuOpen(false);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, [langMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#0f172a] dark:text-white tracking-tight cursor-pointer text-lg font-semibold"
          >
            L.A.
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm transition-colors cursor-pointer ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#2563EB]'
                    : 'text-[#64748b] hover:text-[#0f172a] dark:hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLangMenuOpen(!langMenuOpen);
                }}
                aria-label="Cambiar idioma"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer text-[#0f172a] dark:text-white text-xs font-medium"
              >
                <Languages size={16} />
                <span>{langLabel[lang]}</span>
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 bg-white dark:bg-[#1e293b] rounded-xl shadow-lg border border-[#e2e8f0] dark:border-[#334155] overflow-hidden min-w-[140px]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {(['es', 'pt'] as Lang[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => handleLang(l)}
                        className={`w-full text-left px-4 py-2.5 transition-colors cursor-pointer flex items-center justify-between gap-4 text-sm font-medium ${
                          lang === l
                            ? 'bg-[#2563EB]/5 text-[#2563EB]'
                            : 'text-[#0f172a] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                        }`}
                      >
                        <span>{langFull[l]}</span>
                        {lang === l && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label={`Cambiar a modo ${dark ? 'claro' : 'oscuro'}`}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              {dark ? (
                <Sun size={18} className="text-white" />
              ) : (
                <Moon size={18} className="text-[#0f172a]" />
              )}
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="md:hidden p-2 cursor-pointer text-[#0f172a] dark:text-white"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0f172a] pt-20 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-2xl font-medium text-[#0f172a] dark:text-white cursor-pointer"
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile lang switcher */}
              <div className="border-t border-[#e2e8f0] dark:border-[#334155] pt-6 mt-2 flex gap-3">
                {(['es', 'pt'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      handleLang(l);
                      setMobileOpen(false);
                    }}
                    className={`px-5 py-2.5 rounded-full cursor-pointer transition-colors text-sm font-medium ${
                      lang === l
                        ? 'bg-[#2563EB] text-white'
                        : 'bg-[#f1f5f9] dark:bg-[#334155] text-[#0f172a] dark:text-white'
                    }`}
                  >
                    {langFull[l]}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
