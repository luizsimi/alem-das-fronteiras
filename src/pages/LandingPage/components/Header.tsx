import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, X, Menu, ArrowUpRight } from "lucide-react";
import logoImg from "../../../assets/brand/logo.png";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({
  darkMode,
  toggleDarkMode,
  isMenuOpen,
  setIsMenuOpen,
}: HeaderProps) {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border/20 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Além das Fronteiras"
            className="h-10 w-auto object-contain hover:scale-105 transition-transform"
          />
          <div className="flex flex-col justify-center">
            <span className="font-poppins font-bold text-[20px] text-foreground leading-none tracking-tight">
              Além das
            </span>
            <span className="font-poppins font-medium text-[15px] text-primary leading-none">
              Fronteiras
            </span>
          </div>
        </div>

        {/* Navegação para Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#inicio"
            className="text-[15px] font-plus-jakarta font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            Início
          </a>
          <a
            href="#faq"
            className="text-[15px] font-plus-jakarta font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </a>
          <a
            href="#recursos"
            className="text-[15px] font-plus-jakarta font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            Emergência
          </a>

          {/* Alternador de Tema Desktop */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-card border border-border text-foreground hover:bg-muted transition-all shadow-sm flex items-center justify-center cursor-pointer"
            aria-label="Alternar tema"
          >
            {darkMode ? (
              <Sun size={18} className="text-amber-500" />
            ) : (
              <Moon size={18} className="text-slate-700 dark:text-slate-300" />
            )}
          </button>

          <a
            href="#"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-[16px] font-plus-jakarta font-bold text-[15px] hover:scale-105 hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            Baixar App <ArrowUpRight size={18} />
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          {/* Alternador de Tema Mobile */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-card border border-border text-foreground hover:bg-muted transition-all shadow-sm flex items-center justify-center cursor-pointer"
            aria-label="Alternar tema"
          >
            {darkMode ? (
              <Sun size={18} className="text-amber-500" />
            ) : (
              <Moon size={18} className="text-slate-300" />
            )}
          </button>

          {/* Botão de Menu Hambúrguer (Mobile) */}
          <button
            className="text-foreground bg-card border border-border p-2 rounded-full hover:bg-muted transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Suspenso Mobile com animação */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="absolute top-24 left-4 right-4 bg-card border border-border rounded-[24px] p-6 flex flex-col gap-4 shadow-2xl md:hidden"
            >
              <a
                href="#inicio"
                onClick={() => setIsMenuOpen(false)}
                className="text-[18px] font-plus-jakarta font-bold text-foreground py-2 border-b border-border/40"
              >
                Início
              </a>
              <a
                href="#faq"
                onClick={() => setIsMenuOpen(false)}
                className="text-[18px] font-plus-jakarta font-bold text-foreground py-2 border-b border-border/40"
              >
                FAQ
              </a>
              <a
                href="#recursos"
                onClick={() => setIsMenuOpen(false)}
                className="text-[18px] font-plus-jakarta font-bold text-foreground py-2 border-b border-border/40"
              >
                Emergência
              </a>
              <a
                href="#"
                className="bg-primary text-primary-foreground text-center px-6 py-4 rounded-[16px] font-plus-jakarta font-bold text-[16px] mt-2 flex justify-center items-center gap-2 shadow-lg shadow-primary/20"
              >
                Baixar App <ArrowUpRight size={18} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Indicador de Rolagem Dinâmico */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-primary to-primary/40 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
}
